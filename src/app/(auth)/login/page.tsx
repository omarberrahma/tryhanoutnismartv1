export default function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Login</h1>
      <form className="flex flex-col gap-4 w-full max-w-sm">
        <input type="email" placeholder="Email" className="border p-2 rounded" />
        <input type="password" placeholder="PIN" className="border p-2 rounded" />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  )
}
