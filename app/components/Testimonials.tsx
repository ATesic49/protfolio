import React from "react";
import AleksaCar from "@/public/imgs/acalegenda.jpg";
import Image from "next/image";
function Testimonials() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-10 md:py-24">
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="max-w-[10em] bg-gradient-to-tr from-pink-200 to-cyan-300 bg-clip-text text-center text-2xl font-extrabold capitalize text-transparent md:text-6xl">
          Some fake testimonials
        </h2>
        <p className="text-gray-400">To show off my skills</p>
      </div>
      <div className="grid w-11/12 gap-10 md:w-10/12 lg:grid-cols-3">
        <div className="flex flex-col items-start justify-center gap-4 rounded-lg border border-gray-300 bg-gray-100 bg-gradient-to-tr from-red-200 to-blue-100 p-4 md:justify-center lg:row-span-2">
          <h3 className="text-2xl font-bold text-neutral-800">
            Najbolja stvar koju sam uradio
          </h3>
          <p className="my-auto justify-start text-sm font-light italic text-gray-600 before:text-xl before:content-[',,'] after:text-xl after:content-[',,'] lg:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur molestias dolorum aspernatur.Ab Lorem ipsum dolor! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Praesentium odio
            maiores quam provident nobis ratione tempore recusandae cum eligendi
            doloribus dolor ad fugiat, mollitia atque exercitationem. Enim natus
            earum ut.
          </p>
          <div className="mb-4 ml-4 mt-auto flex flex-col items-center justify-center">
            <div className="relative mr-2 h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={AleksaCar}
                quality={95}
                alt="Slika"
                fill={true}
                className="object-cover"
              ></Image>
            </div>

            <p className="border-l border-gray-400 pl-2 text-sm font-extralight text-gray-500">
              Alkesa Tesic
            </p>
          </div>
        </div>

        <div className="flex h-auto flex-col items-start justify-start gap-4 rounded-lg border border-gray-300 bg-red-300 p-4">
          <h3 className="text-2xl font-bold text-neutral-100">
            Najbolja stvar koju sam uradio
          </h3>
          <p className="text-sm font-light italic text-gray-100 before:text-xl before:content-[',,'] after:text-xl after:content-[',,'] lg:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur molestias dolorum aspernatur. Ab Lorem ipsum dolor!
            Lorem
          </p>
          <div className="mb-4 ml-4 mt-auto flex flex-col items-center justify-center">
            <div className="relative mr-2 h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={AleksaCar}
                quality={95}
                alt="Slika"
                fill={true}
                className="object-cover"
              ></Image>
            </div>

            <p className="border-l border-gray-400 pl-2 text-sm font-extralight text-gray-500">
              Alkesa Tesic
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start gap-4 rounded-lg border border-gray-300 bg-gray-100 bg-gradient-to-br from-pink-200 to-cyan-300 p-4">
          <h3 className="text-2xl font-bold text-neutral-800">
            Najbolja stvar koju sam uradio
          </h3>
          <p className="text-sm font-light italic text-gray-500 before:text-xl before:content-[',,'] after:text-xl after:content-[',,'] lg:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur molestias dolorum aspernatur.Ab Lorem ipsum dolor! Lorem
          </p>
          <div className="mb-4 ml-4 mt-auto flex flex-col items-center justify-center">
            <div className="relative mr-2 h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={AleksaCar}
                quality={95}
                alt="Slika"
                fill={true}
                className="object-cover"
              ></Image>
            </div>

            <p className="border-l border-gray-400 pl-2 text-sm font-extralight text-gray-500">
              Alkesa Tesic
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-4 rounded-lg border border-gray-300 bg-blue-300 p-4 lg:col-span-2">
          <h3 className="text-2xl font-bold text-neutral-100">
            Najbolja stvar koju sam uradio
          </h3>
          <p className="text-sm font-light italic text-gray-100 before:text-xl before:content-[',,'] after:text-xl after:content-[',,'] lg:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur molestias dolorum aspernatur.Ab Lorem ipsum dolor! Lorem
          </p>
          <div className="mb-4 ml-4 mt-auto flex flex-col items-center justify-center">
            <div className="relative mr-2 h-12 w-12 overflow-hidden rounded-full">
              <Image
                src={AleksaCar}
                quality={95}
                alt="Slika"
                fill={true}
                className="object-cover"
              ></Image>
            </div>

            <p className="border-l border-gray-400 pl-2 text-sm font-extralight text-gray-500">
              Alkesa Tesic
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
