'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import ContactImage1 from '@/public/images/logo.svg'
import ContactImage2 from '@/public/images/services/Services6.jpg'

const Contact = () => {
return (
    <div>
    <Header />
    <div className="w-full h-56 bg-cover bg-center -mt-10" style={{ backgroundImage: `url(${ContactImage2.src})` }}>
        <div className="container mx-auto mb-4">
        </div>
    </div>
    <div className="container mx-auto my-20 px-4">
        <div className="flex flex-col lg:flex-row border-t-2 border-b-2 border-black gap-10">
            <div className="w-full flex flex-col justify-center p-8 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
                <Image
                    src={ContactImage1}
                    alt="Contact Image"
                    width={300}
                    height={400}
                    priority
                    className='mx-auto lg:mx-0'
                />
                <h3 className='my-4'>Get in touch with me</h3>
                <p>Do reach out to me to arrange a 1:1 meeting or for a free session.</p>

            </div>
            <div className="w-full">
                <ContactForm showTrigger={false} />
            </div>
        </div>
    </div>
    <Footer />
    </div>
)
}

export default Contact
