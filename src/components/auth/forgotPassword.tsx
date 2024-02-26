'use client'
import React, {useState} from "react";

import Input from "../shared/input";
import Button from "../shared/button";
import { UserAPI } from "../../API/user/user";


const ForgotPassword:React.FC<any> = () => {

    const [code, setCode] = useState('');
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [sentEmail, setSentEmail] = useState(false);


   const getData = async () => {
    if (email === '') {
      throw new Error('Invalid user data');
    } else {
      const data = !sentEmail ? await UserAPI.sendEmail(email) 
      : await UserAPI.sendCode(+code, newPassword, email);
      if(data.message = 'код отправлен') {
        setSentEmail(true);
        console.log('sent')
      }else {
        //todo
      }
    } 
  }



    return(
        <>
        {
            !sentEmail ? (        
            <>  
            <p className='text-gray-500 cursor-pointer'>Enter your email to reset password </p>
                     <Input
                        required
                        type="email"
                        value={email}
                        containerStyle='mx-auto'
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />
                        <Button
                            type='button'
                            title={'Send'}
                            textStyle='text-black'
                            onClick={getData}
                            style='flex items-center justify-center bg-gray-300 rounded-lg cursor-pointer hover:font-bold p-2' /></>) : 
                        (
                    <>
                         <p className='text-gray-500 cursor-pointer'>Update your password</p>
                        <Input
                            required
                            type="number"
                            value={code}
                            containerStyle='mx-auto'
                            placeholder="Enter code"
                            onChange={(e) => setCode(e.target.value)}
                            className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />
                        <Input
                            required
                            type="email"
                            value={newPassword}
                            containerStyle='mx-auto'
                            placeholder="Enter new password"
                            onChange={(e) => setNewPassword(e.target.value)}
                            className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />
                           <Button
                            type='button'
                            title={'Send'}
                            textStyle='text-black'
                            onClick={getData}
                            style='flex items-center justify-center bg-gray-300 rounded-lg cursor-pointer hover:font-bold p-2' />
                        </>

                        )
        }

    </>
    )
}

export default ForgotPassword;