    import Image from 'next/image'
    import ServicePic1 from '@/public/images/services/Services2.jpg'
    import ServicePic2 from '@/public/images/services/Services3.jpg'
    import ServicePic3 from '@/public/images/services/Services7.jpg'
    import ServicePic4 from '@/public/images/services/Services8.jpg'
    // import ContactForm from '@/components/ContactForm'

    const servicesContent = [
    {
        image: ServicePic1,
        alt: 'Coaching Image',
        title: 'Coaching',
        description:
        'Coaching is about unlocking potential and guiding individuals or teams toward achieving their personal or professional goals. With my diverse expertise in IT, industrial management, business administration, and education, I offer coaching that is both strategic and practical. My coaching services are tailored to help clients:',
        listItems: [
        'Enhance leadership skills',
        'Improve productivity and performance',
        'Overcome specific challenges or roadblocks',
        'Set clear, actionable goals and strategies'
        ],
        closingStatement:
        'Whether you’re an individual striving for career growth or a business aiming for operational excellence, my coaching approach is designed to create lasting results by fostering a mindset of continuous development and improvement.'
    },
    {
        image: ServicePic2,
        alt: 'Mentoring Image',
        title: 'Mentoring',
        description:
        'Mentoring is a personal and professional growth journey, where I guide you based on my experience and expertise. Unlike coaching, mentoring focuses on long-term development by sharing knowledge, offering advice, and helping you navigate complex challenges. I provide mentoring to:',
        listItems: [
        'Young professionals entering the workforce',
        'Leaders looking to enhance their capabilities',
        'Entrepreneurs seeking guidance on business growth'
        ],
        closingStatement:
        'Through my mentoring sessions, I offer insights into overcoming obstacles, developing critical skills, and positioning yourself for long-term success. My aim is to support your journey, helping you reach your full potential with clarity and confidence.'
    },
    {
        image: ServicePic3,
        alt: 'Consultation Image',
        title: 'Consultation',
        description:
        'Consultation is ideal for businesses and organizations seeking expert guidance on improving processes, strategies, or systems. With my multidisciplinary background, I provide actionable solutions in areas such as:',
        listItems: [
        'IT optimization and digital transformation',
        'Organizational management and process improvement',
        'Business strategy and operational efficiency',
        'Educational and training program development'
        ],
        closingStatement:
        "My consulting services focus on delivering tailored, data-driven strategies to meet your organization's specific needs. Whether you're a small business or a large corporation, I work with you to assess current practices, identify areas for improvement, and implement changes that drive results."
    },
    {
        image: ServicePic4,
        alt: 'Public Speaking Image',
        title: 'Public Speaking',
        description:
        'As a public speaker, I deliver engaging and insightful presentations on topics related to leadership, business management, education, technology, and personal growth. My speeches are designed to inspire, educate, and motivate audiences, offering practical insights backed by years of industry experience. Whether you’re looking for a keynote speaker for a corporate event, a workshop facilitator, or a motivational speaker for a conference, I can provide:',
        listItems: [
        'Inspirational talks on leadership and innovation',
        'Practical workshops on business strategy and management',
        'Seminars on the importance of lifelong learning and growth',
        'How to move from surviving to flourishing in Finland/Europe'
        ],
        closingStatement:
        'My public speaking sessions are tailored to meet the needs of the audience, ensuring every message is relevant, actionable, and impactful.'
    }
    ]

    const Services = () => {
    return (
        <div className='my-20 flex flex-col gap-12 lg:gap-20'>
        {servicesContent.map((service, index) => (
            <div
            key={index}
            className={`flex flex-col border-b-8 border-primary py-10 lg:${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-10`}
            >
            <div className='basis-1/3 justify-center self-center'>
                <Image
                src={service.image}
                alt={service.alt}
                className='w-full rounded-2xl'
                />
            </div>
            <div className='basis-2/3'>
                <h3 className='mb-4 text-primary'>{service.title}</h3>
                <p>{service.description}</p>
                <div className='flex gap-8 py-4'>
                {' '}
                <ul className='list-inside list-disc'>
                    {service.listItems
                    .slice(0, Math.ceil(service.listItems.length / 2))
                    .map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <ul className='list-inside list-disc'>
                    {service.listItems
                    .slice(Math.ceil(service.listItems.length / 2))
                    .map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                </div>
                <p>
                {' '}
                {service.closingStatement}
                </p>
                
            
                {/* <div className="container mx-auto my-8 flex justify-center">
                    <ContactForm showTrigger={true}/>
                </div> */}
            </div>
            </div>
        ))}

        </div>
    )
    }

    export default Services

