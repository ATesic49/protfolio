'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import Hero from '@/public/imgs/Hero.jpeg'

function Stats() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.1, // Percentage of the element that needs to be visible to trigger the animation
    });

    return (
        <div className='relative min-h-screen flex justify-center z-[-10] items-center py-20 '>
            <div className='absolute top-0 py-56 left-0 flex flex-col justify-center gap-16 items-start w-full h-full bg-indigo-950 -z-10 bg-opacity-80 '>
            </div>
            <Image src={Hero} alt='' fill objectFit='cover' className=' brightness-50 -z-20'></Image>
            <div className=' flex flex-col justify-center gap-10 md:gap-20 items-start w-full h-full  bg-opacity-80 '>
                <div className=' flex flex-col items-left mx-10 gap-10 justify-center'>
                    <h2 className='md:text-6xl font-extrabold max-w-[8em] text-4xl text-white'>Trusted by the lines of authors</h2>
                    <p className='text-gray-400  max-w-[30em]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident autem, fugit veritatis ducimus vel quasi consectetur.</p>
                </div>
                <div className='px-2 md:px-10  grid w-full gap-y-10 md:gap-0 grid-cols-2 md:grid-cols-4 '>

                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                        transition={{ delay: 0.25 }}

                        className='flex flex-col gap-6 align left  px-4 py-2 border-l  border-gray-400'>
                        <h3 className='text-2xl md:text-4xl text-white font-bold '>8,000+</h3>
                        <p className='text-xs    md:text-sm  text-gray-400 text-thin '>Creators on the platform</p>

                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                        transition={{ delay: 0.35 }}

                        className='flex flex-col gap-6 align left  px-4 py-2 border-l  border-gray-400'>
                        <h3 className='text-2xl md:text-4xl text-white font-bold '>8,000+</h3>
                        <p className='md:text-sm text-xs text-gray-400 text-thin '>Creators on the platform</p>

                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                        transition={{ delay: 0.45 }}

                        className='flex flex-col gap-6 align left  px-4 py-2 border-l  border-gray-400'>
                        <h3 className=' text-2xl md:text-4xl text-white font-bold '>8,000+</h3>
                        <p className=' text-xs md:text-sm text-gray-400 text-thin '>Creators on the platform</p>

                    </motion.div>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                        transition={{ delay: 0.55 }}

                        className='flex flex-col gap-6 align left  px-4 py-2 border-l  border-gray-400'>
                        <h3 className=' text-2xl md:text-4xl text-white font-bold '>8,000+</h3>
                        <p className='text-xs md:text-sm text-gray-400 text-thin '>Creators on the platform</p>

                    </motion.div>

                </div>
            </div>
        </div>
    )
}



export default Stats