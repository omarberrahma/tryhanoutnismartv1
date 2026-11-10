-- Enable necessary extensions
create extension if not exists "uuid-ossp";

-- Table: tenants
create table tenants (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  currency text default 'DZD',
  language text default 'ar',
  tax_rate numeric(5,2) default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: users
create table users (
  id uuid primary key references auth.users(id) on delete cascade,
  tenant_id uuid references tenants(id) on delete cascade not null,
  role text check (role in ('Owner', 'Manager', 'Cashier', 'Storekeeper')) not null,
  username text unique,
  pin_hash text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: products
create table products (
  id uuid default uuid_generate_v4() primary key,
  tenant_id uuid references tenants(id) on delete cascade not null,
  name text not null,
  category_id uuid,
  description text,
  base_price numeric(10,2) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: product_variants
create table product_variants (
  id uuid default uuid_generate_v4() primary key,
  product_id uuid references products(id) on delete cascade not null,
  sku text not null,
  barcode text not null,
  size text,
  color text,
  price numeric(10,2),
  stock_quantity integer default 0 not null
);

-- Table: orders
create table orders (
  id uuid default uuid_generate_v4() primary key,
  tenant_id uuid references tenants(id) on delete cascade not null,
  customer_id uuid,
  status text check (status in ('New', 'Confirmed', 'Preparing', 'Shipped', 'Delivered')) not null,
  total_amount numeric(10,2) not null,
  shipping_provider text,
  tracking_number text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Table: order_items
create table order_items (
  id uuid default uuid_generate_v4() primary key,
  order_id uuid references orders(id) on delete cascade not null,
  variant_id uuid references product_variants(id) on delete cascade not null,
  quantity integer not null check (quantity > 0),
  unit_price numeric(10,2) not null
);

-- Enable Row Level Security (RLS)
alter table tenants enable row level security;
alter table users enable row level security;
alter table products enable row level security;
alter table product_variants enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;

-- Create helper function to get current user's tenant_id
create or replace function get_current_tenant_id()
returns uuid as $$
  select tenant_id from users where id = auth.uid();
$$ language sql stable security definer set search_path = public;

-- RLS Policies

-- Tenants
create policy "Users can view their own tenant" on tenants
  for select using (id = get_current_tenant_id());

create policy "Owners can update their tenant" on tenants
  for update using (id = get_current_tenant_id() and (select role from users where id = auth.uid()) = 'Owner');

-- Users
create policy "Users can view users in their tenant" on users
  for select using (tenant_id = get_current_tenant_id());

-- Products
create policy "Users can view products in their tenant" on products
  for select using (tenant_id = get_current_tenant_id());

create policy "Managers and Owners can insert products" on products
  for insert with check (tenant_id = get_current_tenant_id() and (select role from users where id = auth.uid()) in ('Manager', 'Owner'));

create policy "Managers and Owners can update products" on products
  for update using (tenant_id = get_current_tenant_id() and (select role from users where id = auth.uid()) in ('Manager', 'Owner'));

create policy "Managers and Owners can delete products" on products
  for delete using (tenant_id = get_current_tenant_id() and (select role from users where id = auth.uid()) in ('Manager', 'Owner'));

-- Product Variants
create policy "Users can view variants in their tenant" on product_variants
  for select using ((select tenant_id from products where id = product_variants.product_id) = get_current_tenant_id());

create policy "Managers and Owners can modify variants" on product_variants
  for all using ((select tenant_id from products where id = product_variants.product_id) = get_current_tenant_id() and (select role from users where id = auth.uid()) in ('Manager', 'Owner'));

-- Orders
create policy "Users can view orders in their tenant" on orders
  for select using (tenant_id = get_current_tenant_id());

create policy "Users can insert orders in their tenant" on orders
  for insert with check (tenant_id = get_current_tenant_id());

create policy "Users can update orders in their tenant" on orders
  for update using (tenant_id = get_current_tenant_id());

-- Order Items
create policy "Users can view order items in their tenant" on order_items
  for select using ((select tenant_id from orders where id = order_items.order_id) = get_current_tenant_id());

create policy "Users can modify order items in their tenant" on order_items
  for all using ((select tenant_id from orders where id = order_items.order_id) = get_current_tenant_id());
