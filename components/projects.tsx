
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'

import { ProjectMetadata } from '../lib/projects'
import { formatDate } from '../lib/utils'

export default function Projects({
  projects
}: {
  projects: ProjectMetadata[]
}) {
  return (
      <ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
        {projects.map(project => (
          <div key={project.slug}>
            <li className='group relative'>
              <Link href={`/projects/${project.slug}`}>
                {project.image && (
                  <div className='h-72 w-full overflow-hidden bg-muted sm:h-60'>
                    <Image
                      src={project.image}
                      alt={project.title || ''}
                      fill
                      className='rounded-lg object-cover object-center transition-transform duration-500 group-hover:scale-105'
                    />
                  </div>
                  
                )}

                {project.gif && (
                  <div className='h-72 w-full overflow-hidden bg-muted sm:h-60'>
                    <Image
                      src={project.gif}
                      alt={project.title || ''}
                      fill
                      className='rounded-lg object-contain object-center transition-transform duration-500 group-hover:scale-105'
                    />
                  </div>
                  
                )}

                <div className='absolute inset-[1px] rounded-lg bg-background/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                <div className='absolute inset-x-0 bottom-0 translate-y-2 px-6 py-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100'>
                  <h2 className='title line-clamp-1 text-xl no-underline'>
                    {project.title}
                  </h2>
                  <p className='line-clamp-1 text-sm text-muted-foreground'>
                    {project.summary}
                  </p>
                  <p className='text-xs font-light text-muted-foreground'>
                    {formatDate(project.publishedAt ?? '')}
                  </p>
                </div>
              </Link>
            </li>
            <div className='relative flex justify-around mt-5'>
              {project.url &&
              <div className='relative flex justify-start'>
                <Link href={project.url || ''} target="_blank" rel="noopener noreferrer">
                  <Button
                    type='submit'
                    className='w-full max-w-xs disabled:opacity-50 font-sans text-2xl text-foreground '
                  > 
              
                  <span className='font-sans text-base text-background'>Visit Site</span> {/* White text */}                  
                  </Button>
                </ Link>
              </div>}
              {project.githubUrl &&
              <div className='relative flex justify-start'>
                <Link href={project.githubUrl || ''} target="_blank" rel="noopener noreferrer">
                  <Button
                    type='submit'
                    className='w-full max-w-xs disabled:opacity-50 font-sans text-2xl text-foreground '
                  > 
              
                  <span className='font-sans text-base text-background'>GitHub</span> {/* White text */}                  
                  </Button>
                </ Link>
              </div>}
            </div>
              
          </div>
        ))}
      </ul>
      
  )
}