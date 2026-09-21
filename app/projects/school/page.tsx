// app/projects/school/page.tsx

import { Suspense } from 'react';
import { getProjects, Project } from '@/lib/projects-db';

async function SchoolProjectList() {
  const data: Project[] = await getProjects('school');

  if (data.length === 0) {
    return <p className="text-zinc-500 text-sm">No school projects found.</p>;
  }

  return (
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
  );
}

// local fallback skeleton component
function SchoolSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Skeleton Item 1 */}
      <div className="border-b border-slate-800 pb-3 space-y-3">
        <div className="h-5 w-1/2 bg-slate-800 rounded"></div>
        <div className="h-4 w-full bg-slate-800 rounded"></div>
      </div>
      {/* Skeleton Item 2 */}
      <div className="border-b border-slate-800 pb-3 space-y-3">
        <div className="h-5 w-1/3 bg-slate-800 rounded"></div>
        <div className="h-4 w-full bg-slate-800 rounded"></div>
      </div>
    </div>
  );
}

// main page layout
export default function SchoolProjectsPage() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-indigo-400">School Projects</h2>
      
      <Suspense fallback={<SchoolSkeleton />}>
        <SchoolProjectList />
      </Suspense>
    </div>
  );
}
