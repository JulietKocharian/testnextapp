import React from 'react'
import Image from "next/image";

import Button from './shared/button';

const Overview = () => {
  
return (
<>
    <Image src='/assets/images/justdoit.jpg' alt='nike' width={1000} height={500} className="w-full"/>
    <h1 className="text-4xl font-bold tracking-widest py-5 ">JORDAN EVERYDAY STAPLES</h1>
    <h3>Style and legacy come together in the latest collection.</h3>
    <Button 
    title='Shop'
    type='button'
    textStyle='text-gray-50'
    style='flex flex-row justify-between items-center bg-gray-400 px-6 py-2 rounded-3xl cursor-pointer my-5 hover:font-bold hover:bg-gray-500'
    />
</>
  )
}

export default Overview