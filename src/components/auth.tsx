"use client"
import React, {useState} from 'react'
import Image from 'next/image';

import Input from './shared/input';
import Button from './shared/button';

interface IAuth {
    isAuth?: boolean
    _auth: () => void
}

const Auth: React.FC<IAuth> = ({isAuth, _auth}) =>  {
    const [email, setEmail] = useState<string>('');
    const [show, setShow] = useState<boolean>(false);

    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
  
  return (
        <div className='bg-gray-50 py-5 px-10 min-w-[300px] min-h-[200px] rounded-lg shadow-md flex gap-y-10 justify-cente flex-col' onClick={(event) => event.stopPropagation()}>

    <Image src='/assets/images/logo.svg' width={60} height={60} alt='logo' /><h2 className='text-lg font-semibold'>{!isAuth ? 'Sign Up' : 'Sign In'}</h2><div className='flex justify-center flex-col gap-y-10'>
          <Input
              type="text"
              value={email}
              setValue={setEmail}
              containerStyle='mx-auto'
              placeholder="Enter your email"
              className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />
          <Input
              value={password}
              setValue={setPassword}
              containerStyle='mx-auto'
              placeholder="Enter your password"
              rightIcon='/assets/images/hide.svg'
              className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />
          {!isAuth &&
              <Input
                  value={confirmPassword}
                  type={show ? 'text' : 'password'}
                  // showPassoword={() => setShow((prev) => !prev )}
                  setValue={setConfirmPassword}
                  containerStyle='mx-auto'
                  placeholder="Confirm password"
                  rightIcon='/assets/images/hide.svg'
                  className='px-10 py-5  text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 text-sm ' />}
      </div>
      <div className='flex flex-row justify-end'>
      <Button
          type='button'
          onClick={() => {}}
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