'use client'

import ContactForm from '@/components/ContactForm'
import Image from 'next/image'
import ContactImage1 from '@/public/images/logo.svg'
import ContactImage2 from '@/public/images/services/Services6.jpg'

const Contact = () => {
return (
    <section id='contactPage'>
    <div className="-mt-4 h-56 w-full bg-cover bg-center" style={{ backgroundImage: `url(${ContactImage2.src})` }}>
        <div className="container mx-auto mb-4">
        </div>
    </div>
    <div className="container mx-auto my-20 px-4">
        <div className="flex flex-col gap-10 border-y-2 border-black lg:flex-row">
            <div className="flex w-full flex-col justify-center border-b-2 border-black p-8 lg:border-b-0 lg:border-r-2">
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
    </section>
)
}

export default Contact
