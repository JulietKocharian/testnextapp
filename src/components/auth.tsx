"use client"
import React, {useEffect, useState} from 'react';
// import { cookies } from 'next/headers';
import Cookies from 'js-cookie';
import Image from 'next/image';

import Button from '@/src/components/shared/button';
import Input from '@/src/components/shared/input';

import { UserAPI } from '../API/user/user';


interface IAuth {
    isAuth?: boolean
    _auth: () => void
}

const Auth: React.FC<IAuth> = ({isAuth, _auth}) =>  {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const [userInfos, setUserInfos] = useState({email : '', password : '', confirmPassord : ''});


    const getData = async () => {
      const data = await UserAPI.login(userInfos.email, userInfos.password);
      // setUserInfo(data)
      Cookies.set(`token`, `${data.token}`);
      console.log((data));
    }

  
  return (
        <div className='bg-gray-50 py-5 px-10 min-w-[300px] min-h-[200px] rounded-lg shadow-md flex gap-y-10 justify-cente flex-col' onClick={(event) => event.stopPropagation()}>

    <Image src='/assets/images/logo.svg' width={60} height={60} alt='logo' /><h2 className='text-lg font-semibold'>{!isAuth ? 'Sign Up' : 'Sign In'}</h2><div className='flex justify-center flex-col gap-y-10'>
          <Input
              required
              type="email"
              value={userInfos.email}
              containerStyle='mx-auto'
              placeholder="Enter your email"
              onChange={(e) => setUserInfos({...userInfos, email: e.target.value})}
              className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />
          <Input
              value={userInfos.password}
              containerStyle='mx-auto'
              placeholder="Enter your password"
              rightIcon='/assets/images/hide.svg'
              type={showPassword ? 'text' : 'password'}
              showPassoword={() => setShowPassword((prev) => !prev )}
              onChange={(e) => setUserInfos({...userInfos, password: e.target.value})}
              className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />
          {!isAuth &&
              <Input
              containerStyle='mx-auto'
              placeholder="Confirm password"
              value={userInfos.confirmPassord}
              rightIcon='/assets/images/hide.svg'
              type={showConfirmPassword ? 'text' : 'password'}
              showPassoword={() => setShowConfirmPassword((prev) => !prev )}
              onChange={(e) => setUserInfos({...userInfos, confirmPassord: e.target.value})}
              className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />}
      </div>
      <div className='flex flex-row justify-end'>
      <Button
          type='button'
          onClick={getData}
          textStyle='text-black'
          title={isAuth ? 'Sign In' : 'Sign Up'}
          style='flex items-center justify-center bg-gray-300 rounded-lg cursor-pointer hover:font-bold p-2'
        />
      </div>
      <div className='flex flex-row justify-between'>
              <p>{isAuth ? 'Not a member yet?' : 'Already a member?'}</p>
              <p className='cursor-pointer' onClick={_auth}>{isAuth ? 'Sign Up' : 'Sign In'}</p>
      </div>
    </div>
  )
}


export default Auth;