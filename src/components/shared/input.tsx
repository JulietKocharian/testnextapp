"use-client"
import Image from 'next/image'
import React, { Dispatch, InputHTMLAttributes, SetStateAction, useState } from 'react'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    rightIcon?: string,
    containerStyle?: string
    showPassoword?: () => void,

}

const Input: React.FC<IInput> = ({
    type,
    value,
    onChange,
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
                type={type}
                value={value}
                placeholder={placeholder}
                className = {`focus:outline-none ${className}`}
                onChange={onChange}
                {...props}
        />
            {rightIcon && 
            <div className='absolute inset-y-0 end-0 flex items-center pe-4' >
                <Image src={rightIcon} alt={rightIcon} width={20} height={20} onClick={showPassoword}/>
            </div>
            }
        </div>
    
    )
}

export default Input;
