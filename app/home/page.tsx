"use client"
import React, {useState, useEffect} from 'react'

import Product from '@/src/components/product';
import Overview from '@/src/components/overview';
import { ProductsAPI } from '@/src/API/products/products';

const Home: React.FC<any> = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
      const getData = async () => {
        const data = await ProductsAPI.getProducts();
        setProduct(data);
      }
      getData();
    }, [])
    
    console.log(product);

  return (
  <div className="flex flex-col items-center justify-between">

    <Overview/>
    <div className="flex flex-row gap-x-2 mx-5"> 
     {product.map((product: { id: number; image: string; title: string; description: string; createdAt: string}) => (
      <Product
       key={product.id}
       title={product.title} 
       textStyle="hover:text-gray-500"
       description={product.description}
       date={product.createdAt.slice(0, 10)} 
       icon={`http://192.168.1.18:5000/${product.image}`} 
       />
     ))}
    </div>
  </div>

  )
}

export default Home;