import React from 'react';

import SingleProductPage from '@/src/screens/singleProduct/singleProduct';

const SingleProduct:React.FC<any> = ({ params }: { params: {productId: string}}) => {  
  
  return (
    <SingleProductPage params={params}/>
  )
}

export default SingleProduct;