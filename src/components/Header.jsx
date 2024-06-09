import React from 'react'
import emoji from '../assets/29 29.png'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';



export const Header= () => {
  const downloadFile=()=>{
      // Create an anchor element dynamically
      const link = document.createElement('a');
      link.href = "../assets/resume.pdf";
      link.download = "resume.pdf";

      // Simulate a click on the anchor element to initiate download
      link.click();

  }
  return (
    <section className=' text-white flex flex-col md:flex-row justify-between py-[30px]'>
        <div className=' w-full md:w-1/2 text-center md:text-left '>
            <h1 className=' text-5xl md:text-6xl font-bold text-white  mb-4'>
                <span className=' 
                text-transparent 
                bg-clip-text bg-gradient-to-r
              from-green-500 via-blue-500 to-blue-950'>Hello, i&apos;m </span>
              <br />
                <TypeAnimation
                  sequence={[
                    'Wilson Oluwatomisin',
                    2000,
                    'a Web developer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  // style={{ fontSize: '2em', display: 'inline-block' }}
                  repeat={Infinity}
                />
            </h1>
            <p className=' text-gray-400 text-lg mb-6'>
            Hello, and thank you for visiting my portfolio website. 
            I'm  a passionate frontend developer 
            on a journey to turn ideas into interactive and user-friendly web experiences.
            </p>
            <div>
              <a href='mailto:tommywilson972@gmail.com' className=' bg-gradient-to-br from-green-500 via-blue-500 to-blue-950 px-6 py-3 rounded-full mr-4'>Hire Me</a>
              <button onClick={downloadFile} className=' bg-transparent text-white px-1 py-1 rounded-full bg-gradient-to-r
              from-green-500 via-blue-500 to-blue-950 hover:bg-gradient-to-tr '>
                <span className=' block bg-slate-950 rounded-full px-5 py-2 '>Download CV</span>
              </button>
            </div>
        </div>
        <div className=' rounded-full h-64 w-64 mx-auto mt-3 md:mt-0 md:mx-0 bg-slate-700 '>
            <img src={emoji} alt=" emoji character"  className=' w-64 h-64'/>
          
        </div>
    </section>
  )
}
