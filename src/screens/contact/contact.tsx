"use client";
import React, { useState } from "react";

import Input from "@/src/components/shared/input";
import { FAQ } from "@/src/constants";

const ContactPage: React.FC<any> = () => {

    const [value, setValue] = useState('');

    return(
    <div className="flex w-full justify-center flex-col">
        <div className="mt-10 flex flex-col justify-center">
         <h1 className="text-center font-extrabold text-4xl text-gray-500">Get help</h1>
        <Input
          type="text"
          value={value}
          placeholder="Search..."
          onChange={(e) => setValue}
          containerStyle='mx-auto my-10'
          rightIcon="/assets/images/search.svg"
          className='px-10 py-5  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm '
          />
        </div>
        <div className=" flex flex-col px-10 mt-10">
            <h1 className="text-3xl text-gray-500">
                Quick assists
            </h1>
            <p>Answers to our most frequently asked questions are just one click away.</p>
        </div>
        <div className="mx-10 h-0.5 bg-gray-300 my-5"></div>
        <div className="flex flex-row  justify-between px-10">
            {FAQ.map((item, index) => (
                <ul key={index} className={`flex flex-col justify-between ${index === 0 && 'font-bold'}`}> 
                {/* todo => bold */}
                    {item.map((item, index) => (
                        <li key={index} className={`hover:text-gray-400 font-thin cursor-pointer`}>
                         {item}
                        </li>
                    ))}
                </ul>
            ))}
        </div>
        <div className=" flex flex-col px-10 mt-40">
            <h1 className="text-3xl text-gray-500">
                Contact us
            </h1>
        </div>
        <div className="mx-10 h-0.5 bg-gray-300 my-5"></div>
    </div>
    )
}

export default ContactPage;