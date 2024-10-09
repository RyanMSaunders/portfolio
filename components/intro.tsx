import Image from 'next/image'
import authorImage from '../public/images/authors/Ryan-profilePhoto-2024.jpg'

export default function Intro() {
  return (
    <section id="intro" className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 pt-40 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Ryan.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
        
          I&#39;m a Full-Stack Web Developer, Ontario Certified Teacher, and Musician based in Toronto, Canada. I&#39;m passionate about learning new methods and technologies as they arise and collaborating with others.
        </p>
        <p className='mt-3 font-light text-muted-foreground'>
          I have a Bachelor&#39;s Degree in Education from Brock University, a BA in Music from Humber College, and a Diploma in Full-Stack Web Development from Lighthouse Labs. I love writing and performing music, teaching, and building dynamic, user-friendly web applications that solve real-world problems using clean code and effective design.
        </p>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m happiest when I&#39;m learning, creating, and contributing to something that will make a difference. Feel free to reach out and say hello!
        </p>
  
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Ryan Saunders'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
