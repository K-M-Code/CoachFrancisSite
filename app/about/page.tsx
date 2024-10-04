import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import AboutPic from '@/public/images/about2.jpg';
import ContactForm from "@/components/ContactForm";

const About = () => {
    return (
        <section className="about-page">
            <Header/>
            <div className="container mx-auto my-20 px-4">
                <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
                    <div className="about-image lg:basis-1/2 ">
                        <Image src={AboutPic} alt="About Image" width={600} height={400} className="rounded-2xl"/>
                    </div>
                    <div className="about-content lg:basis-1/2">
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
                <div className="flex">
                    
                </div>
            </div>
            <div className="container mx-auto flex justify-center">
                <ContactForm showTrigger={true}/>
            </div>
            <Footer/>
        </section>
    )
}

export default About;