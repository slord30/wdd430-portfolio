export default function Footer() {  
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 text-slate-400 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p>
          &copy; {new Date().getFullYear()} | <span className="text-slate-200 font-medium">Sarah Lord</span> | All rights reserved
        </p>
        
        {/* Built-with Badge Label */}
        <p className="text-xs text-slate-500">
          Built with <span className="text-blue-400">Next.js</span> &amp; <span className="text-blue-400">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
