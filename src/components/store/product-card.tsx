export function ProductCard({ title, price }: { title: string, price: number }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <div className="bg-gray-200 h-32 w-full mb-4"></div>
      <h3 className="font-bold">{title}</h3>
      <p className="text-gray-600">${price.toFixed(2)}</p>
      <button className="mt-2 w-full bg-blue-500 text-white py-1 rounded">Add to Cart</button>
    </div>
  )
}
