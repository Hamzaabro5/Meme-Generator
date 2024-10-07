"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react'

const SingleMeme = ({searchParams}: {searchParams: {id: string; url: string}}) => {
    const [meme , setMeme] = useState<string | null>(null);
    const text1 = useRef<HTMLInputElement>(null)
    const text2 = useRef<HTMLInputElement>(null)


    const generateMeme = async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(text1.current?.value);
        console.log(text2.current?.value);
       
        const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=hamzaabroduit&password=hamzaabro&text0=${text1.current?.value}&text1=${text2.current?.value}` , {
            method: 'POST'
        })
        const response = await data.json()
        console.log(response);
        setMeme(response.data.url);
    }
    
  return (
    <>
     <h1 className='text-5xl font-black p-5 tracking-wider text-center'>Generate Meme</h1>

    <div className='flex justify-center flex-wrap items-center mt-10 gap-10'>
    <Image src={searchParams.url} width={400} height={200} alt='meme'/>

    <form onSubmit={generateMeme}>

        <div>
        <input className='input input-bordered rounded-full input-lg' type="text" placeholder='Enter text 1' ref={text1}/>
        </div>

        <div className='my-5'>
        <input className='input input-bordered rounded-full input-lg' type="text" placeholder='Enter text 2' ref={text2} />
        </div>

        <button className='btn btn-outline rounded-full ms-20' type='submit'>Create meme</button>
    </form>

    </div>
    <div className='flex justify-center mt-20'>
    {meme ? <Image src={meme} width={500} height={200} alt='meme'/> : null}
    </div>
    <div className='flex justify-center'>
    <Link href={`/`}><button className='btn btn-accent rounded-full text-white font-bold text-xl my-5'>Back to Home</button></Link>
    </div>
    </>
  )
}

export default SingleMeme 