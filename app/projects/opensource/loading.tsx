// app/projects/opensource/loading.tsx
export default function Loading() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-7 w-48 bg-slate-800 rounded mb-6"></div>
      
      {/* One single skeleton list item to match your 1 live open-source project */}
      <ul className="space-y-4">
        <li className="border-b border-slate-800 pb-3 space-y-3">
          <div className="h-5 w-2/3 bg-slate-800 rounded"></div>
          <div className="h-4 w-full bg-slate-800 rounded"></div>
          <div className="flex gap-2 mt-2">
            <div className="h-5 w-16 bg-slate-800 rounded-sm"></div>
            <div className="h-5 w-20 bg-slate-800 rounded-sm"></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
