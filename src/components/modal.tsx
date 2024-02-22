import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import Auth from './auth';

interface  IModalProps {
  isOpen:boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const Modal: React.FC<IModalProps> = ( {isOpen, setIsOpen}) => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);


  useEffect(() => {
        isOpen ?
        document.documentElement.style.overflow = 'hidden':
        document.documentElement.style.overflow = 'auto';
    }
, [isOpen]);

  const auth = () => {
    setIsAuth((prev) => !prev);
  }

  const closeModal = () => {
    setIsOpen(false);
    
  }

  return (
      <div className='fixed inset-0 flex items-center justify-center z-0 bg-gray-100 bg-opacity-70' onClick={closeModal}>
      <Auth isAuth={isAuth} _auth={auth}/>
    </div>
    )
};

export default Modal;
