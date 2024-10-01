import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '@/public/images/logo.svg'

const Header = () => {
  const siteLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Me' }
  ]

  return (
    <header>
      <div className='sticky top-0 z-10 w-full bg-white shadow-md'>
        <div className='container mx-auto p-2'>
          <nav className='flex items-center justify-between'>
            <Image
              src={LogoImage}
              alt='Coach Oye Logo'
              width={150}
              height={140}
            />

            <ul className='hidden gap-2 sm:flex md:gap-4 lg:gap-10'>
              {siteLinks.map(siteLink => (
                <li
                  key={siteLink.href}
                  className='font-medium uppercase text-gray-900 hover:text-blue-600'
                >
                  <Link href={siteLink.href}>{siteLink.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
