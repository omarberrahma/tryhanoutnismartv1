export default async function StoreFront({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Store: {slug}</h1>
      <p>Public store catalog will be here.</p>
    </div>
  )
}
