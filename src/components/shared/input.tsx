"use-client"
import Image from 'next/image'
import React, { Dispatch, InputHTMLAttributes, SetStateAction, useState } from 'react'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    rightIcon?: string,
    containerStyle?: string
    showPassoword?: () => void,
    setValue: Dispatch<SetStateAction<string>>

}

const Input: React.FC<IInput> = ({
    value,
    setValue,
    rightIcon,
    placeholder,
    showPassoword,
    className = '',
    containerStyle,
    ...props

}) => {

    return (
        <div className={`relative ${containerStyle}`}>
        <input 
                type={showPassoword ? 'password' : 'text'}
                value={value}
                placeholder={placeholder}
                className = {`focus:outline-none ${className}`}
                onChange={(e) => setValue(e.target.value)}
                {...props}
        />
            {rightIcon && 
            <div className='absolute inset-y-0 end-0 flex items-center pe-4'>
                <Image src={rightIcon} alt={rightIcon} width={20} height={20}/>
            </div>
            }
        </div>
    
    )
}

export default Input;
