'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.01, // Percentage of the element that needs to be visible to trigger the animation
    });

    const skills = ['HTML', 'CSS', 'Java Script', 'Node.js', 'MongoDB,', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'GitHub', 'Figma', 'Framer Motion', 'React Query']
    return (
        <div className='min-h-[80vh] flex flex-col gap-6 md:gap-16 justify-center items-center'>
            <h2 className='text-transparent text-6xl font-bold bg-clip-text bg-gradient-to-tr from-pink-400 to-cyan-300 '>My skills:</h2>
            <ul className='flex flex-wrap w-[70%] gap-4  justify-center items-center mx-auto'>
                {skills.map((skill, index) => {
                    return (
                        <motion.li
                            ref={ref}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                            transition={{ delay: index / 10, type: 'spring' }}
                            key={index} className='px-4 py-2 bg-gray-50 border border-gray-300 rounded hover:bg-gray-200 duration-300 cursor-pointer'>{skill}</motion.li>
                    )

                })}

            </ul>
        </div>
    )
}

export default Skills