    import Header from '@/components/Header'
    import Image from 'next/image'
    import Footer from '@/components/Footer'
    import ServicePic1 from '@/public/images/services/Services2.jpg'
    import ServicePic2 from '@/public/images/services/Services3.jpg'
    import ServicePic3 from '@/public/images/services/Services7.jpg'
    import ServicePic4 from '@/public/images/services/Services8.jpg'
    import ServicesList from '@/components/ServicesList'
    import ContactForm from '@/components/ContactForm'

    const Services = () => {
    return (
        <section className='services-page'>
        <Header />
        <div className='container mx-auto p-8'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            <div className='grid h-fit min-h-[450px] grid-cols-2 gap-4 sm:min-h-[750px]'>
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
                <div>
                <h2 className=''>Services</h2>
                <p className=''>
                    Welcome to a platform dedicated to empowering individuals and
                    organizations through tailored coaching, mentoring,
                    consultation, and public speaking services. With extensive
                    experience in IT, industrial management, business
                    administration, and education, I provide strategic, actionable
                    guidance to help you unlock your full potential. Whether
                    you&apos;re looking to enhance leadership skills, optimize
                    business processes, or seek inspiration through engaging talks,
                    my services are designed to foster lasting growth and success.
                    Let&apos;s work together to overcome challenges, set clear
                    goals, and achieve remarkable results.
                </p>
                </div>
            </div>
            </div>

            
            <div className="container mx-auto mt-20 flex justify-center">
                <ContactForm showTrigger={true}/>
            </div>

            <div className='mb-20 flex flex-col gap-12 lg:gap-20'>

            <ServicesList />

            </div>
            
                
            
            <div className="container mx-auto my-8 flex justify-center">
                <ContactForm showTrigger={true}/>
            </div>
        </div>
        <Footer />
        </section>
    )
    }

    export default Services
