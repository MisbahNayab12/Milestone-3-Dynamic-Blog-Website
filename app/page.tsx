'use client'

import React from 'react'
import Home from '../public/homeimage.jpg'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function page (){
  return (
    <div className='mx-10 lg:mx-28 font-sans'> 
      <h1 className='mt-10 text-center text-4xl lg:text-6xl p-5 font-bold text-amber-700'>Welcome to Educational Blog </h1>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mt-14'>
        <div>
          <h1 className='text-3xl font-bold text-amber-700'>Teaching Blogs</h1>
          <p className='mt-3'> In this platform, you will find interesting blogs to post </p>
          <Link href={`/educationalpsychology`}><Button className='w-36 mt-3 h-10 bg-primary text-white bg-amber-700 hover:bg-amber-600'> View All Blogs </Button></Link>
        </div>

        <div className='image lg:w-[600px] mt-14 lg:mt-0'>
          <Image src={Home} alt="image"/>
        </div>
      </div>
    </div>
  )
}
