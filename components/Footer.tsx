    import Image from 'next/image'
    import Link from 'next/link' // Import the Link component
    import LogoImage from '@/public/images/logo.svg'
    import YouTubeIcon from '@/public/images/icons/youtube.svg'
    import TwitterIcon from '@/public/images/icons/twitter.svg'
    import LinkedinIcon from '@/public/images/icons/linkedin.svg'
    import InstagramIcon from '@/public/images/icons/instagram.svg'

    // import { Button } from '@/components/ui/button'
    import ContactForm from '@/components/ContactForm'

    interface SocialLink {
    icon: string
    alt: string
    href: string
    }

    const Footer = () => {
    const siteLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Me' },
        { href: '/services', label: 'Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact Me' }
    ]

    const socialLinks: SocialLink[] = [
        { icon: YouTubeIcon, alt: 'Coach Oye Youtube', href: '/contact' },
        { icon: TwitterIcon, alt: 'Coach Oye Twitter', href: '#' },
        { icon: LinkedinIcon, alt: 'Coach Oye LinkedIn', href: '#' },
        { icon: InstagramIcon, alt: 'Coach Oye Instagram', href: '#' }
    ]

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
                <div className='flex flex-col gap-4 sm:flex-row'>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                </div>
                <div className='flex flex-col gap-4'>
                <p>Copyright © 2024 Francis Oyeyiola</p>
                <p>
                    Designed & developed by{' '}
                    <a href='https://kunalmenon.com'>Kunal Menon</a>
                </p>
                </div>
                <div className='flex flex-row gap-6'>
                {socialLinks.map(link => (
                    <Link href={link.href} key={link.alt} legacyBehavior>
                    <span className='group cursor-pointer'>
                        <Image
                        src={link.icon}
                        alt={link.alt}
                        width={32}
                        height={32}
                        className='fill-current text-gray-400 transition-colors duration-300 hover:text-primary'
                        />
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
                    <a href='tel:+123 456 7890'>+123 456 7890</a>
                </p>
                <p>
                    <a href='mailto:coachoye@coachme2.fi'>coachoye@coachme2.fi</a>
                </p>
                
                <ContactForm showTrigger={true} />
                </div>
            </div>
            </div>
        </div>
        </footer>
    )
    }
    export default Footer
