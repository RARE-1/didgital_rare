import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants/projects";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16">

          <div>

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Demo Projects
            </p>

            <h2 className="text-4xl md:text-6xl font-black text-white max-w-3xl leading-tight">
              Example Concepts For Local Businesses.
            </h2>

          </div>

          <p className="text-white/60 max-w-xl leading-relaxed">
            These demo systems can be customized and launched quickly for businesses looking to modernize operations and improve customer experience.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
}