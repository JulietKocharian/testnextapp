"use client"
import React, {useState, useEffect} from 'react';

import { ProductsAPI } from '@/src/API/products/products';
import Product from '@/src/components/product';

const SingleProduct:React.FC<any> = ({ params }: { params: {productId: string}}) => {  
  
  const [singleProduct, setSingleProduct] = useState();
  console.log(params);

  useEffect(() => {
     const getData = async () => {
      const data = await ProductsAPI.getSingleProduct(params.productId);
      setSingleProduct(data);
    }
    getData();
  }, [params.productId]);

  return (
    <div className="flex flex-row gap-x-2 mx-5"> 
     {
        singleProduct ?
(<Product 
     id={singleProduct['id']}
     key={singleProduct['id']}
     title={singleProduct['title']} 
     textStyle="hover:text-gray-500"
     description={singleProduct['description']}
     containerStyle='w-[500px] mx-auto shadow-lg'
     //@ts-ignore
     date={singleProduct['createdAt'].slice(0, 10)} 
     icon={`http://192.168.1.18:5000/${singleProduct['image']}`} 
/>)
 :
 (<div className='flex h-screen items-center justify-center w-full'>
    <p className='text-gray-500 text-5xl'>Loading...</p>
</div>)

}
   </div>
  )
}

export default SingleProduct;