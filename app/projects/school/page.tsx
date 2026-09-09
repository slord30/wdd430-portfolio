import { Project } from '@/lib/projects-db';

export default async function SchoolProjectsPage() {
  // Fetching explicitly with the ?type=school query filter
  const res = await fetch('http://localhost:3000/api/projects?type=school', { 
    cache: 'no-store' 
  });
  const data: Project[] = await res.json();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-indigo-400">School Projects</h2>
      
      {data.length === 0 ? (
        <p className="text-zinc-500 text-sm">No school projects found.</p>
      ) : (
        <ul className="space-y-4">
          {data.map((project) => (
            <li key={project.id} className="border-b border-slate-800 pb-3 last:border-0">
              <h3 className="font-semibold text-white">{project.title}</h3>
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
      )}
    </div>
  );
}
