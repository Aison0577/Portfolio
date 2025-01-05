import { faMailBulk, faMessage, faPerson } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, InputLabel, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Contacts() {

  const key =  import.meta.env.EMAIL_API_PUBLIC_KEY || 'q23tBEFcuILMhpi-i';
  
  if (!key) {
    console.error("Public key is not defined");
    toast.error("Error: Public key is missing!");
    return;
  }

  const navigate = useNavigate()

  const form = useRef();

  const [theme,settheme] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_2nbnyrf', 'template_0bltyeh', form.current, {
        publicKey: key,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent')
          navigate('/')
        },
        (error) => {
          console.log('FAILED...', error);
          toast.error(`${error.text}`)
        },
      );
  };

  useEffect(()=>{
    settheme(sessionStorage.getItem('theme'))
  },[])


  return (
    <div className='p-4 wit'>
      <h1 className='text-2xl font-bold mb-5'>Love to hear From you,<br />
        Get in touch👋
      </h1>

      <form action="" ref={form} onSubmit={sendEmail}>

        <div className='p-3 rounded-2xl bg-gray-200 dark:bg-gray-800/45 mb-4'>
          <label htmlFor="name" className='text-sm'>Name</label>
          <br />
          <div className='flex items-end'>
            <input type="text" id='name' name='name' className='w-full bg-transparent outline-none py-2' placeholder='Enter your name*'/>
            <FontAwesomeIcon icon={faPerson} className='text-gray-500'/>
          </div>
        </div>
        <div className='p-3 rounded-2xl bg-gray-200 dark:bg-gray-800/45 mb-4'>
          <label htmlFor="Email" className='text-sm'>Email</label>
          <br />
          <div className='flex items-end'>
            <input type="email" id='email' name='email'  className='w-full bg-transparent outline-none py-2' placeholder='Enter your email*'/>
            <FontAwesomeIcon icon={faMailBulk} className='text-gray-500'/>
          </div>
        </div>
        <div className='p-3 rounded-2xl bg-gray-200 dark:bg-gray-800/45 mb-4'>
          <label htmlFor="" className='text-sm mb-2'>Message</label>
          <br />
          <div className='flex items-end gap-2'>
            {/* <textarea type="text" id='name' className='w-full bg-transparent outline-none py-2' placeholder='Enter your message*'/> */}
            <textarea
              name='message'
              className="w-full flex-1 h-40 py-4  rounded-lg outline-none bg-transparent placeholder-gray-400 resize-none"
              placeholder="Write your message here..."
            ></textarea>
            <FontAwesomeIcon icon={faMessage} className='text-gray-500'/>
          </div>
        </div>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{
            py:2
          }}
        >
          Connect
        </Button>
      </form>
    </div>
  )
}
