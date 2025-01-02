import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

export default function Header() {
  return (
    <div className='bg-yellow-200'>
      <nav className='flex justify-between items-center lg:mx-20 p-7 flex-col sm:flex-row'>
        <section className='flex justify-start items-center gap-4'>
          <h1 className='font-bold text-xl font-sans text-amber-700'> ChalkTalk </h1>
        </section>
        <section>
          <ul className='flex justify-between items-center gap-4 mt-6 lg:mt-0 lg:gap-8 font-sans'>
            <li>
              <Link href="/" className='hover:text-amber-600 text-xl font-semibold text-amber-700'>Home</Link>
            </li>
            <li>
              <Link href="/educationalpsychology" className='hover:text-amber-600 text-xl font-semibold text-amber-700'>Blogs</Link>
            </li>
            <Link href="/Contact">
              <Button className='bg-amber-700 hover:bg-amber-600  py-3 px-5 text-white rounded-md font-semibold font-sans text-sm'>Contact</Button>
            </Link>
          </ul>
        </section>
      </nav>
    </div>
  )
}



