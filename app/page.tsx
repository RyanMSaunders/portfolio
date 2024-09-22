import Intro from "@/components/intro";
import NewsletterForm from "@/components/newsletter-form";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import { MDXRemote } from 'next-mdx-remote'
import AboutPage from "./about/page";
import SkillsPage from "./skills/page";
import Contact from "./contact/page";
import ProjectsPage from "./projects/page";

export default function Home() {
  
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        {/* Home Page */}
        <Intro/>

        {/* <AboutPage /> */}
        <SkillsPage />
        <ProjectsPage />
        <Contact />
        {/* <RecentPosts />        
        <RecentProjects />
        <NewsletterForm /> */}
      </div>

    </section>
  );
}
