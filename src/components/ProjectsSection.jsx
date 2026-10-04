import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/ZeusCans/CSIT340-Lab1-Cansancio"
        />
        <ProjectCard
          year="2025"
          title="Syndicate by Hanggaws"
          description="A group project on our Java class"
          tech="JavaScript"
          link="https://github.com/ZeusCans/OOP2_Hanggaws"
        />
        
        
      </div>
    </section>
  )
}

export default ProjectsSection