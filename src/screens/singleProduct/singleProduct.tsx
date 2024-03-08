"use client"
import React, { useState, useEffect } from 'react';

import { ProductsAPI } from '@/src/API/products/products';
import Loading from '@/src/components/shared/loading';
import Product from '@/src/components/product';

interface ISingleProductPageProps {
    params: any
}

const SingleProductPage: React.FC<ISingleProductPageProps> = ({params}) => {

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
                        imageStyle='rounded-tl-2xl rounded-tr-2xl'
                        //@ts-ignore
                        date={singleProduct['createdAt'].slice(0, 10)}
                        icon={`http://192.168.1.18:5000/${singleProduct['image']}`}
                    />)
                    :
                    (
                        <Loading />
                    )

            }
        </div>
    )
}

export default SingleProductPage;