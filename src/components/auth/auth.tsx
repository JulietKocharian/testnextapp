"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Button from '@/src/components/shared/button';
import Input from '@/src/components/shared/input';
import { UserAPI } from '@/src/API/user/user';
import ForgotPassword from './forgotPassword';

interface IAuth {
  isAuth?: boolean
  _auth: () => void
  _toggleModals: () => void
}

const Auth: React.FC<IAuth> = ({ isAuth, _auth, _toggleModals }) => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);


  const [forgot, setForgot] = useState(false);

  const router = useRouter()
  const [userInfos, setUserInfos] = useState({ email: '', password: '', confirmPassword: '' });


   const getData = async () => {
     if (userInfos.email === '' || userInfos.password === '') {
       throw new Error('Invalid user data');
      } else {
      const data = isAuth ? await UserAPI.signIn(userInfos.email, userInfos.password) : 
      await UserAPI.signUp(userInfos.email, userInfos.password);
      if(data.token && isAuth) {
        router.push('/profile');
        window.location.pathname = "/profile";
        localStorage.setItem(`token`, `${data.token}`);
      } else if(data.token && !isAuth){
        router.push('/home');
        window.location.pathname = "/home";
      } else {
        alert(data.message)
      }

      _auth();
    } 
  }

  return (
<div className='bg-gray-50 py-5 px-10 min-w-[300px] min-h-[200px] rounded-lg shadow-md flex gap-y-10 justify-cente flex-col' onClick={(event) => event.stopPropagation()}>
  <>{!forgot ?  (
    <><Image src='/assets/images/logo.svg' width={60} height={60} alt='logo' /><h2 className='text-lg font-semibold'>{!isAuth ? 'Sign Up' : 'Sign In'}</h2><div className='flex justify-center flex-col gap-y-10'>
          <Input
            required
            type="email"
            value={userInfos.email}
            containerStyle='mx-auto'
            placeholder="Enter your email"
            onChange={(e) => setUserInfos({ ...userInfos, email: e.target.value })}
            className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />
          <Input
            containerStyle='mx-auto'
            value={userInfos.password}
            placeholder="Enter your password"
            rightIcon='/assets/images/hide.svg'
            type={showPassword ? 'text' : 'password'}
            showPassoword={() => setShowPassword((prev) => !prev)}
            onChange={(e) => setUserInfos({ ...userInfos, password: e.target.value })}
            className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />
          {!isAuth &&
            <Input
              containerStyle='mx-auto'
              placeholder="Confirm password"
              value={userInfos.confirmPassword}
              rightIcon='/assets/images/hide.svg'
              type={showConfirmPassword ? 'text' : 'password'}
              showPassoword={() => setShowConfirmPassword((prev) => !prev)}
              onChange={(e) => setUserInfos({ ...userInfos, confirmPassword: e.target.value })}
              className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />}
        </div><div className={`flex flex-row justify-end ${isAuth && 'justify-between items-center'}`}>
            {isAuth && <p className='text-gray-500 cursor-pointer' onClick={() => setForgot(true)}>Forgot password </p>}
            <Button
              type='button'
              onClick={getData}
              textStyle='text-black'
              title={isAuth ? 'Sign In' : 'Sign Up'}
              style='flex items-center justify-center bg-gray-300 rounded-lg cursor-pointer hover:font-bold p-2' />
          </div><div className='flex flex-row justify-between'>
            <p>{isAuth ? 'Not a member yet?' : 'Already a member?'}</p>
            <p className='cursor-pointer' onClick={_toggleModals}>{isAuth ? 'Sign Up' : 'Sign In'}</p>
          </div></>
  ) : (
    <ForgotPassword/>
  )}
  </>
</div> 
//     <>
//  {!showAlert ? (
//     <div className='bg-gray-50 py-5 px-10 min-w-[300px] min-h-[200px] rounded-lg shadow-md flex gap-y-10 justify-cente flex-col' onClick={(event) => event.stopPropagation()}>
//   {!forgot ?  (
        //        <>
        //   <Image src='/assets/images/logo.svg' width={60} height={60} alt='logo' /><h2 className='text-lg font-semibold'>{!isAuth ? 'Sign Up' : 'Sign In'}</h2><div className='flex justify-center flex-col gap-y-10'>
        //   <Input
        //     required
        //     type="email"
        //     value={userInfos.email}
        //     containerStyle='mx-auto'
        //     placeholder="Enter your email"
        //     onChange={(e) => setUserInfos({ ...userInfos, email: e.target.value })}
        //     className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />
        //   <Input
        //     containerStyle='mx-auto'
        //     value={userInfos.password}
        //     placeholder="Enter your password"
        //     rightIcon='/assets/images/hide.svg'
        //     type={showPassword ? 'text' : 'password'}
        //     showPassoword={() => setShowPassword((prev) => !prev)}
        //     onChange={(e) => setUserInfos({ ...userInfos, password: e.target.value })}
        //     className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />
        //   {!isAuth &&
        //     <Input
        //       containerStyle='mx-auto'
        //       placeholder="Confirm password"
        //       value={userInfos.confirmPassword}
        //       rightIcon='/assets/images/hide.svg'
        //       type={showConfirmPassword ? 'text' : 'password'}
        //       showPassoword={() => setShowConfirmPassword((prev) => !prev)}
        //       onChange={(e) => setUserInfos({ ...userInfos, confirmPassword: e.target.value })}
        //       className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />}
        // </div><div className={`flex flex-row justify-end ${isAuth && 'justify-between items-center'}`}>
        //     {isAuth && <p className='text-gray-500 cursor-pointer' onClick={() => setForgot(true)}>Forgot password </p>}
        //     <Button
        //       type='button'
        //       onClick={getData}
        //       textStyle='text-black'
        //       title={isAuth ? 'Sign In' : 'Sign Up'}
        //       style='flex items-center justify-center bg-gray-300 rounded-lg cursor-pointer hover:font-bold p-2' />
        //   </div><div className='flex flex-row justify-between'>
        //     <p>{isAuth ? 'Not a member yet?' : 'Already a member?'}</p>
        //     <p className='cursor-pointer' onClick={_toggleModals}>{isAuth ? 'Sign Up' : 'Sign In'}</p>
        //   </div>
        //   </> 
//       ) : (
//         <ForgotPassword/>
//       )}
// </div>) : ( <Alert isValid={isValid}/> )}
// </>
    
  )
}


export  default  Auth;