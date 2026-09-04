interface SkillSectionProps {
  categoryTitle: string;
  skillsList: string[];
}

export default function SkillSection({ categoryTitle, skillsList }: SkillSectionProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-6">
      {/* Category Heading */}
      <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4 border-b border-slate-800/60 pb-2">
        {categoryTitle}
      </h3>
      
      {/* Skills Mapped and Displayed in Grid */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm text-slate-300">
        {skillsList.map((skill) => (
          <li key={skill} className="flex items-center gap-2 bg-slate-950/40 px-3 py-2 rounded-lg border border-slate-850">
            <span className="text-blue-500 font-bold">▹</span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
