import React from 'react'
import Link from 'next/link'
import Blog1 from '../../public/blended.jpg'
import Blog2 from "../../public/collaborative-learning.jpg"
import Blog3 from "../../public/inquiry.jpg"
import Blog4 from "../../public/problem.jpg"
import Blog5 from "../../public/project.jpg"
import Blog6 from "../../public/game.jpg"
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface POST {
  id: string,
  title: string,
  description: string,
  imagePath: StaticImageData,
  date: string,
  slug: string
}


export default function educationalPsychology () {
  const posts: POST[] = [
    {
      id: "1",
      title: "Blended Learning: An Innovative Educational Approach",
      description: "Blended learning seamlessly integrates traditional classroom teaching with online tools and resources, offering students a flexible and personalized learning experience.",
      imagePath: Blog1,
      date: "05 October 2024",
      slug: "blog-blended-learning"
    },
    {
      id: "2",
      title: "Collaborative Learning: The Power of Team Work",
      description: "Collaborative learning fosters teamwork and communication by encouraging students to work together, share ideas, and learn from one another to achieve common goals",
      imagePath: Blog2,
      date: "28 September 2022",
      slug: "blog-collaborative-learning"
    },
    {
      id: "3",
      title: "Inquiry-Based Learning: Sparking Curiosity for Lifelong Discovery",
      description: "Inquiry-based learning empowers students to ask questions, explore solutions, and build a deeper understanding through active engagement and critical thinking.",
      imagePath: Blog3,
      date: "12 February 2020",
      slug: "blog-inquiry-based-learning"
    },
    {
      id: "4",
      title: "Problem Based Learning",
      description: "Problem-based learning (PBL) empowers students to develop critical thinking, collaboration, and problem-solving skills by engaging them in real-world challenges",
      imagePath: Blog4,
      date: "31 August 2019",
      slug: "blog-problem-based-learning"
    },
    {
      id: "5",
      title: "Project Based Learning",
      description: "Project-based learning (PBL) immerses students in meaningful, hands-on projects that promote deep understanding, creativity, and the application of knowledge to real-world contexts",
      imagePath: Blog5,
      date: "02 March 2015",
      slug: "blog-project-based-learning",
    },
    {
      id: "6",
      title: "Game Based Learning",
      description: "Game-based learning enhances student engagement and retention by transforming educational content into interactive and enjoyable experiences.",
      imagePath: Blog6,
      date: "18 November 2012",
      slug: "blog-game-based-learning"
    },
  ]
  return (
    <div className='lg:mx-20'>
        <h1 className='text-center text-3xl lg:text-4xl p-5 font-bold text-amber-700'>Educational Psychology</h1>

        <div className='grid gap-10 lg:grid-cols-2 2xl:grid-cols-3 place-items-center '>
          {
            posts.map((post, index) => (
              <div key={post.id} className='w-4/5 p-4 border rounded-lg shadow-md'>
                <Image src={post.imagePath} alt="image" className="w-full object-cover rounded-lg"/>
                <div>
                <h2 className="font-bold text-lg">{post.title}</h2>
                    <p className="text-sm text-gray-500 mt-2">{post.date}</p>
                </div>
                <p className='italic leading-5 mt-2'>{post.description}</p>
                <div>
                  <Link href={`/educationalpsychology/${post.slug}`}><Button className='w-36 mt-2 h-10 bg-primary text-white bg-amber-700 hover:bg-amber-600'> Read More </Button></Link>
                </div>
              </div>

            ))
          }
        </div>
    </div>
  )
}
