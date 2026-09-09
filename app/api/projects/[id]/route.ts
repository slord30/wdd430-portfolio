import { NextRequest, NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

interface RouteContext {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  // Convert the URL string id into a base-10 integer number
  const parsedId = parseInt(id, 10);
  
  // Return 400 if it's not a real number (e.g. /api/projects/abc)
  if (isNaN(parsedId)) {
    return NextResponse.json({ error: 'Bad Request: ID must be a valid integer number.' }, { status: 400 });
  }

  // Use the professor's helper function to query by numeric ID
  const match = getProjectById(parsedId);
  
  // Return 404 if no project with that numeric ID exists
  if (!match) {
    return NextResponse.json({ error: `Project with id ${parsedId} not found.` }, { status: 404 });
  }

  return NextResponse.json(match);
}
