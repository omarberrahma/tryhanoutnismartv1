export function POSCart() {
  return (
    <div className="border p-4 rounded bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Current Order</h2>
      <ul className="space-y-2">
        <li className="flex justify-between">
          <span>Product A</span>
          <span>$10.00</span>
        </li>
      </ul>
      <div className="mt-4 border-t pt-4 font-bold flex justify-between">
        <span>Total:</span>
        <span>$10.00</span>
      </div>
      <button className="w-full mt-4 bg-green-500 text-white py-2 rounded">Checkout</button>
    </div>
  )
}
