import Link from 'next/link'
import Image from 'next/image'
import LogoImage from '@/public/images/logo.svg'
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { JSX, SVGProps } from 'react'
import siteLinks from '@/components/siteLinks'

interface Route {
  label: string
  href: string
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  )
}

const Header = () => {
  return (
  <>
      <header className='sticky top-0 z-50 w-full bg-white shadow-md'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between px-4 py-2'>
          <Link href='/' className='flex items-center gap-2' prefetch={false}>
            <Image src={LogoImage} alt='asteroid logo' height={50} />
            <span className='text-lg font-semibold'></span>
          </Link>
          <div className='hidden gap-4 md:flex'>
            {siteLinks.map((route: Route) => (
              <Link
                key={route.label}
                href={route.href}
                className='uppercase hover:text-primary'
                prefetch={false}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='menu' size='icon' className='lg:hidden'>
                <MenuIcon className='size-6' />
                <span className='sr-only'>Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right'>
              <div className="mt-8 flex h-[90vh] flex-col justify-between">
                <div className='grid w-[200px] gap-4'>
                  {siteLinks.map(route => (
                    <Link
                      key={route.label}
                      href={route.href}
                      className='my-4 border-l-4 border-primary pl-4 uppercase hover:border-secondary hover:text-secondary'
                      prefetch={false}
                    >
                      {route.label}
                    </Link>
                  ))}
                </div>
                <div className='flex justify-center'>
                  <Image src={LogoImage} alt='Coach Oye' height={75} />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header