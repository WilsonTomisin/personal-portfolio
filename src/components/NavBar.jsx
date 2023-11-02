import React from 'react'
import NavLinks from './NavLinks'
import { MenuOverlay } from './MenuOverlay'
import { FaBarsStaggered} from 'react-icons/fa6'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const linkItems=[
    {name:'Contact Me', path: '/contact'},
    {name:'Projects', path:'/projects'},
    {name:'About me', path:'/about'}
]

export const NavBar = () => {
    const [ isOpen,setIsOpen] =React.useState(false)
    
  return (
    <nav className=' z-50 p-8 text-white fixed top-0 left-0 right-0 bg-slate-900 bg-opacity-90'>
        <div className=' flex flex-wrap items-center justify-between'>
            <Link to={'/'} className=' font-bold text-3xl'>
                Logo
            </Link>
            <div className=' block md:hidden '>
                {isOpen ?
                 <AiOutlineCloseSquare  className=' text-5xl' onClick={()=>(setIsOpen(false))}/>
                 
                 : <FaBarsStaggered className=' text-3xl' onClick={()=>{setIsOpen(true)}}/>}
            </div>
            <div className=' hidden md:block'>
                <ul className=' flex flex-row space-x-8'>
                    {linkItems.map((item, index)=>(
                    
                        <li key={index}>
                            <NavLinks href={item.path} name={item.name}/>
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
        {isOpen ? <MenuOverlay links={linkItems}/> : null}
    </nav>
  )
}
