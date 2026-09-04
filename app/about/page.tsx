import SkillSection from '../../components/SkillSection';

export const metadata = {
  title: "About Me | Sarah Lord",
  description: "Learn more about my background, web design experience since 2008, and my educational journey at BYU-Idaho.",
};

export default function About() {
  const coreTech = ['HTML5 / CSS3', 'JavaScript', 'JSON APIs', 'React', 'Next.js', 'Tailwind CSS'];
  const scientificBackground = ['Chemistry Bachelor\'s', 'Mathematics Minor', 'Data Logic', 'Technical Writing'];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 space-y-6 pb-16">
      {/* Page Heading */}
      <section className="border-b border-slate-800 pb-4">
        <h2 className="text-3xl font-bold tracking-tight text-white uppercase tracking-wider">
          About Me
        </h2>
      </section>

      {/* Bio Content */}
      <section className="space-y-4 text-slate-300 text-base leading-relaxed">
        <p>
          Hi, I'm Sarah! I am a student at BYU-Idaho working on my web development degree. 
        </p>
        
        <p>
          I've actually been designing websites and graphics for a long time, teaching myself the ropes since 2008. I decided it was time to back up that experience with an official degree. Right now, I'm in my senior year and on track to graduate in Spring 2027.
        </p>

        <p>
          My background is actually a bit of a mix; I also have a Bachelor's degree in Chemistry and a minor in Mathematics. I really enjoy bringing that logical, scientific side into my design work to make things both clean and organized.
        </p>

        <p>
          In my previous frontend classes like <strong>WDD 330</strong>, I spent a lot of time working directly with core web building blocks. I learned how to manipulate screen elements dynamically, fetch and display information from external data sources using JSON, and structure clean layouts using standard JavaScript.
        </p>

        <p>
          Lately, my current classes have been building right on top of those foundations by introducing modern framework tools like <strong>React</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>. This portfolio site is a place for me to bring all of those skills together and share the projects I build along the way.
        </p>
      </section>

      {/* Rendering Custom Components to About Page */}
      <section className="pt-4">
        <SkillSection categoryTitle="Web Development Toolbelt" skillsList={coreTech} />
        <SkillSection categoryTitle="Analytical Foundations" skillsList={scientificBackground} />
      </section>
    </div>
  );
}
