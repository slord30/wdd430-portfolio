import Link from 'next/link';
import NavLinks from './NavLinks'; // Import your client component

export default function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur p-4">
      <div className="mx-auto max-w-4xl flex justify-between items-center">
        <Link href="/" className="font-bold text-white text-lg tracking-wide">
          Portfolio
        </Link>
        {/* Injects the Client Component navigation */}
        <NavLinks /> 
      </div>
    </header>
  );
}
