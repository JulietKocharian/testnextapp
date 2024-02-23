import React from 'react';
import Link from 'next/link';
import Image from "next/image";


interface IProduct{
    id: string
    icon: string
    date?: string
    title: string
    getMore?: boolean
    textStyle?: string
    imageStyle?: string
    description?: string
    forProfile?: boolean
    containerStyle?: string
}

const Product:React.FC<IProduct> = ({
    id,
    date,
    icon,
    title,
    getMore,
    textStyle,
    imageStyle,
    forProfile,
    description,
    containerStyle,
}) => {
  return (
    <div className={`bg-gray-100 flex flex-col gap-y-5 mb-5 rounded-2xl pb-10 shadow-md ${containerStyle}`}>
        <Image src={icon} alt={title} width={200} height={200} className={`w-full rounded-tl-2xl rounded-tr-2xl ${imageStyle}`}/>
        <div className='px-5'>
        <h1 className='font-bold'>{title}</h1>
        <p>{description}</p>
        <div className='flex justify-between'>
        {!forProfile && <p>{`Posted date: ${date}`}</p>}
        {getMore && 
        <Link href={`/singleProduct/${id}`} className={`font-bold ${textStyle}`}>Get more</Link>
        }
        </div>
    </div>
 </div>
  )
}

export default Product;