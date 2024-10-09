import { NextResponse } from 'next/server';

export async function getRecommendedPosts() {
  try {
    const ghostUrl = process.env.GHOST_URL as string;
    const ghostKey = process.env.GHOST_KEY as string;

    // Fetch data from Ghost CMS
    const response = await fetch(`${ghostUrl}/ghost/api/content/posts/?key=${ghostKey}&limit=all&include=tags,authors&filter=tag:Recommendation`);

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    const data = await response.json();
    const posts = data.posts;

    return NextResponse.json(posts);
  } catch (error: unknown) {
    console.error('Error fetching posts:', error);
    return NextResponse.json({ error: String(error) });
  }
}

