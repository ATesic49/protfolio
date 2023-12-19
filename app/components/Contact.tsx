import { Asap_Condensed } from 'next/font/google'
import React from 'react'

function Contact() {
    return (
        <section className='relative z-10 overflow-hidden display flex flex-col py-10 justify-center items-center  md:py-24 gap-6'  >

            <div className='absolute z-[-1] h-[125%] w-[125%] top-0 left-0 rotate-12 bg-gradient-to-br  from-cyan-300 to-pink-400 blur-2xl  backdrop-blur-xl opacity-80'>
            </div>
            <h2 className='text-2xl md:text-6xl font-extrabold  text-neutral-800'>Kontakt:</h2>
            <p className='text-sm text-center md:text-left md:text-lg text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form action="" className=' tracking-wide grid grid-cols-2 gap-6 w-2/3 max-w-[40em]'>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <label className='font-bold  text-xs md:text-base'>Name:</label>
                    <input type="text" className='w-full p-2 rounded border border-neutral-200 focus-visible:outline-none text-xs md:text-sm ' />
                </div>
                <div className='flex flex-col justify-center items-start gap-2'>
                    <label className='font-bold  text-xs md:text-base '>Prezime:</label>
                    <input type="text" className='w-full p-2 rounded border border-neutral-200 focus-visible:outline-none text-xs md:text-sm' />
                </div>
                <div className='col-span-2 flex flex-col justify-center items-start gap-2'>
                    <label className='font-bold  text-xs md:text-base'>Email:</label>
                    <input type="text" className='w-full p-2 rounded border border-neutral-200 focus-visible:outline-none text-xs md:text-sm' />
                </div>
                <div className='col-span-2 flex flex-col justify-center items-start gap-2'>
                    <label className='font-bold   text-xs md:text-base'>Broj Telefona:</label>
                    <input type="text" className="w-full p-2 relative  rounded border border-neutral-200 focus-visible:outline-none text-xs md:text-sm" />
                </div>
                <div className='col-span-2 flex flex-col justify-center items-start gap-2'>
                    <label className='font-bold  text-xs md:text-base '>Poruka:</label>
                    <textarea className="w-full min-h-[10em] p-2 relative  rounded border border-neutral-200 focus-visible:outline-none text-xs md:text-sm" ></textarea>
                </div>
                <div className='col-span-2 flex flex-col justify-center items-end gap-2'>
                    <button className='px-4 py-2 rounded text-sm md:text-base  active:scale-95 duration-50 mx-5 bg-white text-neutral-850 font-bold'>Pošalji</button>
                </div>

            </form>






        </section>
    )
}

export default Contact

