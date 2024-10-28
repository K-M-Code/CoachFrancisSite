import { NextResponse } from 'next/server';


export async function getAllBlogPosts() {
  try {
    const ghostUrl = process.env.GHOST_URL as string;
    const ghostKey = process.env.GHOST_KEY as string;

    // Fetch data from Ghost CMS
    const response = await fetch(`${ghostUrl}/ghost/api/content/posts/?key=${ghostKey}&limit=all&include=tags,authors`, {
      headers: {
        'Cache-Control': 'no-store', // Prevent caching
      },
    });


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
export async function getPostsByTag(tag: string) {
  try {
    const ghostUrl = process.env.GHOST_URL as string;
    const ghostKey = process.env.GHOST_KEY as string;

    const response = await fetch(`${ghostUrl}/ghost/api/content/posts/?key=${ghostKey}&limit=all&include=tags&filter=tags%3A${tag}`);

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
