// app/components/BlogRecommendations.tsx
import Image from 'next/image';
import Article2 from '@/public/images/article2.jpg'
import Article3 from '@/public/images/article3.jpg'
import Article4 from '@/public/images/article4.jpg'


type BlogArticle = {
  title: string;
  category: string;
  imageSrc: StaticImageData;
  description: string;
  link: string;
};

const articles: BlogArticle[] = [
  {
    title: "Life in Finland",
    category: "LIFE",
    imageSrc: Article2,
    description: "Read More",
    link: "#", 
  },
  {
    title: "Jobs in Finland",
    category: "WORK",
    imageSrc: Article3, 
    description: "Read More",
    link: "#", 
  },
  {
    title: "Healthcare in Finland",
    category: "HEALTH",
    imageSrc: Article4, 
    description: "Read More",
    link: "#", 
  },
];

const BlogRecommendations = () => {
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Blog Articles</h2>
        <a
          href="#"
          className="group bg-primary text-white px-6 py-4 rounded-lg hover:bg-secondary hover:text-black transition-all duration-300"
        >
          View More Articles 
          <span className='ml-2 text-secondary text-xl group-hover:text-black transition-all duration-300'>↗</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <Image
              src={article.imageSrc}
              alt={article.title}
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="">{article.title}</h3>
              <p className="text-yellow-500 uppercase mb-2">
                {article.category}
              </p>
              <a
                href={article.link}
                className="group inline-block bg-primary text-white px-6 py-4 rounded-lg mt-4 hover:bg-secondary hover:text-black transition-all duration-300"
              >
                {article.description} 
                <span className='ml-2 text-secondary text-xl group-hover:text-black transition-all duration-300'>↗</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogRecommendations;
