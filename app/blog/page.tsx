import { getAllBlogPosts } from '@/app/api/blog/getAllBlogPosts';
import { NextRequest } from 'next/server';
import Image from 'next/image';


interface Post {
    id: string;
    title: string;
    custom_excerpt: string;
    feature_image: string;
    published_at: string;
    primary_tag: {
        name: string;
    };
}

export default async function BlogPage(req: NextRequest) {
    const response = await getAllBlogPosts(req);
    const posts = await response.json(); // Await the JSON response

    console.log('Retrieved posts:', posts);

    return (
<section id='blogPage' className='container mx-auto'>
    <h1 className='text-center text-4xl font-bold mb-10'>Blog Feed</h1>
    <div className='my-20 p-4 grid grid-cols-1 gap-12 md:grid-cols-1 '>
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
                            <h3 className='text-2xl font-bold text-gray-800 mb-2 line-clamp-2' style={{ minHeight: '3rem' }}>
                                {post.title}
                            </h3>
                            <p className='text-secondary text-lg font-bold mb-4 uppercase'>
                                {post.primary_tag.name}
                            </p>
                            <p className='text-gray-500 mb-6 line-clamp-2'>{post.custom_excerpt}</p>
                        </div>

                        {/* Read More Button */}
                        <div className="p-6 pt-0 mt-auto">
                            <a href='#' className='text-blue-600 font-semibold hover:underline flex items-center'>
                                Read More
                                <svg className="ml-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
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