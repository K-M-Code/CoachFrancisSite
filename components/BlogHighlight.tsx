import Image from 'next/image';
import { getPostsByTag } from '@/app/api/blog/getAllBlogPosts';
import type { Post } from '@/app/api/blog/types';


export default async function BlogHighlight() {

    const responseHighlight = await getPostsByTag('highlight');
    const postsHighlight: Post[] = await responseHighlight.json();

    return (
        <section id='blogHighlight'>
            <div className="container mx-auto my-20">
                {postsHighlight.map((post: Post, index: number) => (
                    <div key={index} className="grid grid-cols-1 items-center gap-10 px-4 md:px-10 lg:grid-cols-2">
                        <div className=''>
                            {post.feature_image ? (
                                <Image src={post.feature_image} alt={post.title} className='' quality={100} width={1000} height={1000} />
                            ) : (
                                <Image src="@/public/images/article1.jpg" alt="Placeholder" className='' quality={100} width={500} height={500} />
                            )}
                        </div>
                        <div className="flex flex-col gap-8">
                            <div className="flex">
                                <div className="flex items-center justify-center">
                                    <span className="mr-4 w-12 border-t-4 border-secondary"></span>
                                    <h4 className='uppercase text-secondary'>{post.primary_tag ? post.primary_tag.name : 'Untitled'}</h4>
                                </div>
                            </div>
                            <h2 className='w-fit border-b-4 border-secondary'>{post.title}</h2>
                            <p className='my-4'>
                                {post.excerpt}
                            </p>
                            <div>
                        <a
        href='/blog'
        className='group rounded-lg bg-primary px-6 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-secondary hover:text-black'
        >
        View More Articles
        <span className='ml-2 text-secondary transition-all duration-300 hover:scale-105 group-hover:text-black'>
            ↗
        </span>
        </a>
                        </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </section>
    )
}
