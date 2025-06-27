import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <Head>
        <title>Welcome to PeAk</title>
      </Head>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to PeAk</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8">Explore Tabs, Merch, and More</p>
      <div className="flex gap-4">
        <Link href="/tabs"><button className="px-6 py-2 bg-white text-black rounded-full">View Tabs</button></Link>
        <Link href="/subscribe"><button className="px-6 py-2 border border-white rounded-full">Subscribe</button></Link>
      </div>
    </div>
  )
}