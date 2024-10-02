    import Header from '@/components/Header'
    import Image from 'next/image'
    import Footer from '@/components/Footer'
    import ServicePic1 from '@/public/images/article1.jpg'
    import ServicePic2 from '@/public/images/article2.jpg'
    import ServicePic3 from '@/public/images/article3.jpg'
    import ServicePic4 from '@/public/images/article4.jpg'

    const Services = () => {
    return (
        <section className='services-page'>
        <Header />
        <div className='container mx-auto p-8'>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                <div className='grid grid-cols-2 gap-4'>
                    {/* Image 1 */}
                    <div className='h-auto max-w-full rounded-lg'>
                    <Image
                        src={ServicePic1}
                        alt='Service 1 Image'
                        width={600}
                        height={224}
                        objectFit='fill'
                        className='rounded-md'
                    />
                    </div>
                    {/* Image 2 */}
                    <div className='h-auto max-w-full rounded-lg'>
                    <Image
                        src={ServicePic2}
                        alt='Service 2 Image'
                        width={600}
                        height={224}
                        objectFit='cover'
                        className='rounded-md'
                    />
                    </div>
                    {/* Image 3 */}
                    <div className='h-auto max-w-full rounded-lg'>
                    <Image
                        src={ServicePic3}
                        alt='Service 3 Image'
                        width={600}
                        height={224}
                        objectFit='cover'
                        className='rounded-md'
                    />
                    </div>
                    {/* Image 4 */}
                    <div className='h-auto max-w-full rounded-lg'>
                    <Image
                        src={ServicePic4}
                        alt='Service 4 Image'
                        width={600}
                        height={224}
                        objectFit='cover'
                        className='rounded-md'
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
