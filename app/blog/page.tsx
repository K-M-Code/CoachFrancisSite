import { getAllBlogPosts } from '@/app/api/blog/getAllBlogPosts';
import Image from 'next/image';
import Link from 'next/link';


interface Post {
    id: string;
    title: string;
    custom_excerpt: string;
    feature_image: string;
    published_at: string;
    slug: string;
    primary_tag?: {
        name: string;
    };
}


export default async function BlogPage() {
    const response = await getAllBlogPosts();
    const posts = await response.json();



    return (
        <section id='blogPage' className='container mx-auto'>
            <div className='my-20 grid grid-cols-1 gap-12 p-4 md:grid-cols-2 '>
                {posts.error ? (
                    <p>{posts.error}</p>
                ) : posts.length > 0 ? (
                    posts.map((post: Post) => (
                        <div className="w-full" key={post.id}>
                            <div className='flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg'>
                                {/* Post Image */}
                                <div className="relative h-72 w-full">
                                    <Image
                                        src={post.feature_image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                {/* Post Content */}
                                <div className='grow p-6'>
                                    <h3 className='mb-2 line-clamp-2 text-2xl font-bold text-gray-800'>
                                        {post.title}
                                    </h3>
                                    {post.primary_tag && (
                                        <p className='mb-4 text-lg font-bold uppercase text-secondary'>
                                            {post.primary_tag.name}
                                        </p>
                                    )}
                                    <p className='mb-6 line-clamp-2 text-gray-500'>{post.custom_excerpt}</p>
                                </div>

                                {/* Read More Button */}
                                <div className="mt-auto p-6 pt-0">
                                    <Link href={`/blog/${post.slug}`} className='inline-flex items-center rounded-full bg-primary px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-secondary hover:text-black'>
                                        Read More
                                        <svg className="ml-2 size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No posts available.</p>
                )}
            </div>
        </section>
    );
}