"use client"
import React, {useState, useEffect} from 'react'

import Product from '@/src/components/product';
import Overview from '@/src/components/overview';
import Loading from '@/src/components/shared/loading';
import { ProductsAPI } from '@/src/API/products/products';

const HomePage: React.FC<any> = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
      const getData = async () => {
        const data = await ProductsAPI.getProducts();
        const filteredData = data.filter((item:any) => item.type === "n")
        setProduct(filteredData);
      }
      getData();
    }, [])
    

  return (
  <div className="flex flex-col items-center justify-between">
    <Overview/>
    <div className="flex flex-row gap-x-2 mx-5"> 
    {product.length > 0 ? 
    (
      <>
      {product.map((product: { id: string; image: string; title: string; description: string; createdAt: string}) => (
        <Product
         getMore
         id={product.id}
         key={product.id}
         title={product.title} 
         textStyle="hover:text-gray-500"
         description={product.description}
         date={product.createdAt.slice(0, 10)} 
         imageStyle='rounded-tl-2xl rounded-tr-2xl'
         icon={`http://192.168.1.18:5000/${product.image}`} 
         />
       ))
      }
       </>
    ) : (
      <Loading forHome/>
    ) }

    </div>
  </div>

  )
}

export default HomePage;