// app/projects/page.tsx
import { getProjects, Project } from '@/lib/projects-db'; // Added getProjects here

export default async function ProjectsOverview() {
  
  //BYPASS FETCH COMPLETELY: Call your function directly to grab the array from memory
  const data: Project[] = getProjects(); 

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-white">All Projects Breakdown</h2>
      <ul className="space-y-4">
        {data.map((project) => (
          <li key={project.id} className="border-b border-slate-800 pb-3 last:border-0">
            <h3 className="font-semibold text-indigo-400">{project.title}</h3>
            <p className="text-zinc-400 text-sm mt-1">{project.description}</p>
            <div className="flex gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-slate-800 text-zinc-300 text-xs px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
