
import Projects from '../../components/projects'
import { getProjects } from '../../lib/projects'

export default async function ProjectsPage() {
  // read projects inside of project folder
  const projects = await getProjects()

  return (
    <section id="projects" className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12'>Projects</h1>

        <Projects projects={projects} />
        
      </div>
    </section>
  )
}