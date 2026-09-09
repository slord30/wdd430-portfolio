'use client'; // Required to use the usePathname hook

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLinks() {
  const pathname = usePathname(); // Retrieves the current active URL path

  // Define links array for easy maintenance
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex gap-6 text-sm font-medium">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            // Accessibility: screen readers know exactly which page is currently viewable
            aria-current={isActive ? 'page' : undefined}
            className={`transition-colors duration-200 ${
              isActive 
                ? 'text-indigo-400 font-semibold' // Active link style
                : 'text-zinc-400 hover:text-white' // Inactive link style
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
