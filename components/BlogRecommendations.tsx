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
    category: post.tags[0]?.name || 'Unknown',
    imageSrc: post.feature_image || '/public/images/article1.jpg',
    description: 'Read More',
    link: `/blog/${post.slug}`
}))

return (
    <section id='blogRecommendation' className='container mx-auto my-10 px-4'>
    <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-3xl font-bold'>Blog Articles</h2>
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
            <h4 className='h-16'>{article.title}</h4>
            <p className='my-2 uppercase text-secondary'>
                {article.category}
            </p>
            <a
                href={article.link}
                className='group my-4 inline-block rounded-lg bg-primary px-6 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-secondary hover:text-black'
            >
                {article.description}
                <span className='ml-2 text-xl text-secondary transition-all duration-300 group-hover:text-black'>
                ↗
                </span>
            </a>
            </div>
        </div>
        ))}
    </div>
    </section>
)
}
