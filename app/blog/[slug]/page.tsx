import { Metadata } from 'next';
import { getBlogPost } from '@/app/api/blog/getBlogPost';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import BlogRecommendations from '@/components/BlogRecommendations';

interface Post {
    id: string;
    title: string;
    custom_excerpt: string;
    feature_image: string;
    published_at: string;
    slug: string;
    primary_tag: {
        name: string;
    };
    html: string;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    try {
        const post = await fetchPost(params.slug);
        return {
            title: post.title,
            description: post.custom_excerpt,
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: 'Blog Post',
            description: 'Unable to load blog post',
        };
    }
}

async function fetchPost(slug: string): Promise<Post> {
    const response = await getBlogPost(slug);
    const data = await response.json();
    
    if (!data || data.error) {
        console.error('Error fetching post:', data?.error || 'No data returned');
        throw new Error(data?.error || 'Failed to fetch post');
    }
    
    return data;
}

export default async function PostPage({ params }: { params: { slug: string } }) {
    try {
        console.log('Fetching post with slug:', params.slug);
        const post = await fetchPost(params.slug);

        if (!post) {
            console.log('Post not found, invoking notFound()');
            notFound();
        }

        return (
            <>
            <section id='postPage' className='-mt-4'>
                <div className="container mx-auto py-12">
                    
                <div className='m-4 p-8 md:p-12 lg:p-16 xl:p-20 rounded-lg shadow-lg bg-white'>
                    <h2 className='mb-4'>{post.title}</h2>
                    {post.primary_tag && (
                        <p className='mb-4'>{post.primary_tag.name}</p>
                    )}

                    {post.feature_image && (
                        <div className="relative w-full h-96 mb-8">
                            <Image
                                src={post.feature_image}
                                alt={post.title}
                                fill
                                sizes="100vw"
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    )}

                    <article className='prose max-w-none'>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </article>
                </div>
                </div>
            </section>
            <BlogRecommendations />
            </>
        );
    } catch (error) {
        console.error('Error rendering post:', error);
        notFound();
    }
}