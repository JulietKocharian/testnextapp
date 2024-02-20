import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


import Button from '../button';
import { NAV_LINKS } from '@/constants';


const Navbar: React.FC<any> = () => {
  return (
    <nav className='flex justify-between max-container padding-container z-30 py-5 px-10 w-full'>
      <ul className='h-full gap-12 flex items-center w-full flex justify-between'>
        <li className=''>
        <Link href='/'>
         <Image src='assets/images/logo.svg' alt='logo' width={100} height={100} className='max-w-none'/>
        </Link>
        </li>
        <div className='flex gap-x-20'>
        {NAV_LINKS.map((link) => (
          <li key={link.key} className='regular-16 text-black-50 flex-center transition-all hover:font-bold'>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
        </div>
      <Button 
        type='button'
        title='Log In'
        textStyle='text-black'
        icon='assets/images/user.svg'
        style='flex flex-row justify-between items-center bg-gray-100 p-2 ml-60 rounded-lg cursor-pointer hover:font-bold'
      />

      </ul>
    </nav>
  )
}

export default Navbar;