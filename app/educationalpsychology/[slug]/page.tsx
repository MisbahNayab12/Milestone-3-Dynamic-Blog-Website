'use client'

import React, { useEffect, useState } from 'react'
import Blog1 from '../../../public/blended.jpg'
import Blog2 from "../../../public/collaborative-learning.jpg"
import Blog3 from "../../../public/inquiry.jpg"
import Blog4 from "../../../public/problem.jpg"
import Blog5 from "../../../public/project.jpg"
import Blog6 from "../../../public/game.jpg"
import { StaticImageData } from 'next/image'
import Image from 'next/image'
import CommentSection from '@/components/CommentSection'
import { useParams } from 'next/navigation'

interface POST {
  id: string,
  title: string,
  description: string,
  imagePath: StaticImageData,
  date: string,
  slug: string
}

export default function Approach({ params }: { params: { slug: string } }) {
  const posts: POST[] = [
    {
      id: "1",
      title: "Blended Learning: An Innovative Educational Approach",
      description: "Blended learning is an innovative educational approach that integrates traditional face-to-face classroom methods with online learning tools and techniques, creating a seamless and flexible learning experience. This hybrid model capitalizes on the strengths of both environments, offering students the opportunity to engage with materials at their own pace while still benefiting from direct interaction with instructors and peers. In a blended learning setup, students can access a variety of resources such as video lectures, interactive simulations, and digital assessments, which complement in-person discussions, group activities, and hands-on projects. By leveraging technology, blended learning fosters personalized learning paths, catering to diverse learning styles and needs. Moreover, it encourages the development of essential 21st-century skills such as self-directed learning, digital literacy, and critical thinking. For educators, this approach provides valuable insights through data analytics, enabling them to monitor student progress and adapt instruction accordingly. As education continues to evolve, blended learning stands out as a versatile and effective solution that bridges the gap between traditional and modern pedagogies.",
      imagePath: Blog1,
      date: "October 5, 2024",
      slug: "blog-blended-learning"
    },
    {
      id: "2",
      title: "Collaborative Learning: The Power of Team Work",
      description: "Collaborative learning isnt just about sharing notes or working on group projects; its about unlocking the full potential of teamwork to deepen understanding, spark creativity, and foster personal growth. Imagine tackling a tough math problem—what seems impossible alone becomes achievable when a group pools their ideas and perspectives. When learners collaborate, they expose each other to diverse approaches, unique insights, and creative problem-solving techniques that might not surface in isolation. Beyond academics, working together builds communication and interpersonal skills, preparing individuals for real-world teamwork in careers and communities. Plus, lets be honest—learning is way more fun when you're brainstorming ideas with friends, bouncing off thoughts, and celebrating breakthroughs together. Its the perfect mix of productivity and connection, proving that the best way to grow is by lifting each other up!",
      imagePath: Blog2,
      date: "September 28, 2022",
      slug: "blog-collaborative-learning"
    },
    {
      id: "3",
      title: "Inquiry-Based Learning: Sparking Curiosity for Lifelong Discovery",
      description: "Inquiry-based learning is a dynamic and student-centered approach to education that places curiosity at the heart of the learning process. Instead of passively receiving information, students are encouraged to ask meaningful questions and actively investigate the world around them. This method fosters critical thinking and problem-solving skills as students delve into real-world issues and scenarios. By exploring their interests and constructing knowledge through hands-on activities, they become co-creators of their educational journey. Inquiry-based learning promotes a deep sense of ownership and intrinsic motivation, ensuring that learning becomes a relevant and memorable experience. Whether investigating scientific phenomena, solving complex problems, or exploring historical events, this approach equips students with the tools to seek knowledge, analyze information critically, and communicate their findings effectively. In an ever-changing world, inquiry-based learning prepares learners to adapt, innovate, and contribute meaningfully to society.",
      imagePath: Blog3,
      date: "February 12, 2020",
      slug: "blog-inquiry-based-learning"
    },
    {
      id: "4",
      title: "Problem Based Learning",
      description: "Problem-based learning (PBL) is a dynamic instructional approach that places students at the center of the learning process by engaging them in solving complex, real-world problems. Unlike traditional teaching methods, PBL shifts the focus from rote memorization to active exploration, encouraging students to take ownership of their learning journey. In this model, students work collaboratively in small groups to investigate a problem, identify knowledge gaps, and develop solutions, guided by a facilitator who provides support rather than direct instruction. This hands-on approach not only enhances critical thinking and problem-solving skills but also fosters teamwork, communication, and adaptability—key competencies for success in todays fast-evolving world. Additionally, PBL connects theoretical concepts to practical applications, making learning more relevant and engaging. By encountering challenges that mimic real-life scenarios, students gain the confidence and skills needed to tackle future problems with creativity and resourcefulness. Problem-based learning transforms education into an interactive and meaningful experience, preparing students for both academic and professional success.",
      imagePath: Blog4,
      date: "August 31, 2019",
      slug: "blog-problem-based-learning"
    },
    {
      id: "5",
      title: "Project Based Learning",
      description: "TProject-based learning (PBL) is an educational strategy that emphasizes active engagement through the completion of meaningful, hands-on projects designed to solve real-world problems or answer complex questions. This approach goes beyond traditional teaching methods by encouraging students to explore, inquire, and create as they work on projects that integrate various subject areas and skills. PBL fosters a deep understanding of content by requiring students to apply their knowledge in authentic, practical ways, whether designing a sustainable building, developing a business plan, or creating a multimedia presentation. Collaboration is a cornerstone of PBL, as students often work in teams, learning to communicate effectively, manage conflicts, and leverage each members strengths. Additionally, this method cultivates critical thinking, creativity, and resilience, as students face challenges, refine their ideas, and iterate on their work. Guided by teachers who act as facilitators rather than direct instructors, students take ownership of their learning journey, making the experience both empowering and deeply engaging. By connecting learning to the real world, project-based learning not only boosts academic achievement but also prepares students with the skills and confidence they need to thrive in future careers and life challenges.",
      imagePath: Blog5,
      date: "March 02, 2015",
      slug: "blog-project-based-learning",
    },
    {
      id: "6",
      title: "Game Based Learning",
      description: "Game-based learning (GBL) is an innovative educational approach that integrates the principles of gaming into the learning process to make education engaging, interactive, and impactful. By leveraging the motivational power of games, GBL transforms traditional learning into an exciting experience where students actively participate, problem-solve, and collaborate to achieve goals. Games in this context are designed with specific learning objectives, whether it's mastering mathematical concepts, developing strategic thinking, or enhancing historical knowledge. This method taps into students' natural curiosity and competitive spirit, offering immediate feedback, rewards, and progression that keep them motivated and invested in their learning journey. GBL also fosters critical 21st-century skills such as teamwork, decision-making, and adaptability, as players navigate challenges and work towards objectives. Beyond academic gains, game-based learning promotes emotional engagement, as students feel a sense of accomplishment and pride in overcoming obstacles. With the advent of advanced technologies such as virtual reality, augmented reality, and gamified apps, GBL offers diverse opportunities to create immersive and personalized educational experiences. As education continues to evolve, game-based learning stands out as a powerful tool to make learning both fun and effective, bridging the gap between entertainment and education.",
      imagePath: Blog6,
      date: "November 18, 2012",
      slug: "blog-game-based-learning"
    },
  ]
  const {slug} = useParams();

  
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return <div>Post not found!</div>;
  }
  
  const [, setApproach] = useState<string | null>(null);

  useEffect(() => {
    setApproach(typeof slug === 'string' ? slug : null);
  }, [slug]);

  return (

    <div className='mx-10'>
    <h1 className='text-4xl font-sans text-center xl:text-left xl:mx-52 font-bold mt-12 text-amber-700'>{post?.title}</h1>
    <p className='xl:mx-52 text-sky-700 font-semibold mb-10 mt-5 lg:mt-2 text-center 2xl:text-left'>Published On: {post.date}</p>
    <Image src={post?.imagePath} alt={post.title} width={800} height={400} className='mx-auto lg:w-9/12 lg:object-contain' />
    <p className=' text-left lg:text-center leading-8 mt-5'>{post.description}</p>
    
    <CommentSection/>
  </div>
  );
}

