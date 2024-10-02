import Header from '@/components/Header'
import Image from 'next/image'
import Footer from '@/components/Footer'
import ServicePic1 from '@/public/images/about.jpeg'
import ServicePic2 from '@/public/images/article2.jpg'
import ServicePic3 from '@/public/images/article3.jpg'
import ServicePic4 from '@/public/images/article4.jpg'

const Services = () => {
    return (
        <section className='services-page'>
        <Header />
        <div className='container mx-auto p-8'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>

            <div className='grid grid-cols-2 gap-4 h-[450px] sm:h-[600px] lg:h-[750px]'>

                <div className='col-span-1 row-span-2 h-full'>
                    
                <Image
                    src={ServicePic1}
                    alt='Service 1 Image'
                    objectFit='cover'
                    className='h-full rounded-lg'
                />
                
                </div>

                <div className='col-span-1 h-full'>

                <Image
                    src={ServicePic2}
                    alt='Service 2 Image'
                    objectFit='cover'
                    className='h-full rounded-lg'
                />

                </div>

                <div className='col-span-1 row-span-2 h-full'>

                <Image
                    src={ServicePic3}
                    alt='Service 3 Image'
                    objectFit='cover'
                    className='h-full rounded-lg'
                />

                </div>

                <div className='col-span-1 h-full'>

                <Image
                    src={ServicePic4}
                    alt='Service 4 Image'
                    objectFit='cover'
                    className='h-full rounded-lg'
                />

                </div>

            </div>

            <div className='space-y-8'>
                {/* Service 1 */}
                <div>
                <h2 className=''>Service 1</h2>
                <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    nibh sem, laoreet id vehicula sit amet, molestie at lacus.
                    Curabitur non enim tincidunt, pellentesque sapien eget,
                    pellentesque neque.
                </p>
                </div>
                {/* Service 2 */}
                <div>
                <h2 className=''>Service 2</h2>
                <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    nibh sem, laoreet id vehicula sit amet, molestie at lacus.
                    Curabitur non enim tincidunt, pellentesque sapien eget,
                    pellentesque neque.
                </p>
                </div>
                {/* Service 3 */}
                <div>
                <h2 className=''>Service 3</h2>
                <p className=''>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                    nibh sem, laoreet id vehicula sit amet, molestie at lacus.
                    Curabitur non enim tincidunt, pellentesque sapien eget,
                    pellentesque neque.
                </p>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </section>
    )
}

export default Services
