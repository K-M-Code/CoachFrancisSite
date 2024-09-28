import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
        const siteLinks = [
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About Me' },
          { href: '/services', label: 'Services' },
          { href: '/blog', label: 'Blog' },
          { href: '/contact', label: 'Contact Me' },
        ];

  return (
    <header>
      <div className="sticky top-0 w-full bg-white shadow-md z-10">
        <div className="container mx-auto p-2">
          <nav className="flex justify-between items-center">
            <Image
              src="logo.svg"
              alt="Coach Oye Logo"
              width={150}
              height={140}
            />

            <ul className="flex lg:gap-10 md:gap-4 sm:gap-2">
              {siteLinks.map((siteLink) => (
                <li key={siteLink.href} className="font-medium uppercase text-gray-900 hover:text-blue-600">
                  <Link href={siteLink.href}>
                    {siteLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
