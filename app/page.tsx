import ProjectList from '../components/ProjectList';

export const metadata = {
  title: "Sarah Lord | Developer Portfolio",
  description: "A professional showcase of my web development projects, technical skills, and engineering foundations built with Next.js and Tailwind CSS.",
};

const projects = [
  {
    title: 'WDD 330 Course Assignments',
    description: 'A dedicated repository containing web frontend development projects, focusing on advanced CSS layouts, dynamic JSON data fetching, and interactive user interfaces.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'JSON API'],
    link: 'https://github.com'
  },
  {
    title: 'Next.js Portfolio Platform',
    description: 'A modern, responsive developer portfolio engineered with Next.js App Router structure and TypeScript, styled entirely with atomic Tailwind utility classes.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    link: 'https://github.com'
  }
];

export default function Home() {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center max-w-2xl mx-auto py-12 px-4 space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
          My Portfolio
        </h1>
        <p className="text-lg text-slate-400 leading-relaxed">
          Welcome! I'm a developer specializing in front-end architectures and dynamic full-stack applications. Explore some of my recent web development projects and course repositories below.
        </p>
      </section>

      {/* Projects Grid */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold text-white mb-6 border-b border-slate-800 pb-2">
          Featured Projects
        </h2>
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}
