import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm '>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div className='mr-6'>
          <Link href='/#landing' className='font-serif text-2xl font-bold '>
            RS
          </Link>
        </div>
        {/* Fading effect container for nav items */}
        <div className="relative w-full overflow-hidden md:w-auto">
          {/* Gradient fade on left */}
          <div className="absolute inset-y-0 left-0 z-10 w-1 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          

        <ul className='flex items-center gap-6 overflow-x-auto flex-nowrap text-sm font-light text-muted-foreground sm:gap-10 scroll-smooth whitespace-nowrap
                         before:absolute before:left-0 before:top-0 before:bottom-0 before:w-8 before:bg-gradient-to-r before:from-background before:to-transparent
                         after:absolute after:right-0 after:top-0 after:bottom-0 after:w-8 after:bg-gradient-to-l after:from-background after:to-transparent
                         md:overflow-visible md:before:hidden md:after:hidden'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/#intro'>About</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/#skills'>Skills & Tools</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/#projects'>Work</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/#contact'>Contact</Link>
          </li>

          {/* <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li> */}
        </ul>
        {/* Gradient fade on right */}
        <div className="absolute inset-y-0 right-0 z-10 w-1 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
        <div className='ml-6'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
