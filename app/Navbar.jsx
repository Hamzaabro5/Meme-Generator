import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <>
    <div className='bg-teal-600'>
        <Link href={`/`}><h1 className='text-5xl font-black p-4 text-white tracking-wider text-center'>Meme Generator</h1></Link>
    </div>
    </>
  )
}

export default Navbar