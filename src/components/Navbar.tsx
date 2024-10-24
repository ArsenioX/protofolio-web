'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Hobi',
    path: '#Hobi',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed mx-auto top-0 left-0 right-0 z-10 py-4 transition-all duration-300 ${
        navbarBackground
          ? 'bg-gray-800 bg-opacity-60 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}>
      <div className='flex container flex-wrap items-center justify-between mx-auto px-4 py-2'>
        <Link href={'/'} className='text-lg text-white font-semibold'>
          Dhani Portofolio
        </Link>
        <div className='mobile-menu block md:hidden'>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label='Toggle menu'
            className='text-white'>
            {navbarOpen ? (
              <XMarkIcon className='h-5 w-5' />
            ) : (
              <Bars3Icon className='h-5 w-5' />
            )}
          </button>
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex md:flex-row md:space-x-4'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
