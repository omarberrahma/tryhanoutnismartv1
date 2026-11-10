export default async function LandingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Landing Page: {id}</h1>
      <p>Special product offers will be here.</p>
    </div>
  )
}
