import Image from "next/image";
import AboutPic from '@/public/images/about2.jpg';
import ContactForm from "@/components/ContactForm";
import Abo from '@/public/images/education/aboakademi.jpeg'
import TAMK from '@/public/images/education/tamk.jpeg'
import UniVaasa from '@/public/images/education/univaasa.jpeg'
import Hanken from '@/public/images/education/hanken.jpeg'
import VAMK from '@/public/images/education/vamk.jpeg'

const educationContent = [
    {
        image: Abo.src,
        alt: 'Abokademi Logo',
        title: 'Åbo Akademi, Vaasa',
        description: 'M.A. in Education'
    },
    {
        image: VAMK.src,
        alt: 'VAMK Logo',
        title: 'VAMK, Vaasa',
        description: 'Bachelor of Engineering in IT '
    },
    {
        image: TAMK.src,
        alt: 'TAMK Logo',
        title: 'TAMK, Tampere',
        description: 'Professional Teacher Education (AmO)'
    },
    {
        image: Hanken.src,
        alt: 'Hanken School of Business Logo',
        title: 'Hanken School of Business, Vaasa',
        description: 'Middle Management in Business Administration'
    },
    {
        image: UniVaasa.src,
        alt: 'Vaasa University Logo',
        title: 'Vaasa University, Vaasa',
        description: 'MSc. in Economics & Business Admin. (Industrial Management)'
    }
]


const About = () => {
    return (
        <section id="aboutMe" className="">
            <div className="container mx-auto my-20 px-4">
                <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
                    <div id="about-image" className="lg:basis-1/2 ">
                        <Image src={AboutPic} alt="About Image" width={600} height={400} className="rounded-2xl"/>
                    </div>
                    <div id="about-content" className="lg:basis-1/2">
                        <h1>About Me</h1>
                        <p className="py-4">
                            With over 20 years of experience living, studying, and working in Finland, I bring a rich blend of professional and personal insights to my coaching and mentoring services. My journey spans multiple disciplines, including engineering, teaching, and coaching, giving me a holistic perspective on both personal and organizational development.
                        </p>

                        <p className="py-4">
                            I hold degrees in IT, industrial management, business administration, and pedagogy/education, and have worked extensively across these fields. My career has included roles as an engineer and a teacher, where I’ve had the privilege of sharing knowledge and fostering growth in both academic and professional settings.
                        </p>

                        

                        <p className="py-4">
                            As a coach, I specialize in helping individuals and organizations reach their full potential. My coaching is not limited to professional development—I also have a deep passion for football, where I’ve coached teams and helped players refine their skills, teamwork, and leadership on and off the field.
                        </p>

                        
                        <p className="py-4">
                            Beyond my professional roles, I am deeply committed to community service. I volunteer regularly, giving back to the local community and organizing cultural events to promote intercultural dialogue and understanding. My aim is to create spaces where people from different backgrounds can come together, share their experiences, and learn from one another.
                        </p>

                        
                        <p className="py-4">
                            Whether I’m working with individuals, organizations, or communities, my focus is always on advancing growth, collaboration, and long-term success.
                        </p>


                    </div>
                </div>
                <div className="my-10 flex flex-row flex-wrap justify-center gap-10">

                    {educationContent.map((education, index) => (
                        <div
                            key={index}
                            className="flex justify-center gap-4 rounded-2xl p-4 shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <Image
                                src={education.image}
                                alt={education.alt}
                                width={50}
                                height={50}
                            />
                            <div>
                                <h4>{education.title}</h4>
                                <p>{education.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <div className="container mx-auto flex justify-center">
                <ContactForm showTrigger={true}/>
            </div>
        </section>
    )
}

export default About;