import Image from 'next/image';
import React from 'react'

interface IButton{
    style: string
    title: string
    icon?: string
    textStyle?: string
    onClick?: () => void
    type: 'button' | 'submit'
}

const Button: React.FC<IButton> = ({
    type,
    icon,
    style,
    title,
    onClick,
    textStyle,
}
) => {
  return (
   <button
   onClick={onClick}
    className={style}
    type = {type}
    >
        {icon && <Image src={icon} height={24} width={24} alt={title}/>}
        <label className={textStyle}>{title}</label>
    </button>
  )
}

export default Button;