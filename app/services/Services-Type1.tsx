    import Header from '@/components/Header'
    import Image from 'next/image'
    import Footer from '@/components/Footer'
    import ServicePic1 from '@/public/images/services/Services2.jpg'
    import ServicePic2 from '@/public/images/services/Services3.jpg'
    import ServicePic3 from '@/public/images/services/Services7.jpg'
    import ServicePic4 from '@/public/images/services/Services8.jpg'

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

            <div className='my-20 flex flex-col gap-12 lg:gap-20'>

            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='basis-1/3 justify-center'>
                <Image
                    src={ServicePic1}
                    alt='Service 1 Image'
                    className='rounded-2xl w-full'
                />
                </div>

                <div className='basis-2/3'>
                <h3 className='text-primary mb-4'>Coaching</h3>
                <p>
                    Coaching is about unlocking potential and guiding individuals or
                    teams toward achieving their personal or professional goals.
                    With my diverse expertise in IT, industrial management, business
                    administration, and education, I offer coaching that is both
                    strategic and practical. My coaching services are tailored to
                    help clients:
                    <div className='flex gap-8 py-4'>
                    <ul className='list-inside list-disc'>
                        <li>Enhance leadership skills</li>
                        <li>Improve productivity and performance</li>
                    </ul>
                    <ul className='list-inside list-disc'>
                        <li>Overcome specific challenges or roadblocks</li>
                        <li>Set clear, actionable goals and strategies</li>
                    </ul>
                    </div>
                    Whether you’re an individual striving for career growth or a business aiming for operational excellence, my coaching approach is designed to create lasting results by fostering a mindset of continuous development and improvement.
                </p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row-reverse gap-10'>
                <div className='basis-1/3 justify-center'>
                <Image
                    src={ServicePic2}
                    alt='Service 1 Image'
                    className='rounded-2xl w-full'
                />
                </div>

                <div className='basis-2/3'>
                <h3 className='text-primary mb-4'>Mentoring</h3>
                <p>
                    Mentoring is a personal and professional growth journey, where I
                    guide you based on my experience and expertise. Unlike coaching,
                    mentoring focuses on long-term development by sharing knowledge,
                    offering advice, and helping you navigate complex challenges. I
                    provide mentoring to:
                    <div className='flex gap-8 py-4'>
                    <ul className='list-inside list-disc'>
                        <li>Young professionals entering the workforce</li>
                        <li>Leaders looking to enhance their capabilities</li>
                    </ul>
                    <ul className='list-inside list-disc'>
                        <li>Entrepreneurs seeking guidance on business growth</li>
                    </ul>
                    </div>
                    Through my mentoring sessions, I offer insights into overcoming obstacles, developing critical skills, and positioning yourself for long-term success. My aim is to support your journey, helping you reach your full potential with clarity and confidence.
                </p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='basis-1/3 justify-center'>
                <Image
                    src={ServicePic3}
                    alt='Service 1 Image'
                    className='rounded-2xl w-full'
                />
                </div>

                <div className='basis-2/3'>
                <h3 className='text-primary mb-4'>Consultation</h3>
                <p>
                    Consultation is ideal for businesses and organizations seeking expert guidance on improving processes, strategies, or systems. With my multidisciplinary background, I provide actionable solutions in areas such as:
                    <div className='flex gap-8 py-4'>
                    <ul className='list-inside list-disc'>





                        <li>IT optimization and digital transformation</li>
                        <li>Organizational management and process improvement</li>
                    </ul>
                    <ul className='list-inside list-disc'>
                        <li>Business strategy and operational efficiency</li>
                        <li>Educational and training program development</li>
                    </ul>
                    </div>
                    My consulting services focus on delivering tailored, data-driven strategies to meet your organization&apos;s specific needs. Whether you&apos;re a small business or a large corporation, I work with you to assess current practices, identify areas for improvement, and implement changes that drive results.                
                </p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row-reverse gap-10'>
                <div className='basis-1/3 justify-center'>
                <Image
                    src={ServicePic4}
                    alt='Service 1 Image'
                    className='rounded-2xl w-full'
                />
                </div>

                <div className='basis-2/3'>
                <h3 className='text-primary mb-4'>Public Speaking</h3>
                <p>
                    As a public speaker, I deliver engaging and insightful presentations on topics related to leadership, business management, education, technology, and personal growth. My speeches are designed to inspire, educate, and motivate audiences, offering practical insights backed by years of industry experience. Whether you’re looking for a keynote speaker for a corporate event, a workshop facilitator, or a motivational speaker for a conference, I can provide:
                    <div className='flex gap-8 py-4'>
                    <ul className='list-inside list-disc'>                    
                        <li>Inspirational talks on leadership and innovation</li>
                        <li>Practical workshops on business strategy and management</li>
                    </ul>
                    <ul className='list-inside list-disc'>
                        <li>Seminars on the importance of lifelong learning and growth</li>
                        <li>How to move from surviving to flourishing in Finland/Europe</li>
                    </ul>
                    </div>
                    My public speaking sessions are tailored to meet the needs of the audience, ensuring every message is relevant, actionable, and impactful.
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
