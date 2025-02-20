import React from 'react';
import logo from '../assets/logo.png'

export const Footer = () => {
  return (
    <footer className=' h-full  border-t-2 border-dashed pb-7 text-white border-white'>
        <div className=' flex items-center justify-between  py-4 '>
            <span className=' text-3xl font-bold '>
              <img src={logo} alt="my logo" className=' h-14 w-14' />
            </span>
            <p className=' '>
                All Rights Reserved
            </p>
        </div>
        <div className=' text-center '>
          Copyright &copy;{new Date().getFullYear()}
        </div>
    </footer>
  )
}
