import Image from 'next/image'
import Link from 'next/link' // Import the Link component
import LogoImage from '@/public/images/logo.svg'
import ContactForm from '@/components/ContactForm'
import siteLinks from '@/components/siteLinks'

import {
    YouTubeIcon,
    LinkedinIcon,
    InstagramIcon
} from '@/components/SocialIcons'
import { SVGProps } from 'react'

interface SocialLink {
    icon: React.ComponentType<SVGProps<SVGSVGElement>>;
    alt: string;
    href: string;
    color?: string;
}

const Footer = () => {
    const socialLinks: SocialLink[] = [
        {
            icon: YouTubeIcon,
            alt: 'Coach Oye Youtube',
            href: 'https://www.youtube.com/@CoachOye',
            color: 'text-red-500',
        },
        {
            icon: LinkedinIcon,
            alt: 'Coach Oye LinkedIn',
            href: 'https://www.linkedin.com/in/francisoyeyiola/',
            color: 'text-blue-500',
        },
        {
            icon: InstagramIcon,
            alt: 'Coach Oye Instagram',
            href: 'https://www.instagram.com/coach_oye/',
            color: 'text-pink-500',
        }
    ];

    return (
        <footer className='mt-20 bg-secondary p-2'>
            <div className='container mx-auto px-4 py-8'>
                <div className='grid grid-cols-1 gap-8 sm:grid-flow-col sm:grid-cols-3'>
                    <div className='col-span-2 flex flex-col gap-4'>
                        <div className='w-fit rounded-lg bg-white p-2'>
                            <Image
                                src={LogoImage}
                                alt='Coach Oye Logo'
                                width={200}
                                height={140}
                            />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <p className='text-base'>Copyright © 2024 Francis Oyeyiola</p>
                            <p className='text-base'><Link href='/privacy-policy'>Privacy Policy</Link></p>
                            <p className='text-base'>
                                Designed & developed by{' '}
                                <a href='https://kunalmenon.com'>Kunal Menon</a>
                            </p>
                        </div>
                        <div className='flex flex-row gap-6'>
                            {socialLinks.map(link => (
                                <Link href={link.href} key={link.alt} target='_blank'>
                                    <span className={`group cursor-pointer shadow-lg transition-all duration-300 hover:text-white ${link.color}`}>
                                        <link.icon width={40} height={40} className="fill-current" />
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <h3 className='mb-4'>Quick Links</h3>
                        <div className='flex flex-col gap-4'>
                            {siteLinks.map((link, index) => (
                                <Link href={link.href} key={index}>
                                    <p>{link.label}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className=''>
                        <h3 className='mb-4'>Contact Info</h3>
                        <div className='flex flex-col gap-4'>
                            <p>
                                <a href='mailto:info@coachme2.fi'>info@coachme2.fi</a>
                            </p>

                            <ContactForm showTrigger={true} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer
