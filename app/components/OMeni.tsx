import Image from 'next/image'
import React from 'react'
import Hero from '@/public/imgs/Hero.jpeg';
import Acalegenda from '@/public/imgs/acalegenda.jpg';


function OMeni() {
    return (
        <section title='oMeni' id='OMeni' className='min-h-[50vh] py-[5rem] md:px-0 px-[2em] bg-cyan-50 grid md:grid-cols-2 justify-center gap-10'  >

            <h2 className='text-5xl md:text-6xl font-bold   h-full  z-20 bg-clip-text text-transparent bg-gradient-to-tr  from-cyan-500 to-pink-400 text-left md:pl-16'>
                O meni
            </h2>
            <div className='md:block hidden'></div>
            {/* <div className=' flex justify-around items-center'> */}

            <p className='text-gray-500 md:pl-10 text-sm  md:text-lg text-left my-auto '>
                Moje ime je Aleksa Tesic, i mogu da se pohvalim sa 2 godine iskustva u izradi web sajtova.
                <span className='h-[.5em] block'> </span>
                Radio sam na raznim projektima, od malih sajtova za lokalne firme, do velikih sajtova za velike kompanije.
                <span className='h-[.5em] block'> </span>

                Imam iskustva u radu sa React-om, Next.js-om, TailwindCSS-om, kao i sa Node.js-om i Express-om.

                Pored toga, volim da ucim, da se usavrsavam i da radim na sebi.


            </p>

            <Image src={Acalegenda} className=' w-3/4 sm:w-2/3 mx-auto my-auto rounded brightness-110 shadow-2xl' alt=''></Image>




            {/* </div> */}

        </section>

    )
}

export default OMeni