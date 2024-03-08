"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { UserAPI } from '@/src/API/user/user';
import Product from '@/src/components/product';


const ProfilePage: React.FC<any> = () => {


  const router = useRouter()

  const [userData, setUserData] = useState({email: ''});
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;


  useEffect(() => {
    if(!token) {
      router.push('/home');
    } 
  }, [router, token]);

  useEffect(() => {
    if (token) {
      const getUserData = async () => {
        const data = await UserAPI.getUserInfo(token)
        setUserData(data);
      }
      getUserData()
    }
  }, [token])

  return (
    <div className='flex flex-col justify-center w-full'>
    <div className="mx-10 h-0.5 bg-gray-100 my-5"></div>
    <div className='flex w-full items-center flex-col bg-gray-100'>
      <Product
        id={''}
        forProfile
        title={"Profile info"}
        icon={'/assets/images/profile.jpg'}
        containerStyle='w-[400px] flex flex-col'
        description={`email: ${userData.email}`}
        imageStyle='w-[200px] mt-10 shadow-2xl rounded-full p-5'
      />
    </div>
    <div className="mx-10 h-0.5 bg-gray-300 my-5"></div>
  </div>

  )
}

export default ProfilePage;