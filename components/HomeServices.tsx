// components/HomeServices.tsx
import Image from 'next/image'
import MentorImage from '@/public/images/icons/mentor.svg'
import CoachImage from '@/public/images/icons/coach.svg'
import ConsultImage from '@/public/images/icons/consulting.svg'
import SpeechImage from '@/public/images/icons/speech.svg'

const HomeServices = () => {
    const servicesData = [
    { image: CoachImage, title: 'Coaching' },
    { image: MentorImage, title: 'Mentoring' },
    { image: ConsultImage, title: 'Consultation' },
    { image: SpeechImage, title: 'Public Speaking' }
    ]
    return (
    <div>
        <section className='services py-24'>
        <div className='container mx-auto grid grid-cols-1 gap-12 px-8 lg:px-20 2xl:px-0 lg:grid-cols-2'>
            <div>
            <div className="absolute -left-8 sm:-left-52 bg-primary p-10 w-4/5 h-3/5 sm:h-1/5 lg:w-2/4 lg:h-3/5 xl:h-2/5 -z-50 rounded-3xl opacity-10"></div>
            <h2 className='mb-4'>How can I help you?</h2>
            <p className=''>
            To empower individuals, companies, and associations by providing personalized coaching services that foster growth, enhance skills, and drive impactful change. Through a combination of expertise in IT, industrial management, business administration, and education, my goal is to unlock potential, streamline processes, and cultivate a mindset of continuous improvement.
            </p>
            <br/>
            <p className=''>
            My mission is to help clients reach their personal and professional aspirations by offering tailored coaching solutions that address unique challenges and goals. I am dedicated to bridging the gap between theoretical knowledge and practical application, ensuring that clients not only understand concepts but also implement strategies that yield tangible results.
            </p>

            </div>
            <div className='grid grid-cols-1 gap-12 sm:grid-cols-2'>
            {servicesData.map((service, index) => (
                <div
                key={index}
                className={`flex flex-col items-center justify-center shadow-xl hover:shadow-2xl transform hover:scale-105 duration-300 rounded-xl p-4 z-{index} ${index % 2 == 1 ? 'sm:translate-y-10' : ''}`}
                >
                <Image src={service.image} alt='' className='mb-6 h-28 w-28' />
                <h4 className='text-center'>{service.title}</h4>
                </div>
            ))}
            </div>
            
        </div>
        </section>
    </div>
    )
}
export default HomeServices
