import React from 'react'
import NavLinks from './NavLinks'

export const MenuOverlay = ({links}) => {
  return (
    <ul className=' flex items-center flex-col py-6 h-screen'>
        {links.map((link, index)=>(
            <li key={index} className=' py-3'>
                <NavLinks href={link.path} name={link.name}/>
            </li>
        ))}
    </ul>
  )
}
