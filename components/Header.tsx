import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white border-b border-slate-800 py-4 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* My Name */}
        <div id="header-title" className="text-xl font-bold tracking-wider uppercase">
          <Link href="/" className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200">
            Sarah Lord
          </Link>
        </div>
        
        {/* Navigation */}
        <ul className="flex gap-6 font-medium text-slate-300 uppercase tracking-wider text-xs">
          <li>
            <Link href="/" className="hover:text-blue-400 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition-colors duration-200">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
