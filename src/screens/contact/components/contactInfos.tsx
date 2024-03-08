import { CONTACT } from '@/src/constants';
import React from 'react'

const ContactInfos = () => {
  return (
    <div className="flex flex-row">
        {CONTACT.map((item, index) => (
            <div key={index}>
            </div>
        ))}
    </div>
  )
}

export default ContactInfos;