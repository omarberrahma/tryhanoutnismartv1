export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-100 rtl:space-x-reverse">
      <aside className="w-64 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <a href="/dashboard/pos" className="hover:text-blue-500">POS</a>
          <a href="/dashboard/inventory" className="hover:text-blue-500">Inventory</a>
          <a href="/dashboard/orders" className="hover:text-blue-500">Orders</a>
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
