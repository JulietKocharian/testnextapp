"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, {useEffect, useState} from 'react';


import { NAV_LINKS } from '@/src/constants';
import Button from '../shared/button';
import Modal from '../auth/modal';



const Navbar: React.FC<any> = () => {
  
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');


  const router = useRouter()

  const _openModal = () => {
    if(token) {
    localStorage.removeItem('token');
    window.location.pathname = '/home';
    router.push('/profile');
    setTitle('Sign In');
    // 
    setIsOpen(false);
    } else {
    setTitle('Sign Out');
    setIsOpen(true);
    }
  }
  
  useEffect(() => {
    if(token) {
      setTitle('Sign Out');
    } else {
      setTitle('Sign In');
    }
  }, [token])

  return (
    <nav className='flex justify-between padding-container z-30 py-5 px-10 w-full'>
      <ul className='h-full gap-12 flex items-center w-full justify-between'>
        <li className=''>
          <Link href='/'>
            <Image src='../assets/images/logo.svg' alt='logo' width={100} height={100} className='max-w-none' />
          </Link>
        </li>
        <div className='flex gap-x-20'>
          {NAV_LINKS.map((link: any) => (
            <li key={link.key} className='regular-16 text-black-50 flex-center transition-all hover:font-bold'>
              <Link href={link.href}>{ link.label}</Link>
            </li>
          ))}
        </div>
        <Button
          type='button'
          onClick={_openModal}
          textStyle='text-black'
          icon='../assets/images/user.svg'
          title={title}
          style='flex flex-row justify-between items-center bg-gray-100 p-2 rounded-lg cursor-pointer hover:font-bold'
        />
      </ul>
      {isOpen && <Modal setIsOpen={setIsOpen} isOpen={isOpen}/>}
    </nav>
  )
}

export default Navbar;