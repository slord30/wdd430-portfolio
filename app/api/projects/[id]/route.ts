// app/api/projects/[id]/route.ts
import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> } // 👈 1. Change this to a Promise type definition
) {
  const resolvedParams = await params; // 👈 2. Await the promise to extract values cleanly
  const id = Number(resolvedParams.id);

  if (Number.isNaN(id)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }
  
  const project = await getProjectById(id);
  if (!project) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json(project);
}
