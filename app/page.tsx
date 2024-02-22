
"use client"
import React, { useEffect, useState } from "react";

import Overview from "@/src/components/overview";
import Product from "@/src/components/product";
import { PRODUCT } from "../src/constants";
import { ProductsAPI } from "@/src/API/products/products";

const Home: React.FC<any> = () => {

  const [product, setProduct] = useState<[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await ProductsAPI.getProducts();
      setProduct(data.entries)
      console.log(data);
    }
    getData();
  }, [])

  return (
  <div className="flex flex-col items-center justify-between">
      <Overview/>
      <div className="flex flex-row gap-x-2 mx-5"> 
      {/* todo scroll */}
       {PRODUCT.map((product: { date: string; icon: string; title: string; description: string; }, index: React.Key | null | undefined) => (
        <Product
         key={index}
         date={product.date} 
         icon={product.icon} 
         title={product.title} 
         textStyle="hover:text-gray-500"
         description={product.description}
         />
       ))}
      </div>
  </div>
  );
}

export default Home;