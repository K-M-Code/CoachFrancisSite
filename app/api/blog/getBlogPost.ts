import { NextRequest, NextResponse } from 'next/server';

const ghostUrl = process.env.GHOST_URL as string;
const ghostKey = process.env.GHOST_KEY as string;

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
    const slug = params.slug;

    if (!slug) {
        return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    try {
        if (!ghostUrl || !ghostKey) {
            throw new Error('Ghost URL or API key is missing');
        }

        const fetchUrl = `${ghostUrl}/ghost/api/content/posts/slug/${slug}/?key=${ghostKey}`;

        const response = await fetch(fetchUrl);

        if (!response.ok) {
            const errorBody = await response.text();
            console.error('Error Response Body:', errorBody);
            throw new Error(`Failed to fetch post: ${response.statusText}`);
        }

        const data = await response.json();

        if (!data.posts || data.posts.length === 0) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        const post = data.posts[0];
        return NextResponse.json(post);
    } catch (error) {
        console.error('Error in getBlogPost:', error);
        return NextResponse.json({ error: error instanceof Error ? error.message : String(error) }, { status: 500 });
    }
}
export async function getBlogPost(slug: string) {
    return GET(undefined as unknown as NextRequest, { params: { slug } });
}
