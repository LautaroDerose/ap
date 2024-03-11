'use client'
import React, { useRef, useState } from 'react';
import { HiMail } from 'react-icons/hi';
import { FaPhoneSquareAlt, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Form() {
  const form = useRef();
  const [emailMatch, setEmailMatch] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const confirmEmail = form.current.confirm_email.value;
    const message = form.current.message.value;

    if (!name || !email || !confirmEmail || !message) {
      alert('Por favor complete todos los campos.');
      return;
    }

    if (email !== confirmEmail) {
      alert('Los emails no coinciden. Por favor verifique los campos.');
      setEmailMatch(false);
      return;
    }

    // Lógica para enviar el email
    // Esto puede ser un servicio de email como EmailJS o cualquier otro método que prefieras

    form.current.reset();
    setEmailMatch(true);
    setIsFormSubmitted(true);
  };

  return (
    <div id="">
      <h1 className='flex items-center justify-center p-4 mt-4 text-4xl font-bold '>Contáctanos</h1>
      <div className='bg-black  h-full md:h-[40vh] p-4 mx-auto flex items-center justify-center my-4 '>
        <div className='w-[100vw] flex items-center justify-center gap-8 '>
          <form
            className=' h-[20%] mx-auto my-auto md:p-0'
            ref={form}
            onSubmit={sendEmail}
          >
            <div className='flex w-[1000px] justify-center flex-wrap gap-4 '>
              <div className=' w-[100%] md:w-[45%] flex flex-col '>
                <input
                  className='w-full my-1 p-2 text-md text-slate-800 border-2 border-white bg-transparent outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='name'
                  type='text'
                  name='user_name'
                  placeholder='Ingrese su nombre'
                />
                <input 
                  id='phone'
                  type="text" 
                  name="user_phone" 
                  placeholder='Numero de Telefono' 
                  className='w-full my-1 p-2  text-md text-slate-800 border-2 border-white bg-transparent outline-none hover:-translate-y-1 focus:shadow-md duration-300' 
                />
                <input
                  className='w-full my-1 p-2 text-md text-slate-800 border-2 border-white bg-transparent outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='email'
                  type='email'
                  name='user_email'
                  placeholder='Ingrese su email de contacto'
                />
                <input
                  className={`w-full my-1 p-2 text-md border-2 border-white bg-transparent outline-none hover:-translate-y-1 duration-300 ${emailMatch ? '' : 'border-red-500'
                    }`}
                  id='confirm_email'
                  type='email'
                  name='confirm_email'
                  placeholder='Confirme su email'
                  onChange={() => setEmailMatch(true)}
                />
              </div>
              <div className=' w-[100%] md:w-[45%] '>
                <textarea
                  className='w-full min-h-[100px] h-full p-2 text-md text-slate-800 border-2 border-white bg-transparent resize-none outline-none hover:-translate-y-1 focus:shadow-md duration-300'
                  id='message'
                  name='message'
                  placeholder='¿Cuál es su consulta?'
                />
              </div>
              <input
                className='bg-white font-medium hover:font-extrabold hover:shadow-inherit  w-[full] md:w-[92%] text-center  py-3 text-black  duration-300'
                type='submit'
                value='Enviar'
              />
            </div>
          </form>
        </div>
      </div>
      <div className=' w-full flex flex-col lg:flex-row items-center gap-2 justify-between  lg:px-40 py-4 bg-gray-500'>
        <div className="flex gap-2 items-center">
          <span className="justify-center block text-base mb-2 text-palette1">
            <HiMail className="flex justify-center items-center text-3xl text-[#cccccc]"/>
          </span>
          <span href="#" className="justify-center block text-base mb-2 text-[#cccccc] font-bold">apres.productora@gmail.com</span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="justify-center block text-base mb-2 text-palette1">
            <FaPhoneSquareAlt className="flex justify-center items-center text-3xl text-[#cccccc]"/>
          </span>
          <span href="#" className="justify-center block text-base mb-2 text-[#cccccc] font-bold">+549 0000000</span>
        </div>
        <div className="flex gap-2 items-center text-[#cccccc] hover:text-purple-400 ">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/apres.productora/" className="justify-center block md:text-base text-xs mb-2   ">
            <i><FaInstagram className="flex justify-center items-center text-3xl"/></i>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/apres.productora/" className="justify-center block md:text-base text-xs mb-2  font-bold underline">@apres.productora</a>
        </div>         
      </div>
    </div>
  )
}

