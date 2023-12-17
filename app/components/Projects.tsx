'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import Tebra from '@/public/imgs/projects.jpg'
import Caliper from '@/public/imgs/project2.jpg'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
function Projects() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0 -2', '1.33 1']

    })
    const progress = useTransform(scrollYProgress, [0, 1], [0.25, 1])
    return (
        <div className='flex flex-col gap-20 justify-center items-center py-24'

        >
            <h2 className='text-4xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-tr from-pink-200 to-cyan-300'>Portfolio:</h2>
            <motion.div className='group hover:bg-gray-200 duration-200 rounded-xl border border-netral-200 overflow-hidden   gap-10 grid grid-cols-3 bg-gray-100  w-8/12'
                ref={ref}
                style={
                    {
                        scale: progress,
                        opacity: progress
                    }
                }
            >
                <div


                    className=' flex py-10 gap-4 flex-col col-span-2 justify-center px-4 md:px-10  '>
                    <div className='flex gap-2 flex-col'>
                        <h3 className='text-xl md:text-4xl font-extrabold'>
                            Tebra
                        </h3>
                        <p className='text-gray-400 leading-2 font-extralight'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius minus tenetur doloremque alias quibusdam quo vero aspernatur dolor vitae ut.
                        </p>

                    </div>
                    <ul className='flex justify-start flex-wrap gap-2'>
                        <li className='bg-neutral-800 text-neutral-200 text-sm  px-2 py-1 rounded-xl'>JavaScript</li>
                        <li className='bg-neutral-800 text-neutral-200 text-sm  px-2 py-1 rounded-xl'>React.js</li>
                        <li className='bg-neutral-800 text-neutral-200 text-sm  px-2 py-1 rounded-xl'>CSS</li>
                        <li className='bg-neutral-800 text-neutral-200 text-sm  px-2 py-1 rounded-xl'>Node.js</li>
                        <li className='bg-neutral-800 text-neutral-200 text-sm  px-2 py-1 rounded-xl'>Git</li>

                    </ul>

                </div>
                <div>
                    <Image alt='0' src={Tebra} className='group-hover:-translate-x-3 duration-200 group-hover:translate-y-3 
                    
                    group-hover:scale-105
                    group-hover:-rotate-3 shadow-xl rounded-xl border-t border-l border-b border-gray-00 object-cover object-left h-full m-4'></Image>
                </div>
            </motion.div>
            <motion.div className='group hover:bg-gray-200 duration-200  border border-netral-200 rounded-xl overflow-hidden   gap-10 grid grid-cols-3 bg-gray-100  w-8/12'
                ref={ref}
                style={
                    {
                        scale: progress,
                        opacity: progress
                    }
                }
            >
                <div className='flex py-10 gap-4 flex-col col-span-2 justify-center px-4 md:px-10  '>
                    <div className='flex gap-2 flex-col'>
                        <h3 className='text-xl md:text-4xl font-extrabold'>
                            Caliper
                        </h3>
                        <p className='text-gray-400 leading-2 font-extralight'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius minus tenetur doloremque alias quibusdam quo vero aspernatur dolor vitae ut.
                        </p>

                    </div>
                    <ul className='flex justify-start flex-wrap gap-2'>
                        <li className='bg-neutral-800 text-neutral-200 text-sm  px-2 py-1 rounded-xl'>JavaScript</li>
                        <li className='bg-neutral-800 text-neutral-200 text-sm  px-2 py-1 rounded-xl'>React.js</li>
                        <li className='bg-neutral-800 text-neutral-200 text-sm  px-2 py-1 rounded-xl'>CSS</li>
                        <li className='bg-neutral-800 text-neutral-200 text-sm  px-2 py-1 rounded-xl'>Node.js</li>
                        <li className='bg-neutral-800 text-neutral-200 text-sm  px-2 py-1 rounded-xl'>Git</li>

                    </ul>

                </div>
                <Image alt='0' src={Caliper} className=' shadow-xl rounded-l border-t border-l border-b border-gray-00 object-cover object-left h-full m-4 group-hover:-translate-x-3 duration-200 group-hover:translate-y-3 
                    
                    group-hover:scale-105
                    group-hover:-rotate-3'></Image>
            </motion.div>
        </div >
    )
}

export default Projects