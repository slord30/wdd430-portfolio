import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Dynamic Grid Layout */}
      <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard 
            key={project.title} 
            {...project} 
          />
        ))}
      </section>
    </div>
  );
}
