import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface types {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
}

const Page = async () => {
  const data = await axios('https://api.imgflip.com/get_memes')
  const res = data.data
  console.log(res.data.memes);
  

  return (
    <>
      <div className="flex justify-center gap-5 flex-wrap">

        {res.data.memes.map((item: types) => {
          return <div  className='p-10'>
              <h1 className='text-center text-2xl font-bold'>{item.name}</h1>

            <div className='border-4 border-green-800 p-8 flex justify-center flex-wrap items-center gap-5 rounded-2xl w-auto'>
            <Image src={item.url} width={300} height={300} alt='meme' />

            <Link href={{pathname: "singleMeme",
              query: {
                url: item.url,
                id: item.id
              }
              }}>
              <button className='btn btn-outline mt-5'>Generate Meme</button>
            </Link>

            </div>
          </div>
        })}

      </div>
    </>
  )
}

export default Page