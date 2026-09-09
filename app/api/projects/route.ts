import { NextRequest, NextResponse } from 'next/server';
import { getProjects } from '@/lib/projects-db';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const typeFilter = searchParams.get('type');

  // Validate the query filter if it exists
  if (typeFilter && typeFilter !== 'opensource' && typeFilter !== 'school') {
    return NextResponse.json({ error: 'Invalid type parameter' }, { status: 400 });
  }

  // Use the professor's built-in filtering function
  const data = getProjects(typeFilter);
  return NextResponse.json(data);
}
