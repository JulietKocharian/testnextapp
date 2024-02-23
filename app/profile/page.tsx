"use client"
import Product from '@/src/components/product';
import React, { useEffect, useState } from 'react'

const Profile: React.FC<any> = () => {

  const [infos, setInfos] = useState();

  

  return (
    <div className='flex flex-col h-auto w-full justify-center items-center'>
    <Product 
       id={''}
       forProfile
       title={"Email:"}
       description={''}
       icon={'/assets/images/person.avif'}
       containerStyle='w-[400px] items-center'
       imageStyle='w-[200px] mt-10 rounded-2xl shadow-2xl'
       />
    </div>
  )
}

export default Profile;