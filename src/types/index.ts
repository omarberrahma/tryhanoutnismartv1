export type Role = 'Owner' | 'Manager' | 'Cashier' | 'Storekeeper';

export interface Tenant {
  id: string;
  name: string;
  currency: string;
  language: string;
  tax_rate?: number;
  created_at: string;
}

export interface User {
  id: string;
  tenant_id: string;
  role: Role;
  email?: string;
  username?: string;
  pin_hash?: string;
  created_at: string;
}

export interface Product {
  id: string;
  tenant_id: string;
  name: string;
  category_id?: string;
  description?: string;
  base_price: number;
  created_at: string;
}

export interface ProductVariant {
  id: string;
  product_id: string;
  sku: string;
  barcode: string;
  size?: string;
  color?: string;
  price?: number;
  stock_quantity: number;
}

export type OrderStatus = 'New' | 'Confirmed' | 'Preparing' | 'Shipped' | 'Delivered';

export interface Order {
  id: string;
  tenant_id: string;
  customer_id?: string;
  status: OrderStatus;
  total_amount: number;
  shipping_provider?: string;
  tracking_number?: string;
  created_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  variant_id: string;
  quantity: number;
  unit_price: number;
}

export interface Database {
  public: {
    Tables: {
      tenants: {
        Row: Tenant;
        Insert: Omit<Tenant, 'id' | 'created_at'>;
        Update: Partial<Omit<Tenant, 'id' | 'created_at'>>;
      };
      users: {
        Row: User;
        Insert: Omit<User, 'id' | 'created_at'>;
        Update: Partial<Omit<User, 'id' | 'created_at'>>;
      };
      products: {
        Row: Product;
        Insert: Omit<Product, 'id' | 'created_at'>;
        Update: Partial<Omit<Product, 'id' | 'created_at'>>;
      };
      product_variants: {
        Row: ProductVariant;
        Insert: Omit<ProductVariant, 'id'>;
        Update: Partial<Omit<ProductVariant, 'id'>>;
      };
      orders: {
        Row: Order;
        Insert: Omit<Order, 'id' | 'created_at'>;
        Update: Partial<Omit<Order, 'id' | 'created_at'>>;
      };
      order_items: {
        Row: OrderItem;
        Insert: Omit<OrderItem, 'id'>;
        Update: Partial<Omit<OrderItem, 'id'>>;
      };
    };
  };
}
