    import { Metadata } from 'next'
    import { getBlogPost } from '@/app/api/blog/getBlogPost'
    import Image from 'next/image'
    import { notFound } from 'next/navigation'
    import BlogRecommendations from '@/components/BlogRecommendations'
    import { Post } from '@/app/api/blog/types'
    import excludedTags from '@/components/excludedTags'


    async function fetchPostData(slug: string): Promise<{ metadata: Metadata; post?: Post }> {
        try {
            const response = await getBlogPost(slug);
            const data = await response.json();
    
            if (!data || data.error) {
                console.error('Error fetching post:', data?.error || 'No data returned');
                throw new Error(data?.error || 'Failed to fetch post');
            }
    
            return {
                metadata: {
                    title: "Coach Oye - " +data.title,
                    description: data.custom_excerpt
                },
                post: data
            };
        } catch (error) {
            console.error('Error fetching post data:', error);
            return {
                metadata: {
                    title: 'Blog Post',
                    description: 'Unable to load blog post'
                }
            };
        }
    }
    
    export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
        const { metadata } = await fetchPostData(params.slug);
        return metadata;
    }
    
    export default async function PostPage({ params }: { params: { slug: string } }) {
        try {
            const { post } = await fetchPostData(params.slug);
    
            if (!post) {
                console.log('Post not found, invoking notFound()');
                notFound();
            }
    
            return (
                <>
                    <section id="postPage" className="-mt-4">
                        <div className="container mx-auto py-12">
                            <div className="m-4 rounded-lg bg-white p-8 shadow-lg md:p-12 lg:p-16 xl:p-20">
                                <h2 className="mb-4 leading-normal">{post.title}</h2>
                                <div className="mb-4 flex flex-wrap items-center gap-4">
                                    {post.tags
                                        .filter(tag => excludedTags.indexOf(tag.name) === -1)
                                        .map(tag => (
                                            <span
                                                key={tag.id}
                                                className="rounded-full bg-secondary px-4 py-1 text-black"
                                            >
                                                {tag.name}
                                            </span>
                                        ))}
                                </div>
    
                                {post.feature_image && (
                                    <div className="relative mb-8 h-96 w-full">
                                        <Image
                                            src={post.feature_image}
                                            alt={post.title}
                                            fill
                                            sizes="100vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                )}
    
                                <article className="prose max-w-none">
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
    
    export const revalidate = 0;
    