import Link from 'next/link';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-4xl p-6 text-white">
      {/* Sub-navigation for the Projects section only */}
      <nav className="mb-6 flex gap-4 border-b border-slate-800 pb-3 text-sm font-medium text-slate-400">
        <Link href="/projects" className="hover:text-white transition-colors">
          Overview
        </Link>
        <Link href="/projects/opensource" className="hover:text-emerald-400 transition-colors">
          Open Source
        </Link>
        <Link href="/projects/school" className="hover:text-indigo-400 transition-colors">
          School Work
        </Link>
      </nav>
      
      {/* Container where sub-pages (Overview, OpenSource, School) load */}
      <div className="rounded-xl bg-slate-900 p-6 border border-slate-800 shadow-xl">
        {children}
      </div>
    </section>
  );
}
