import Link from 'next/link'
import Image from 'next/image'
import { StaticImageData } from 'next/image'
import { getPostsByTag } from '@/app/api/blog/getPostsByTag'
import type { Post } from '@/app/api/blog/types';


type BlogArticle = {
    title: string
    category: string
    imageSrc: StaticImageData | string
    description: string
    link: string
}



export default async function  BlogRecommendations () {


const responseRecommendation = await getPostsByTag('recommendation');
const postsRecommendation: Post[] = await responseRecommendation.json();
// console.log('postsRecommendation:', postsRecommendation);

const articles: BlogArticle[] = postsRecommendation.map((post) => ({
    title: post.title,
    category: post.tags[0]?.name || 'Error',
    imageSrc: post.feature_image || '/public/images/article1.jpg',
    description: 'Read More',
    link: `/blog/${post.slug}`
}))

return (
    <section id='blogRecommendation' className='container mx-auto my-10 px-4'>
    <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-3xl font-bold'>Blog Articles</h2>
        <Link
        href='/blog'
        className='group w-fit rounded-lg bg-primary p-4 text-center text-white transition-all duration-300 hover:scale-105 hover:bg-secondary hover:text-black hover:shadow-lg'
        >
        Read More Articles
        <span className='ml-2 text-secondary transition-all duration-300 hover:scale-105 group-hover:text-black'>
            ↗
        </span>
        </Link>
    </div>

    <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {articles.map((article, index) => (
        <div
            key={index}
            className='overflow-hidden rounded-lg bg-white shadow-md'
        >
            <Image
            src={article.imageSrc}
            alt={article.title}
            width={600}
            height={400}
            className='h-48 w-full object-cover'
            />
            <div className='p-4'>
            <h4 className='line-clamp-3 h-24'>{article.title}</h4>
            <div className="flex flex-col gap-4">
            <span className='mr-2 w-fit rounded-full bg-secondary px-4 py-1 uppercase text-black'>
                {article.category}
            </span>
                <Link
                href={`${article.link}`}
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

export const revalidate = 0;
