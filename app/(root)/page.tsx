import Image from "next/image";

{/* <Image
  className="dark:invert"
  src="/red.png"
  alt="Next.js logo"
  width={100}
  height={20}
  priority
/> */}

import React from 'react'

async function Home() {
  const res = await fetch('https://jsonplaceholder.typicode.com/albums')
  if (!res.ok) throw new Error('Failed to fetch data')
  const albums = await res.json()
  return (
    <div>
      <h1>Albums  </h1>
      <ul className="flex flex-wrap gap-2">
        {albums.map((album: { id: number; title: string }) => (
          <li className="flex m-2 p-2 rounded-xl bg-gray-800 border" key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home
