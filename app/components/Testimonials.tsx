import React from 'react'
import AleksaCar from '@/public/imgs/acalegenda.jpg'
import Image from 'next/image'
function Testimonials() {
    return (
        <section className=' flex flex-col py-10 md:py-24 justify-center items-center gap-10  '>
            <div className='flex flex-col justify-center items-center gap-4  '>
                <h2 className=' text-2xl md:text-6xl  bg-clip-text font-extrabold text-transparent bg-gradient-to-tr from-pink-200 capitalize to-cyan-300 max-w-[10em] text-center '>Some fake testimonials</h2>
                <p className='text-gray-400'>To show off my skills</p>
            </div>
            <div className='grid md:w-10/12 w-11/12 gap-10 lg:grid-cols-3 '>

                <div className=' lg:row-span-2 flex flex-col md:justify-center items-start border border-gray-300 p-4 bg-gray-100  rounded-lg gap-4  justify-center bg-gradient-to-tr from-red-200 to-blue-100'>
                    <h3 className='text-2xl text-neutral-800 font-bold '>Najbolja stvar koju sam uradio</h3>
                    <p className="before:content-[',,'] after:text-xl before:text-xl after:content-[',,'] italic text-sm lg:text-base text-gray-600 font-light my-auto justify-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestias dolorum aspernatur.Ab Lorem ipsum dolor!
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium odio maiores quam provident nobis ratione tempore recusandae cum eligendi doloribus dolor ad fugiat, mollitia atque exercitationem. Enim natus earum ut.
                    </p>
                    <div className='mt-auto mb-4 ml-4 flex flex-col items-center  justify-center'>

                        <div className='relative h-12 w-12  mr-2 rounded-full overflow-hidden'>
                            <Image src={AleksaCar} quality={95} alt='Slika' fill={true} objectFit='cover'></Image>
                        </div>

                        <p className='text-gray-500 border-l border-gray-400 pl-2 font-extralight text-sm '>Alkesa Tesic</p>
                    </div>
                </div>

                <div className='h-auto bg-red-300 flex flex-col justify-start items-start border border-gray-300 p-4  rounded-lg gap-4' >
                    <h3 className='text-2xl text-neutral-100 font-bold '>Najbolja stvar koju sam uradio</h3>
                    <p className="before:content-[',,'] after:text-xl before:text-xl after:content-[',,'] italic  text-sm lg:text-base text-gray-100 font-light ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestias dolorum aspernatur.  Ab Lorem ipsum dolor!
                        Lorem
                    </p>
                    <div className='mt-auto mb-4 ml-4 flex flex-col items-center  justify-center'>

                        <div className='relative h-12 w-12  mr-2 rounded-full overflow-hidden'>
                            <Image src={AleksaCar} quality={95} alt='Slika' fill={true} objectFit='cover'></Image>
                        </div>

                        <p className='text-gray-500 border-l border-gray-400 pl-2 font-extralight text-sm '>Alkesa Tesic</p>
                    </div>
                </div>

                <div className=' flex flex-col justify-start items-start border border-gray-300 p-4 bg-gray-100 rounded-lg gap-4 bg-gradient-to-br from-pink-200 to-cyan-300'>
                    <h3 className='text-2xl text-neutral-800 font-bold '>Najbolja stvar koju sam uradio</h3>
                    <p className="before:content-[',,'] after:text-xl before:text-xl after:content-[',,'] italic text-sm lg:text-base text-gray-500 font-light ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestias dolorum aspernatur.Ab Lorem ipsum dolor!
                        Lorem
                    </p>
                    <div className='mt-auto mb-4 ml-4 flex flex-col items-center  justify-center'>

                        <div className='relative h-12 w-12  mr-2 rounded-full overflow-hidden'>
                            <Image src={AleksaCar} quality={95} alt='Slika' fill={true} objectFit='cover'></Image>
                        </div>

                        <p className='text-gray-500 border-l border-gray-400 pl-2 font-extralight text-sm '>Alkesa Tesic</p>
                    </div>
                </div>
                <div className=' lg:col-span-2   flex flex-col justify-start items-start border border-gray-300 p-4 bg-blue-300 rounded-lg gap-4 '>
                    <h3 className='text-2xl text-neutral-100 font-bold '>Najbolja stvar koju sam uradio</h3>
                    <p className="before:content-[',,'] after:text-xl before:text-xl after:content-[',,'] italic text-sm  lg:text-base text-gray-100 font-light ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur molestias dolorum aspernatur.Ab Lorem ipsum dolor!
                        Lorem
                    </p>
                    <div className='mt-auto mb-4 ml-4 flex flex-col items-center  justify-center'>

                        <div className='relative h-12 w-12  mr-2 rounded-full overflow-hidden'>
                            <Image src={AleksaCar} quality={95} alt='Slika' fill={true} objectFit='cover'></Image>
                        </div>

                        <p className='text-gray-500 border-l border-gray-400 pl-2 font-extralight text-sm '>Alkesa Tesic</p>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Testimonials