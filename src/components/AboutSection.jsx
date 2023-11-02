import React,{ useState} from 'react'
import portfolio from '../assets/portfolio.jpeg'


const tabs = [
  {name:'Skills',
   content:[
    <ul>
      <li className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-semibold text-sm hover:bg-white px-4 py-1 rounded-lg text-slate-950'>HTML</li>
      <li className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-semibold text-sm hover:bg-white px-4 py-1 rounded-lg text-slate-950'>CSS</li>
      <li className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-semibold text-sm hover:bg-white px-4 py-1 rounded-lg text-slate-950'>Javascript</li>
      <li className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-semibold text-sm hover:bg-white px-4 py-1 rounded-lg text-slate-950'>React Js</li>
      <li className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-semibold text-sm hover:bg-white px-4 py-1 rounded-lg text-slate-950'>Git and Github</li>
      <li className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-semibold text-sm hover:bg-white px-4 py-1 rounded-lg text-slate-950'>Framer motion</li>
      <li className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-semibold text-sm hover:bg-white px-4 py-1 rounded-lg text-slate-950'>Tailwind Css</li>
    </ul>
   ]},
  {name:'Education',
   content: [
      <ul className=' flex-1'>
        <li className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-semibold text-sm hover:bg-white px-4 py-1 rounded-lg text-slate-950'>Meta Frontend developer Certificate</li>
        <li className=' bg-green-500 cursor-pointer duration-100 transition-colors ease-in-out mb-3 font-semibold text-sm hover:bg-white px-4 py-1 rounded-lg text-slate-950'>Complete Web developer course by Kalob Taulin</li>
      </ul>
   ]

  },
  { name:'Experience',
    content:[
      <ul>
        <li className=' bg-green-500 cursor-pointer mb-3 font-semibold text-sm duration-100 transition-colors ease-in-out  hover:bg-white px-4 py-1 rounded-lg text-slate-950'>HNG intern 2023</li>
      </ul>
    ]
  }
]



export const AboutSection = () => {
  const [tabButton, setTabButton] = useState(null)
  

  React.useEffect(()=>{
      console.log(tabButton);
  },[tabButton])
  return (
    <section className=' flex flex-col md:flex-row  justify-between py-32'>
        <div className=' w-full md:w-1/2'>
            <img src={portfolio} alt='my-porfile-picture'  className=' h-fit w-full md:w-4/6 duration-500 transition-all ease-in-out rounded-lg hover:scale-95'/>
        </div>
        <div className=' w-full md:w-1/2'>
          <h2 className=' my-4 text-3xl font-semibold text-white text-left '>About Me</h2>
            <p className=' text-white text-sm leading-9 text-left md:text-lg'>
              Frontend development is where my creative and analytical sides converge.
              I find joy in crafting visually appealing and functional websites 
              that not only meet the user's needs but also leave a lasting impression.
              Whether it's coding responsive layouts, enhancing user interfaces
              with smooth animations, or diving into the world of web accessibility, 
              I'm always eager to learn and grow.This portfolio is a showcase of my projects,
              skills, and dedication to my craft. Take a tour through the projects I've worked on .
            </p>
            <div className=' w-1/2 flex flex-row  mt-8  text-slate-600'>

              {
                tabs.map((tab, index)=>{
                  const active = tab.name === tabButton
                  const activeBtn = active ? ' text-white border-b-2 border-green-500 ' : ' '
                  return(
                      <div className=' flex flex-col' key={index}>
                          <button value={tab.name}
                          onClick={(e)=>setTabButton(e.currentTarget.value)}
                          className={`mr-3 font-semibold hover:text-green-500 ${activeBtn}`}
                          >
                          {tab.name}
                          </button>
                          <div className=' mt-3 '>
                            {active && tab.content}
                          </div>
                      </div>
                  )
                })
              }
             
            </div>
        </div>
    </section>
  )
}
