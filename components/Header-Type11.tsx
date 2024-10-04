"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface SiteLink {
  href: string;
  label: string;
}

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const siteLinks: SiteLink[] = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/services', label: 'Services' },
    // { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact Me' },
  ];

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-10">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" aria-label="Home">
          <Image
            src="@public/images/logo.svg"
            alt="Coach Oye Logo"
            width={150}
            height={140}
            priority
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden flex items-center px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={showMenu ? 'Close menu' : 'Open menu'}
        >
          <Image
            src={showMenu ? '/close.svg' : '/hamburger.svg'}
            alt={showMenu ? 'Close Menu' : 'Open Menu'}
            width={24}
            height={24}
          />
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex md:gap-10 md:items-center">
          <ul className="md:flex md:gap-10 md:items-center flex flex-col md:flex-row gap-4">
            {siteLinks.map((siteLink) => (
              <li
                key={siteLink.href}
                className="font-medium uppercase text-gray-900 hover:text-blue-600"
              >
                <Link href={siteLink.href}>{siteLink.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            {siteLinks.map((siteLink) => (
              <li
                key={siteLink.href}
                className="font-medium uppercase text-gray-900 hover:text-blue-600"
              >
                <Link href={siteLink.href} onClick={() => setShowMenu(false)}>
                  {siteLink.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
