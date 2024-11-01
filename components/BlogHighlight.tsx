import Image from 'next/image'
import { getPostsByTag } from '@/app/api/blog/getAllBlogPosts'
import type { Post } from '@/app/api/blog/types'
import Link from 'next/link'
export default async function BlogHighlight() {
const responseHighlight = await getPostsByTag('highlight')
const postsHighlight: Post[] = await responseHighlight.json()

return (
    <section id='blogHighlight'>
    <div className='container mx-auto my-24 px-4'>
        {postsHighlight.map((post: Post, index: number) => (
        <div
            key={index}
            className='my-10 grid grid-cols-1 items-center gap-10 px-4 md:px-10 lg:grid-cols-2'
        >
            <div className=''>
            {post.feature_image ? (
                <Image
                src={post.feature_image}
                alt={post.title}
                className=''
                quality={100}
                width={1000}
                height={1000}
                />
            ) : (
                <Image
                src='@/public/images/article1.jpg'
                alt='Placeholder'
                className=''
                quality={100}
                width={500}
                height={500}
                />
            )}
            </div>
            <div className='flex flex-col gap-4'>
            <div className='flex'>
                <div className='flex items-center justify-center'>
                <span className='mr-4 w-12 border-t-4 border-secondary'></span>
                <h4 className='uppercase text-secondary'>
                    {'Highlight'}
                </h4>
                </div>
            </div>
            <h2 className='w-fit border-b-4 border-secondary pb-4 leading-normal'>
                {post.title}
            </h2>
            <div
                className='prose line-clamp-6'
                dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <div className=''>
                <Link
                href={`/blog/${post.slug}`}
                className='group/read-more inline-flex w-fit items-center rounded-full bg-primary px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-secondary hover:text-black hover:shadow-lg'
                >
                Read More
                <span className='ml-2 text-xl text-secondary transition-all duration-300 group-hover/read-more:text-black'>
                    ↗
                </span>
                </Link>
            </div>
            </div>
        </div>
        ))}
    </div>
    </section>
)
}

export const revalidate = 0