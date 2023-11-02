import React,{ useRef} from 'react'
import { BsGithub,BsTwitter,BsMedium} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export const EmailSection = () => {

  const form = useRef();

  const handleSubmit = (event)=>{
      event.preventDefault();
      emailjs.sendForm( 'service_dqxqmpc' ,'template_x9gj34i' , form.current, 'nDmRFN6-76YWClrOJ')
      .then((result) => {
          console.log(result.text);
          console.log('sent')
      }, (error) => {
          console.log(error.text);
      });

      

  }
  return (
    <section className=' flex flex-col md:flex-row justify-between py-24 relative'>
      <div className=' bg-gradient-radial from-green-700 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-7 transform -translate-x-1/2 '>{' '}</div>
      <div className=' w-full md:w-1/2 pr-10'>
        <h1 className=' text-3xl font-bold text-white'>Contact Me</h1>
        <p className='  py-3 text-base text-gray-400'>
          I&apos;m currently loooking for new
          oppoturnities.My inbox is always open.Whether you want to reach out or just
          say hi, i&apos;ll get back to you.
        </p>
        <div className=' text-white text-2xl flex items-center w-1/2 justify-between'>
          <Link href={'https://github.com/WilsonTomisin'}>
            <BsGithub/>
          </Link>
          <Link href={`https://twitter.com/WilsonTomisin`}>
            <BsTwitter/>
          </Link>
          <Link href={`https://twitter.com/WilsonTomisin`}>
            <BsMedium/>
          </Link>
        </div>
      </div>
      <div className=' w-full md:w-1/2 py-20 md:py-0'>
        <form ref={form} onSubmit={handleSubmit} className=' text-white flex flex-col gap-4'>
            <div className=' mb-5'>
              <label htmlFor="userName" className=' font-semibold'>Name</label>
              <br/>
              <br />
              <input type="text" name='userName' placeholder='your name' className=' px-2 py-1 w-full bg-slate-700 border-2 border-slate-500'/>
            </div>
            <div className=' mb-5'>
              <label htmlFor="email" className=' font-semibold'>Email address</label>
              <br/>
              <br/>
              <input type="email" name="email" placeholder='enter email address' className=' px-2 py-1 bg-slate-700 w-full border-2 border-slate-500'/>
            </div> 
            <div className=' mb-5'>
              <label htmlFor="subject" className=' font-semibold'>Subject</label>
              <br/>
              <br />
              <input type="text" name='subject' placeholder='To say hello?' className=' px-2 py-1 w-full bg-slate-700 border-2 border-slate-500'/>
            </div>
            <div>
              <label htmlFor="message" className=' font-semibold'>Message</label>
              <br />
              <br />
              <textarea name="message" rows="10" placeholder='send a message....' className=' w-full p-4  bg-slate-700 border-2 border-slate-500' ></textarea>
            </div>
            <div>
              <button type='submit' className=' w-full px-4 py-2 bg-green-500 rounded-lg'>Send message!</button>
            </div>
        </form>
      </div>
    </section>
  )
}
