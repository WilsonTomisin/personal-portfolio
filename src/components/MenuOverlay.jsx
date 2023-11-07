import React from 'react'
import NavLinks from './NavLinks'
import './menu.css'

export const MenuOverlay = ({links}) => {
  return (
    <ul className=' flex items-center flex-col py-6 h-screen'>
        {links.map((link, index)=>(
            <li key={index} className=' menu-items py-3'>
                <NavLinks href={link.path} name={link.name}/>
            </li>
        ))}
    </ul>
  )
}
