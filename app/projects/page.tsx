// app/projects/page.tsx

import { fetchFilteredProjects, fetchProjectsPages } from '@/lib/projects-db';
import ProjectSearch from '@/components/ProjectSearch';
import Pagination from '@/components/Pagination';

// marks searchParams
interface PageProps {
  searchParams: Promise<{
    query?: string;
    page?: string;
  }>;
}

export default async function ProjectsOverview({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const query = resolvedParams.query || '';
  const currentPage = Number(resolvedParams.page) || 1;

  // query live database records and page calculations dynamically
  const data = await fetchFilteredProjects(query, currentPage);
  const totalPages = await fetchProjectsPages(query);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">
        ALL PROJECTS BREAKDOWN
      </h2>
      
      {/* search input bar component */}
      <ProjectSearch />

      {data.length === 0 ? (
        <p className="text-zinc-500 text-sm mt-6">No matching portfolio projects found.</p>
      ) : (
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
      )}

      {/* pagination page controls component */}
      <Pagination totalPages={totalPages} />
    </div>
  );
}
