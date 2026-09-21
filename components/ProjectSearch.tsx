'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function ProjectSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1'); // Standard Instruction: Starting a new search always resets to page 1
    
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative mb-6">
      <input
        type="text"
        className="w-full px-4 py-2 border border-slate-800 bg-slate-950 text-white rounded-md placeholder-zinc-500 focus:outline-none focus:border-indigo-500 transition-colors"
        placeholder="SEARCH PROJECTS..."
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('query')?.toString() || ''}
      />
    </div>
  );
}
