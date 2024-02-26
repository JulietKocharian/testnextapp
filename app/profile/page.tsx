"use client"
import React, { useState } from 'react';

import { UserAPI } from '@/src/API/user/user';
import Product from '@/src/components/product';

const Profile: React.FC<any> = () => {

  const [userInfos, setUserInfos] = useState({email: '', password: ''});

  const getData = async () => {
    const data = await UserAPI.signIn(userInfos.email, userInfos.password);
    setUserInfos(data);
    console.log(data);
  }

  getData();
  

  return (
    <div className='flex flex-col justify-center w-full'>
      <div className="mx-10 h-0.5 bg-gray-100 my-5"></div>
      <div className='flex w-full items-center flex-col bg-gray-100'>
    <Product 
       id={''}
       forProfile
       title={"Profile info"}
       icon={'/assets/images/person.avif'}
       containerStyle='w-[400px] flex flex-col'
       description={`email: ${userInfos.email}`}
       imageStyle='w-[200px] mt-10 shadow-2xl rounded-full p-5'
       />
      </div>
      <div className="mx-10 h-0.5 bg-gray-300 my-5"></div>
    </div>
  )
}

export default Profile;