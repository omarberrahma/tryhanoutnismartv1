export function BarcodeGenerator({ value }: { value: string }) {
  return (
    <div className="border p-4 text-center">
      <div className="bg-gray-200 h-16 w-full mb-2 flex items-center justify-center">
        [Barcode Image: {value}]
      </div>
      <p className="text-sm">{value}</p>
    </div>
  )
}
