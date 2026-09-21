'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  if (totalPages <= 1) return null; // Hides the component if everything fits onto one page

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      {/* Previous Page Link */}
      <Link
        href={createPageURL(currentPage - 1)}
        className={`px-3 py-1 bg-slate-900 border border-slate-800 rounded text-sm transition-colors text-white ${
          currentPage <= 1 ? 'pointer-events-none opacity-40' : 'hover:bg-slate-800'
        }`}
      >
        PREVIOUS
      </Link>

      {/* Page Tracker Indicator */}
      <span className="text-zinc-400 text-sm">
        PAGE {currentPage} OF {totalPages}
      </span>

      {/* Next Page Link */}
      <Link
        href={createPageURL(currentPage + 1)}
        className={`px-3 py-1 bg-slate-900 border border-slate-800 rounded text-sm transition-colors text-white ${
          currentPage >= totalPages ? 'pointer-events-none opacity-40' : 'hover:bg-slate-800'
        }`}
      >
        NEXT
      </Link>
    </div>
  );
}
