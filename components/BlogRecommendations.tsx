// app/components/BlogRecommendations.tsx
import Image from 'next/image'
import Article2 from '@/public/images/article2.jpg'
import Article3 from '@/public/images/article3.jpg'
import Article4 from '@/public/images/article4.jpg'
import { StaticImageData } from 'next/image'

type BlogArticle = {
    title: string
    category: string
    imageSrc: StaticImageData
    description: string
    link: string
}

const articles: BlogArticle[] = [
    {
    title: 'Life in Finland',
    category: 'LIFE',
    imageSrc: Article2,
    description: 'Read More',
    link: '#'
    },
    {
    title: 'Jobs in Finland',
    category: 'WORK',
    imageSrc: Article3,
    description: 'Read More',
    link: '#'
    },
    {
    title: 'Healthcare in Finland',
    category: 'HEALTH',
    imageSrc: Article4,
    description: 'Read More',
    link: '#'
    }
]

const BlogRecommendations = () => {
return (
    <div className='container mx-auto my-10 px-4'>
    <div className='mb-6 flex items-center justify-between'>
        <h2 className='text-3xl font-bold'>Blog Articles</h2>
        <a
        href='#'
        className='group rounded-lg bg-primary px-6 py-4 text-white transition-all duration-300 hover:bg-secondary hover:text-black'
        >
        View More Articles
        <span className='ml-2 text-xl text-secondary transition-all duration-300 group-hover:text-black hover:scale-105'>
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
            <h3 className=''>{article.title}</h3>
            <p className='mb-2 uppercase text-yellow-500'>
                {article.category}
            </p>
            <a
                href={article.link}
                className='group mt-4 inline-block rounded-lg bg-primary m-4 px-6 py-4 text-white transition-all duration-300 hover:bg-secondary hover:text-black hover:scale-105'
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
    </div>
)
}

export default BlogRecommendations
