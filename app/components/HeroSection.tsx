'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Hero from '@/public/imgs/Hero.jpeg';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
const HeroSection: React.FC = () => {
    const [currentUrl, setUrl] = useState('');
    useEffect(() => {
        setUrl(window.location.href + 'CV/Aleksa_Tesic_CV.docx');
    }, []);

    const downloadFileAtURL = (url: string) => {
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.download = 'Aleksa_Tesic_CV.docx';
        aTag.click();
        aTag.remove();

    }
    return (
        <div className='min-h-[100vh] pt-20 md:pt-0 overflow-hidden items-center justify-center relative'>
            <Image alt='' src={Hero} className='absolute right-0 h-full w-auto brightness-75 rounded-lg' priority></Image>
            <div className='bg-white z-10 flex-col w-fit flex gap-4 relative h-[100vh] md:pl-10  justify-center items-center md:items-start after:absolute after:top-[-25%] after:left-[75%] after:h-[150%] after:bg-white after:w-[20vw] after:rotate-12 after:z-[-1] md:px-0 px-[2em]'>
                <h1 className='text-4xl md:text-6xl text-transparent bg-clip-text font-extrabold leading-[130%] bg-gradient-to-tr from-cyan-400 to-pink-400  max-w-[12em] md:max-w-[10em] w-fit'>
                    Data to enrich your online business.
                </h1>
                <p className='max-w-[25em]  font-light text-gray-400  text-sm md:text-lg leading-relaxed w-fit ' >Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={{ opacity: 1, x: 0 }}
                    className='flex gap-6 py-2 justify-center flex-row-reverse items-center p'>
                    <button
                        onClick={() => downloadFileAtURL(currentUrl)}
                        className='bg-cyan-900 text-xs md:text-sm text-white rounded px-4 py-2 hover:bg-cyan-700
                         duration-200 pr-2
                         relative z-0 after:z-[-1] overflow-hidden
                          after:absolute after:top-1/2 after:-translate-x-1/2 after:rounded-full hover:after:w-[125%] after:w-2 after:aspect-square  after:-translate-y-1/2 after:left-1/2  hover:after:bg-cyan-300 after:duration-500 after:transition-all
                         '>Moj CV
                        <svg className='w-6 h-6 inline m-0 invert-[100%] pb-2' width={20} height={20} viewBox="0 0 24 24">
                            <g>
                                <path d="M16.004 9.414L7.397 18.021 5.983 16.607 14.589 8H7.004V6h11v11h-2z" ></path>
                            </g>
                        </svg>

                    </button>
                    <button className='bg-white text-cyan-500  rounded-md px-4 py-2 hover:bg-cyan-50'>Learn More</button>

                </motion.div>
            </div>

        </div>
    );
};

export default HeroSection;
