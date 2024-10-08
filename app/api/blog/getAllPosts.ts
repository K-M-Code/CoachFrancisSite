import GhostContentAPI from '@tryghost/content-api';
import { NextResponse } from 'next/server';

export async function GET() {
  const api = new GhostContentAPI({
    url: process.env.NEXT_PUBLIC_GHOST_URL || '',
    key: process.env.GHOST_CONTENT_API_KEY || '',
    version: 'v5.0',
  });

  try {
    const posts = await api.posts.browse({
      limit: 'all',
      include: ['tags', 'authors'],
    });
    return NextResponse.json(posts);
  } catch (error: unknown) {
    return NextResponse.json({ error: String(error) });
  }
}

