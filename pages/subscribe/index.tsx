export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-2xl font-bold mb-4">📬 Subscribe for updates</h1>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <input type="email" placeholder="Your email" className="p-2 rounded bg-white text-black" />
        <button className="px-4 py-2 bg-white text-black rounded">Subscribe</button>
      </form>
    </div>
  )
}