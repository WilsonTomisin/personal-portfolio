import React from 'react'
import { BsCodeSlash,BsEye} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export const ProjectCard = ({url,title,description,stack, key, liveURL,repo, isPublic}) => {
  return (
    <div  key={key} className=' h-[700px] md:h-[500px] min-w-[400px] cursor-pointer text-white bg-gradient-to-tr from-transparent to-slate-950 rounded-lg duration-500 transition-all ease-in-out hover:scale-95 '>
        <div className=' h-[40%] w-full'>
            <img src={url} alt={` ${title} image`}  className=' w-full h-full  rounded-lg'/>
        </div>
        <div className=' p-4  h-[60%] w-full flex flex-col  justify-between '>
            <h1 className=' text-2xl font-semibold'>{title}</h1>
            
            <p className=' py-3 text-sm text-gray-400'>
                {description}
            </p>
            <div className=' py-2 flex flex-col md:flex-row'>
                {stack.map(item=>(
                    <div className='flex flex-wrap md:flex-row items-center gap-2  mb-2 md:mb-0 py-2 
                        px-3 mr-2 text-white text-sm rounded-xl  duration-700  transition-all ease-in-out hover:bg-white
                        hover:text-slate-950 hover:scale-95'>
                        <span>{item.icon}</span>
                        <span className=''> {item.name} </span>
                    </div>
                ))}
            </div>
            <div className=' flex items-center gap-5 justify-center text-xs font-medium '>
                <Link to={liveURL} className=' flex items-center gap-3 bg-white text-slate-950 rounded-2xl px-7 py-2 transition-all duration-700 ease-in-out hover:bg-transparent hover:text-white hover:underline  '>
                    <span>view live</span>
                    <BsEye/>
                </Link>
                {
                    isPublic &&
                    <Link to={repo} className=' flex items-center gap-3 bg-white text-slate-950 rounded-2xl  px-7 py-2  transition-all duration-700 ease-in-out hover:bg-transparent hover:text-white hover:underline'>
                        <span>source code</span>
                        <BsCodeSlash/>
                    </Link>
                }


            </div>
        </div>
    </div>
  )
}
