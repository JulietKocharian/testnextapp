"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Auth from './auth';

interface  IModalProps {
  isOpen:boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: React.FC<IModalProps> = ( {isOpen, setIsOpen}) => {

  const [isAuth, setIsAuth] = useState<boolean>(true);


  const token = localStorage.getItem('token');


  useEffect(() => {
        isOpen ?
        document.documentElement.style.overflow = 'hidden':
        document.documentElement.style.overflow = 'auto';
    }
, [isOpen]);

const toggleModals = () => {
  if(isAuth) {
    setIsAuth(false);
  }
  else {
    setIsAuth(true);
  }

}

  const auth = () => {
    if(token) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
      <div className='fixed inset-0 flex items-center justify-center z-0 bg-gray-100 bg-opacity-70' onClick={() => setIsOpen(false)}>
      <Auth isAuth={isAuth} _auth={auth} _toggleModals={toggleModals}/>
    </div>
    )
};

export default Modal;
