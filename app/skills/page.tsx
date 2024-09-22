import React from 'react'
import Skills from '@/components/skills'

export default function SkillsPage() {
  return (
    <section id="skills" className="flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 pt-40 md:flex-row md:items-center" >
    {/* <section id="projects" className='pb-24 pt-40'> */}
      <div className='container max-w-3xl mx-auto p-0'>
        <h1 className='title mb-14'>Skills & Tools</h1>

        <Skills />
        
      </div>
    </section>
  )
}
