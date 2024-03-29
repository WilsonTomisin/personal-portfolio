import React from 'react'
import NavLinks from './NavLinks'
import { MenuOverlay } from './MenuOverlay'
import { FaBarsStaggered} from 'react-icons/fa6'
import {AiOutlineCloseSquare} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion' ;
import './navbar.css' ;

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
                <motion.svg width="200" height="50" xmlns="http://www.w3.org/2000/motion.svg"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}>
                    <motion.text x="10" y="40" 
                    font-family="Arial" font-size="44" fill="white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        Wilson
                    </motion.text>
                </motion.svg>
            </Link>
            <div className=' block md:hidden '>
                {isOpen ?
                 <AiOutlineCloseSquare  className=' text-5xl' onClick={()=>(setIsOpen(false))}/>
                 
                 : <FaBarsStaggered className=' text-3xl' onClick={()=>{setIsOpen(true)}}/>}
            </div>
            <div className=' hidden md:block'>
                <ul className=' flex flex-row space-x-8'>
                    {linkItems.map((item, index)=>(
                    
                        <li key={index} className=' nav-items font-semibold'>
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
