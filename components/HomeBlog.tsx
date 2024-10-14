import BlogHighlight from '@/components/BlogHighlight';
import BlogRecommendations from '@/components/BlogRecommendations';

const HomeBlog = () => {
    return (
        <section id='blog' className=''>
            <BlogHighlight/>
            <BlogRecommendations/>
        </section>
    )
}

export default HomeBlog;