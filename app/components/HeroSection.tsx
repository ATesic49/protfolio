"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Hero from "@/public/imgs/Hero.jpeg";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
const HeroSection: React.FC = () => {
  const [currentUrl, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href + "CV/Aleksa_Tesic_CV.pdf");
  }, []);

  const downloadFileAtURL = (url: string) => {
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.download = "Aleksa_Tesic_CV.docx";
    aTag.click();
    aTag.remove();
  };

  return (
    <div
      id="Pocetna"
      className="relative items-start justify-start overflow-hidden pt-20 md:items-center md:justify-center md:px-8 md:pt-0"
    >
      <Image
        alt=""
        src={Hero}
        className="absolute right-0 hidden h-full w-auto rounded-lg brightness-75 md:block"
        priority
      ></Image>
      <div className="relative z-10 flex w-fit flex-col gap-4 bg-white p-10 px-[2em] after:absolute after:left-[75%] after:top-[-25%] after:z-[-1] after:hidden after:h-[150%] after:w-[20vw] after:rotate-12 after:bg-white md:min-h-[100vh] md:items-start md:justify-center md:px-0 md:pl-10 md:after:block">
        <h1 className="w-fit max-w-[12em] bg-gradient-to-tr from-cyan-400 to-pink-400 bg-clip-text text-4xl font-extrabold leading-[130%] text-transparent md:max-w-[9em] md:text-6xl">
          Perfect site for your business{" "}
        </h1>
        <p className="w-fit max-w-[25em] text-sm font-light leading-relaxed text-gray-500 md:text-lg">
          Hi, my name is Aleksa Tešić and I am a web developer with 3 years of
          expirience.
        </p>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          className="p flex flex-row-reverse items-center justify-center gap-6 py-2"
        >
          <button
            onClick={() => downloadFileAtURL(currentUrl)}
            className="relative z-0 overflow-hidden rounded bg-cyan-900 px-4 py-2 pr-2 text-xs text-white duration-200 after:absolute after:left-1/2 after:top-1/2 after:z-[-1] after:aspect-square after:w-2 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:transition-all after:duration-500 hover:bg-cyan-700 hover:after:w-[125%] hover:after:bg-cyan-300 md:text-sm"
          >
            My CV
            <svg
              className="m-0 inline h-6 w-6 pb-2 invert-[100%]"
              width={20}
              height={20}
              viewBox="0 0 24 24"
            >
              <g>
                <path d="M16.004 9.414L7.397 18.021 5.983 16.607 14.589 8H7.004V6h11v11h-2z"></path>
              </g>
            </svg>
          </button>

          <Link
            to="OMeni"
            smooth={true}
            offset={0}
            duration={500}
            className="cursor-pointer rounded-md bg-white px-4 py-2 text-cyan-500 hover:bg-cyan-50"
          >
            Lets roll!
            <svg
              className="m-0 inline h-6 w-6 px-1"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="25"
              height="25"
              x="0"
              y="0"
              viewBox="0 0 128 128"
            >
              <g>
                <path
                  d="M64 88a3.988 3.988 0 0 1-2.828-1.172l-40-40c-1.563-1.563-1.563-4.094 0-5.656s4.094-1.563 5.656 0L64 78.344l37.172-37.172c1.563-1.563 4.094-1.563 5.656 0s1.563 4.094 0 5.656l-40 40A3.988 3.988 0 0 1 64 88z"
                  fill="#06b6d4"
                  opacity="1"
                  data-original="#000000"
                ></path>
              </g>
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
