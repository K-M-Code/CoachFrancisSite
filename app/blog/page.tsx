import { getAllBlogPosts } from '@/app/api/blog/getAllBlogPosts'
import Image from 'next/image'
import Link from 'next/link'
import excludedTags from '@/components/excludedTags'

interface Post {
  id: string
  title: string
  custom_excerpt: string
  feature_image: string
  published_at: string
  slug: string
  tags: { name: string }[]
  primary_tag?: {
    name: string
  }
}

const DummyImage = () => (
  <div className='relative h-72 w-full animate-pulse bg-gray-300' />
)

const DummyText = () => (
  <div className='mb-6 line-clamp-4 h-12 animate-pulse bg-gray-300 lg:line-clamp-2' />
)

export default async function BlogPage() {
  const response = await getAllBlogPosts()
  const posts = await response.json()

  return (
    <section id='blogPage' className='container mx-auto'>
      <div className='my-20 grid grid-cols-1 gap-12 p-4 md:grid-cols-2'>
        {posts.error ? (
          <p>{posts.error}</p>
        ) : posts.length > 0 ? (
          posts.map((post: Post) => (
            <div className='w-full' key={post.id}>
              <div className='flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg'>
                <div className='relative h-72 w-full'>
                  {post.feature_image ? (
                    <Image
                      src={post.feature_image}
                      alt={post.title}
                      fill
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      style={{ objectFit: 'cover' }}
                    />
                  ) : (
                    <DummyImage />
                  )}
                </div>
                <div className='grow p-4 lg:p-8'>
                  <h3 className='mb-2 line-clamp-2 h-36 text-2xl font-bold text-gray-800 lg:h-24'>
                    {post.title || <DummyText />}
                  </h3>
                  <div className='mb-4 flex flex-wrap gap-2'>
                    {post.tags.filter(tag => !excludedTags.includes(tag.name))
                      .length > 0 ? (
                      post.tags
                        .filter(tag => !excludedTags.includes(tag.name))
                        .map(tag => (
                          <span
                            key={tag.name}
                            className='mr-2 rounded-full bg-secondary px-4 py-1 uppercase text-black'
                          >
                            {tag.name}
                          </span>
                        ))
                    ) : (
                      <DummyText />
                    )}
                  </div>
                  <p className='mb-6 line-clamp-4 lg:line-clamp-2'>
                    {post.custom_excerpt || <DummyText />}
                  </p>
                </div>
                <div className='mt-auto p-6 pt-0'>
                  <Link
                    href={`/blog/${post.slug}`}
                    className='group inline-flex items-center rounded-full bg-primary px-4 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-secondary hover:text-black hover:shadow-lg'
                  >
                    Read More
                    <span className='ml-2 text-xl text-secondary transition-all duration-300 group-hover:text-black'>
                      ↗
                    </span>
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
  )
}

export const revalidate = 0
