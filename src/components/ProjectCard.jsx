import React from 'react'
import { BsCodeSlash,BsEye} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export const ProjectCard = ({url,title,description,stack, key, liveURL,repo}) => {
    // let newKey = key/50
  return (
    <div  key={key} className=' h-auto w-auto cursor-pointer text-white bg-slate-900 rounded-lg duration-500 transition-all ease-in-out hover:scale-95 '>
        <div className=' h-auto w-full'>
            <img src={url} alt={` ${title} image`}  className=' w-full  rounded-lg'/>
        </div>
        <div className=' p-4  h-2/5 w-full'>
            <h1 className=' text-2xl font-semibold'>{title}</h1>
            
            <p className=' py-3 text-sm text-gray-400'>
                {description}
            </p>
            <div className=' py-2'>
                {stack.map(item=>(
                    <div className=' items-center  flex md:inline-block mb-2 md:mb-0 py-2 
                        px-3 mr-2 text-slate-500 bg-slate-950 
                        rounded-xl duration-700 font-semibold 
                        transition-all ease-in-out hover:bg-white
                        hover:text-slate-950 hover:scale-95'>
                        <span>{item.icon}</span>
                        <span className=''> {item.name} </span>
                    </div>
                ))}
            </div>
            <div className=' flex items-center justify-center text-xl font-bold '>
                <Link to={liveURL} className=' mr-6 border-4 p-2 border-white transition-all duration-700 ease-in-out hover:bg-green-500 hover:border-green-600 rounded-full'>
                    <BsEye/>
                </Link>
                <Link to={repo} className=' border-4 p-2 border-white transition-all duration-700 ease-in-out hover:bg-green-500 hover:border-green-600 rounded-full'>
                    <BsCodeSlash/>
                </Link>


            </div>
        </div>
    </div>
  )
}
