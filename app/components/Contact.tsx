'use client'
import { Asap_Condensed } from 'next/font/google'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import axios from 'axios'
interface State {
    ime: string,
    preizme: string,
    email: string,
    brojTelefona: string,
    poruka: string
}


function Contact() {
    const [state, setState] = useState<State | {}>({})
    const [success, setSuccess] = useState(false)
    setTimeout(() => {
        setSuccess(false)
    }, 5000);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)

        try {
            const res = await axios.post('/api/email', { ...state })
            console.log(res)
            if (res.status === 200) {
                setState({});
                (e.target as HTMLFormElement).reset()
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 3000);
            }
        } catch (e) {
            console.log(e)
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    return (
        <>
            <AnimatePresence >
                {success ? <motion.div
                    onClick={() => setSuccess(false)}
                    initial={{ opacity: 0, y: -100, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    transition={{ duration: 0.15, delay: 0.25, type: 'tween', bounce: 0.75 }}
                    exit={{ opacity: 0, y: -100, x: '-50%' }}

                    className={`${success}  hover:scale-[102.5%]  top-[2em] duration-300 cursor-pointer bg-opacity-0 fixed border border-green-400 flex justify-center items center left-1/2 px-4 py-2 rounded-2xl bg-gradient-to-tr from-green-100 to-green-200  -translate-x-1/2 w-fit z-[8000]`}>
                    <p className='text-lg  tracking-wide'>Uspešno ste poslali email!</p>
                </motion.div> : null}
            </AnimatePresence >

            <section id='Kontakt' className='relative z-10 overflow-hidden display flex flex-col py-10 justify-center items-center  md:py-24 gap-6'  >

                <div className='absolute z-[-1] h-[125%] w-[125%] top-0 left-0 rotate-12 bg-gradient-to-br  from-cyan-300 to-pink-400 blur-2xl  backdrop-blur-xl opacity-80'>
                </div>
                <h2 className='text-2xl md:text-6xl font-extrabold  text-neutral-800'>Kontakt:</h2>
                <p className='text-sm text-center md:text-left md:text-lg text-neutral-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <form onSubmit={(e) => handleSubmit(e)} className=' tracking-wide grid grid-cols-2 gap-6 w-2/3 max-w-[40em]'>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <label className='font-bold  text-xs md:text-base'>Name:</label>
                        <input name='ime' onChange={(e) => handleChange(e)} type="text" className='w-full p-2 rounded border border-neutral-200 focus-visible:outline-none text-xs md:text-sm ' />
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2'>
                        <label className='font-bold  text-xs md:text-base '>Prezime:</label>
                        <input name='prezime' onChange={(e) => handleChange(e)} type="text" className='w-full p-2 rounded border border-neutral-200 focus-visible:outline-none text-xs md:text-sm' />
                    </div>
                    <div className='col-span-2 flex flex-col justify-center items-start gap-2'>
                        <label className='font-bold  text-xs md:text-base'>Email:</label>
                        <input name='email' onChange={(e) => handleChange(e)} type="text" className='w-full p-2 rounded border border-neutral-200 focus-visible:outline-none text-xs md:text-sm' />
                    </div>
                    <div className='col-span-2 flex flex-col justify-center items-start gap-2'>
                        <label className='font-bold   text-xs md:text-base'>Broj Telefona:</label>
                        <input name='brojTelefona' onSubmit={() => alert('HAOS')} onChange={(e) => { handleChange(e) }} type="text" className="w-full p-2 relative  rounded border border-neutral-200 focus-visible:outline-none text-xs md:text-sm" />
                    </div>
                    <div className='col-span-2 flex flex-col justify-center items-start gap-2'>
                        <label className='font-bold  text-xs md:text-base '>Poruka:</label>
                        <textarea name='poruka' onChange={(e) => { handleChange(e) }} className="w-full min-h-[10em] p-2 relative  rounded border border-neutral-200 focus-visible:outline-none text-xs md:text-sm" ></textarea>
                    </div>
                    <div className='col-span-2 flex flex-col justify-center items-end gap-2'>
                        <button className='px-4 py-2 rounded text-sm md:text-base  active:scale-95 duration-50 mx-5 bg-white text-neutral-850 font-bold'>Pošalji</button>
                    </div>

                </form>






            </section>
        </>
    )
}

export default Contact

