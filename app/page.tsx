import React from "react";

import Overview from "@/components/overview";
import Product from "@/components/product";
import { PRODUCT } from "@/constants";
import Modal from "@/components/modal";

const Home: React.FC<any> = () => {

  return (
  <div className="flex flex-col items-center justify-between">
      <Overview/>
      <div className="flex flex-row gap-x-2 mx-5"> 
      {/* todo scroll */}
       {PRODUCT.map((product, index) => (
        <Product
         key={index}
         date={product.date} 
         icon={product.icon} 
         title={product.title} 
         description={product.description}
         />
       ))}
      </div>
  </div>
  );
}

export default Home;