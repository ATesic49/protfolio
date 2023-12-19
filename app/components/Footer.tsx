import Link from 'next/link';
import React from 'react'

function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
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
                </div>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">©2024 All rights reserved —
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <Link href={''} className="text-gray-500">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </Link>


                    <Link href={''} className="ml-3 text-gray-500">
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </Link  >
                </span>
            </div>
        </footer>
    );
}

export default Footer;
