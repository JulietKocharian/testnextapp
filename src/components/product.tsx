import React from 'react';
import Link from 'next/link';
import Image from "next/image";


interface IProduct{
    date: string,
    icon: string,
    title: string,
    textStyle?: string,
    description: string,
}

const Product:React.FC<IProduct> = ({
    date,
    icon,
    title, 
    textStyle,
    description
}) => {
  return (
    <div className='bg-gray-100 flex flex-col gap-y-5 my-10 rounded-2xl pb-10'>
        <Image src={icon} alt={title} width={200} height={200} className='w-full rounded-tl-2xl rounded-tr-2xl'/>
        <div className='px-5'>
        <h1 className='font-bold'>{title}</h1>
        <p>{description}</p>
        <div className='flex justify-between'>
        <p>{`Posted date: ${date}`}</p>
        <Link href='/singleProduct' className={`font-bold ${textStyle}`}>Get more</Link>
        </div>
    </div>
 </div>
  )
}

export default Product;