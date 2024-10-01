import Image from 'next/image';
import ArticleHighlight from '@/public/images/article1.jpg'

const BlogHighlight = () => {
    return (
        <section className='BlogHighlight'>
        <div className="container mx-auto my-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 md:px-10">
                <div className=''>
                    <Image src={ArticleHighlight} alt="Highlight Image" objectFit='fill' className='' quality={100}/>
                </div>
                <div className="flex flex-col">
                    <div className="flex">
                        <div className="flex justify-center items-center">
                            <span className="border-t-4 border-secondary w-12 mr-4"></span>
                            <h4 className='uppercase text-secondary'>life</h4>
                        </div>
                    </div>
                    <h2 className='border-b-4 border-secondary w-fit'>Highlight Blog Title</h2> 
                    <p className='my-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolorem error, architecto, officia id quod incidunt facilis sed provident est dicta! Ab, quas assumenda saepe eos repudiandae porro unde animi.
                        Deleniti veritatis, veniam qui eaque suscipit repellendus in velit eveniet possimus? Id quidem aliquam commodi magnam tempora similique tenetur obcaecati ipsum eius repellat accusamus, explicabo omnis consequatur corrupti optio reprehenderit.
                    </p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default BlogHighlight;
