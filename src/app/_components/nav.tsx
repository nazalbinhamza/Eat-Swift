'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

function Nav() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>('Home');

  useEffect(() => {
    switch (pathname) {
      case '/':
        setActiveLink('Home');
        break;
      case '/Category':
        setActiveLink('Category');
        break;
      case '/Aboutus':
        setActiveLink('About us');
        break;
      case '/Reservation':
        setActiveLink('Reservation');
        break;
      case '/Blog':
        setActiveLink('Blog');
        break;
      default:
        setActiveLink('Home');
    }
  }, [pathname]);

  const paths: { [key: string]: string } = {
    Home: '/',
    Category: '/Category',
    'About us': '/Aboutus',
    Reservation: '/Reservation',
    Blog: '/Blog'
  };

  return (
    <div className="flex flex-col justify-between p-1">
      <header>
        <div data-aos="fade-right" className="flex justify-start">
          <img className="h-[90px] w-[150px]" src="Logo.png" alt="Logo" />
          <div className="hidden md:flex lg:flex p-12 gap-7 font-semibold font-inter">
            {['Home', 'Category', 'About us', 'Reservation', 'Blog'].map((link) => (
              <Link key={link} href={paths[link]}>
                <h4
                  onClick={() => setActiveLink(link)}
                  style={{ color: activeLink === link ? '#F09217' : 'black' }}
                  className="cursor-pointer"
                >
                  {link}
                </h4>
              </Link>
            ))}
          </div>
        </div>
        <div data-aos="fade-left" className="flex justify-end mt-[-50px] pr-[40px] md:hidden lg:hidden">
          <div className="md:hidden lg:hidden">
            <button
              className="w-[30px] h-[30px] bg-white rounded-full shadow-md flex justify-around items-center p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div data-aos="fade-left" className="hidden md:flex lg:flex justify-end gap-8 mr-[50px] mt-[-70px]">
          <div className="w-[25px] bg-white h-[25px] rounded-full shadow-md flex justify-around p-[4px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <Link href="/Login">
            <div className="w-[25px] bg-white h-[25px] rounded-full shadow-md flex justify-around p-[4px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>
          </Link>
          <div className="w-[25px] bg-white h-[25px] rounded-full shadow-md flex justify-around p-[4px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#F09217" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden lg:hidden flex flex-col items-start p-4 gap-4 font-semibold font-inter">
            {['Home', 'Category', 'About us', 'Reservation', 'Blog'].map((link) => (
              <Link key={link} href={paths[link]}>
                <h4
                  onClick={() => setActiveLink(link)}
                  style={{ color: activeLink === link ? '#F09217' : 'black' }}
                  className="cursor-pointer"
                >
                  {link}
                </h4>
              </Link>
            ))}
            <div className="w-[25px] bg-white h-[25px] rounded-full shadow-md flex justify-around p-[4px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
            <Link href="/Login">
              <div className="w-[25px] bg-white h-[25px] rounded-full shadow-md flex justify-around p-[4px] ml-[40px] mt-[-40px]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
            </Link>
            <div className="w-[25px] bg-white h-[25px] rounded-full shadow-md flex justify-around p-[4px] ml-[80px] mt-[-55px]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#F09217" viewBox="0 0 24 24" strokeWidth="1.5" stroke="none" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Nav;