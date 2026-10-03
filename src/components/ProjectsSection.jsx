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
          link="https://github.com/ralphmiguelsabellano/CSIT340-Lab1-Sabellano"
        />
        <ProjectCard
          year="2025"
          title="Oath of the Broken"
          description="A group project on our Java class. A simple text-based RPG game where you can choose your own path.(It's Private)"
          tech="JavaScript"
          link="https://github.com/ZakiAlmodiel/Oath-of-the-Broken_G7_RENEW"
        />
        
        
      </div>
    </section>
  )
}

export default ProjectsSection