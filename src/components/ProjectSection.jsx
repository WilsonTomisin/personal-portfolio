import React from 'react';
import { ProjectCard } from './ProjectCard';
import image1 from '../assets/project1.jpeg' ;
import image2 from '../assets/project2.jpeg';
import image3 from '../assets/project3.jpeg';
import image4 from '../assets/project4.jpeg';
import image5 from '../assets/project5.jpeg';
import image6 from '../assets/project6.jpeg';
import image7 from '../assets/project7.png';
import image8 from '../assets/project8.png'
import { SiJavascript,  SiMui} from 'react-icons/si';
import {AiFillHtml5} from 'react-icons/ai'
import { BiLogoCss3 ,BiLogoTailwindCss,BiLogoReact, BiLogoFirebase} from 'react-icons/bi';
import { SiNextdotjs } from "react-icons/si";






export const ProjectSection = () => {
    
    const Project_Data = [
        {
            id:100,
            path: image8,
            title: 'Access medical supplies',
            liveURL:'https://accessmedsupplies.com',
            repo:'https://github.com/WilsonTomisin',
            description: 'An online store for medical products. ',
            stack:[
                {name:'Next js', icon:<SiNextdotjs className=' text-blue-600 text-xl '/>},
                {name:'Tailwindcss',icon:<BiLogoTailwindCss className=' text-blue-300 text-xl'/>},
                
            ]
        },
        {
            id:200,
            path: image7,
            title: 'Kuttinedge resources ',
            liveURL:'https://kuttinedgeresources.com/',
            repo:'https://github.com/WilsonTomisin',
            description: 'A Landing page for a school visa agency',
            stack:[
                {name:'React', icon:<BiLogoReact className=' text-blue-600 text-xl '/>},
                {name:'Tailwindcss',icon:<BiLogoTailwindCss className=' text-blue-300 text-xl'/>},
                
            ]
        },
        {
            id:300,
            path: image1,
            title: 'Simple Bookmark manager ',
            liveURL:'https://wilsontomisin-bookmark-page.netlify.app/',
            repo:'https://github.com/WilsonTomisin/bookmark-landing-page',
            description: 'A pixel perfect landing page for a bookmark extension.',
            stack:[
                {name:'React', icon:<BiLogoReact className=' text-blue-600 text-xl '/>},
                {name:'Tailwindcss',icon:<BiLogoTailwindCss className=' text-blue-300 text-xl'/>},
                
            ]
        },
        {
            id:400,
            path: image2,
            title: ' Photo Gallery',
            liveURL:'https://wilsontomisin-imagegallery.netlify.app/',
            repo:'https://github.com/WilsonTomisin/hng-task3',
            description: 'An online photo gallery website that requires users to sign in using firebase Authentication to access the gallery which has a drag and drop feature. ',
            stack:[
                {name:'React', icon:<BiLogoReact className=' text-blue-600 text-xl '/>},
                {name:'Tailwindcss', icon:<BiLogoTailwindCss className=' text-blue-300 text-xl'/>},
                {name:'Firebase', icon:<BiLogoFirebase className=' text-orange-500 text-xl'/>}
            ]
        },
        {
            id:500,
            path: image3,
            title: ' Movie Box',
            liveURL:'https://wilsontomisin-moviebox.netlify.app/',
            repo:"https://github.com/WilsonTomisin/hng-task2",
            description: 'A movie search website that consumes an API from TMDB. It allows users to search for their favourite movies and watch the trailer for each movie. It also provides some information about the movie such as ratings,movie overview',
            stack:[
                {name:'React', icon:<BiLogoReact className=' text-blue-600 text-xl '/>},
                {name:'Tailwindcss', icon:<BiLogoTailwindCss className=' text-blue-300 text-xl'/>},
                
            ]
        },
        {
            id:600,
            path: image4,
            title: ' Youtube Clone',
            liveURL:'https://wilsontomisin-youtubeclone.netlify.app/',
            repo:"https://github.com/WilsonTomisin/youtube-clone",
            description: ' This clone uses an API from RapidAPI to display youtube videos and some video data such as:Like count and views. It also provides channel data also e.g,Number of subscribers. ',
            stack:[
                {name:'React', icon:<BiLogoReact className=' text-blue-600 text-xl '/>},
                {name:'CSS',icon:<BiLogoCss3 className=' text-blue-600 text-xl'/>},
                {name:'Material UI', icon:<SiMui className=' text-blue-600 text-xl'/>}
            ]
        },
        // {
        //     id:700,
        //     path: image5,
        //     title: 'Quiz Game',
        //     liveURL:'https://wilsontomisin.github.io/QuizGame/',
        //     repo:'https://github.com/WilsonTomisin/QuizGame',
        //     description: 'A general Knowlegde quiz that comes with some additional functionalities e.g time-lapse,automatic correction.',
        //     stack:[
        //         {name:'HTML', icon:<AiFillHtml5 className=' text-orange-800 text-xl'/>},
        //         {name:'CSS',icon:<BiLogoCss3 className=' text-blue-600 text-xl'/>},
        //         {name:'Javascript', icon:<SiJavascript className=' text-yellow-400 text-xl'/>}
        //     ]
        // },
        {
            id:800,
            path: image6,
            title: ' Todo App',
            liveURL:'https://wilsontomisin-todo-app.netlify.app/',
            repo:'https://github.com/WilsonTomisin/todo-app-challenge',
            description: 'A todo app that comes with some extra functionalities like a drag and drop feauture to reorder list items,a light and dark theme and more',
            stack:[
                {name:'React', icon:<BiLogoReact className=' text-blue-600 text-xl '/>},
                {name:'Tailwindcss',icon:<BiLogoTailwindCss className=' text-blue-300 text-xl'/>},
                
            ]
        }
    ]
  return (
    <div >
        <h1 className=' text-center text-4xl font-bold text-white mb-20'>My Projects</h1>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-5'>
            {Project_Data.map((project)=>{

                return(
                    <>
                        <ProjectCard url={project.path} title={ project.title}
                        description={project.description}
                        stack={project.stack}
                        liveURL={project.liveURL}
                        repo={project.repo}
                        key={project.id}
                        />
                    </>
                )
            })}
        </div>
        
    </div>
  )
}
