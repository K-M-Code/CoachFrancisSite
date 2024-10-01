import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '@/public/images/logo.svg';
import YouTubeIcon from '@/public/images/icons/youtube.svg';
import TwitterIcon from '@/public/images/icons/twitter.svg';
import LinkedinIcon from '@/public/images/icons/linkedin.svg';
import InstagramIcon from '@/public/images/icons/instagram.svg';

    const Footer = () => {
    const siteLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About Me' },
        { href: '/services', label: 'Services' },
        { href: '/blog', label: 'Blog' },
        { href: '/contact', label: 'Contact Me' }
  ];
    return (
        <footer className='mt-20 bg-secondary p-2'>
        <div className='container mx-auto px-4 py-8'>
        <div className='grid grid-cols-1 sm:grid-cols-3 sm:grid-flow-col gap-8'>
            <div className='flex flex-col gap-4 col-span-2'>
                <div className='w-fit rounded-lg bg-white p-2'>
                <Image
                    src={LogoImage}
                    alt='Coach Oye Logo'
                    width={200}
                    height={140}
                />
                </div>
                <div className='flex flex-col sm:flex-row gap-4'>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                </div>
                <div className='flex flex-col sm:flex-row gap-4'>
              <p>Copyright 2024 Francis Oyeyiola</p>
                <p>
                    Designed & developed by <a href='http://kunalmenon.com'>Kunal Menon</a>
                </p>
                </div>
                <div className='flex flex-row gap-4'>
              <a href='#' className="group">
                <span className="inline-block text-gray-400 hover:text-primary transition-colors duration-300">
                    <Image
                        src={YouTubeIcon}
                        alt='Coach Oye Youtube'
                        width={32}
                        height={32}
                        className="w-8 h-8 filter [&>*]:fill-primary"
                    />
                </span>
              </a>
              <a href='#'>
                <span className="inline-block text-gray-400 hover:text-primary transition-colors duration-300">
                    <Image
                    src={TwitterIcon}
                    alt='Coach Oye Youtube'
                        width={32}
                        height={32}
                    />
                </span>
              </a>
              <a href='#'>
                <span className="inline-block text-gray-400 hover:text-primary transition-colors duration-300">
                  <Image
                    src={LinkedinIcon}
                    alt='Coach Oye LinkedIn'
                        width={32}
                        height={32}
                    />
                </span>
              </a>
              <a href='#'>
                <span className="inline-block text-gray-400 hover:text-primary transition-colors duration-300">
                  <Image
                    src={InstagramIcon}
                    alt='Coach Oye Instagram'
                    width={32}
                    height={32}
                  />
                </span>
              </a>
        </div>
          </div>
          <div className=''>
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
              <p><a href="tel:+123 456 7890">+123 456 7890</a></p>
              <p><a href='mailto:coachoye@coachme2.fi'>coachoye@coachme2.fi</a></p>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
