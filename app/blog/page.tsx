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
            <div className='my-20 p-4 grid grid-cols-1 gap-12 md:grid-cols-2 '>
                {posts.error ? (
                    <p>{posts.error}</p>
                ) : posts.length > 0 ? (
                    posts.map((post: Post) => (
                        <div className="w-full" key={post.id}>
                            <div className='flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden'>
                                {/* Post Image */}
                                <div className="relative w-full h-72">
                                    <Image
                                        src={post.feature_image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                {/* Post Content */}
                                <div className='p-6 flex-grow'>
                                    <h3 className='text-2xl font-bold text-gray-800 mb-2 line-clamp-2'>
                                        {post.title}
                                    </h3>
                                    {post.primary_tag && (
                                        <p className='text-secondary text-lg font-bold mb-4 uppercase'>
                                            {post.primary_tag.name}
                                        </p>
                                    )}
                                    <p className='text-gray-500 mb-6 line-clamp-2'>{post.custom_excerpt}</p>
                                </div>

                                {/* Read More Button */}
                                <div className="p-6 pt-0 mt-auto">
                                    <Link href={`/blog/${post.slug}`} className='text-blue-600 font-semibold hover:underline flex items-center'>
                                        Read More
                                        <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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