import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import AboutPic from '@/public/images/about.jpeg';
import { Button } from '@/components/ui/button'

const About = () => {
    return (
        <section className="about-page">
            <Header/>
            <div className="container mx-auto my-20 px-4">
                <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
                    <div className="about-image lg:basis-1/2">
                        <Image src={AboutPic} alt="About Image" width={600} height={400}/>
                    </div>
                    <div className="about-content lg:basis-1/2">
                        <h1>About Me</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eius nam commodi consequatur voluptatum praesentium itaque adipisci voluptate, aut et quibusdam placeat nisi at eligendi nesciunt ab excepturi porro eveniet?
                            A recusandae voluptatum sequi odit id accusantium maiores, magni ipsa cupiditate cum neque, inventore eius laudantium in at nulla dicta vero est repellat eum quae laborum doloribus necessitatibus. Excepturi, aliquam.
                            Dolorum pariatur minus suscipit perferendis nobis dolores ducimus cupiditate, dicta, ea facilis, asperiores quidem hic fugiat obcaecati quibusdam a officia sequi ab magnam quaerat sit. A reiciendis culpa facere perferendis.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex justify-center">
                <Button variant='default' size='xl'>
                        Reach out for a free session
                </Button>
            </div>
            <Footer/>
        </section>
    )
}

export default About;