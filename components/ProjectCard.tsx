interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}
        
export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
  return (
    <article className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-md hover:border-slate-700 transition-all duration-300 flex flex-col justify-between h-full">
      <div>
        {/* Project Title */}
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-blue-400">
          {title}
        </h3>
        
        {/* Project Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div>
        {/* Technologies List */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs font-medium bg-blue-950 text-blue-400 px-2.5 py-1 rounded-md border border-blue-900/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* External Link */}
        {link && (
          <div className="pt-2 border-t border-slate-850">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 group"
            >
              View Project 
              <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ml-1">→</span>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}
