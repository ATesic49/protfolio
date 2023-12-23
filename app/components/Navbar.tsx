'use client'
import Image from 'next/image'
import React from 'react'
import { Link } from 'react-scroll'

function Navbar() {
    return (
        <div
            className="fixed z-[999]  w-full border border-b-gray-300 backdrop-blur-lg bg-opacity-20  bg-gradient-to-tr from-pink-50 to bg-50" >
            <nav className='flex px-  py-2 md:py-4 px-2 md:px-8 justify-start items-center gap-6 md:gap-16'>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 60 60" xmlSpace="preserve" className="w-10">
                    <g>
                        <linearGradient id="a" x1="30" x2="30" y1="7" y2="53" gradientUnits="userSpaceOnUse">
                            <stop stopOpacity="1" stopColor="#ed2bb9" offset="0"></stop>
                            <stop stopOpacity="1" stopColor="#37d8ff" offset="1"></stop>
                        </linearGradient>
                        <g fill="url(#a)">
                            <path d="M14 44a2.976 2.976 0 0 1-2.122-.88L.879 32.121C.313 31.557 0 30.803 0 30s.313-1.557.88-2.122l10.999-10.999A2.975 2.975 0 0 1 14 16c1.654 0 3 1.346 3 3 0 .803-.313 1.557-.88 2.122L7.242 30l8.879 8.879c.567.564.879 1.318.879 2.121 0 1.654-1.346 3-3 3zM46 45c-1.654 0-3-1.346-3-3 0-.803.313-1.557.88-2.122L52.758 31l-8.879-8.879A2.982 2.982 0 0 1 43 20c0-1.654 1.346-3 3-3 .803 0 1.557.313 2.122.88l10.999 10.999c.567.566.879 1.32.879 2.121 0 .803-.313 1.557-.88 2.122L48.121 44.121A2.971 2.971 0 0 1 46 45zM21 53a3.004 3.004 0 0 1-2.77-4.155L36.231 8.843A2.997 2.997 0 0 1 39 7a3.004 3.004 0 0 1 2.77 4.155L23.769 51.157A2.997 2.997 0 0 1 21 53z" fill="" opacity="1"></path>
                        </g>
                    </g>
                </svg>

                <Link to='Pocetna'
                    smooth={true}
                    offset={0}
                    duration={500}
                    className='text-sm  cursor-pointer md:text-lg text-gray-600 hover:text-black duration-200   '>Pocetna</Link>




                <Link to='Projekti'
                    smooth={true}
                    offset={0}
                    duration={500}
                    className='text-sm  md:text-lg cursor-pointer text-gray-600 hover:text-black duration-200   '>Projekti</Link>

                <Link to='Kontakt'
                    smooth={true}
                    offset={0}
                    duration={500}
                    className='text-sm  md:text-lg text-gray-600 cursor-pointer hover:text-black duration-200   '>Kontakt</Link>




            </nav>




        </div >



    )
}


//

export default Navbar