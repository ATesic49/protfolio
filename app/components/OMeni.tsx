import Image from "next/image";
import React from "react";
import Hero from "@/public/imgs/Hero.jpeg";
import Acalegenda from "@/public/imgs/acalegenda.jpg";

function OMeni() {
  return (
    <section
      title="oMeni"
      id="OMeni"
      className="grid min-h-[50vh] items-start justify-start gap-10 bg-cyan-50 px-[2em] py-[5rem] md:grid-cols-2 md:px-0"
    >
      <h2 className="z-20 h-full bg-gradient-to-tr from-cyan-500 to-pink-400 bg-clip-text text-left text-5xl font-bold text-transparent md:pl-16 md:text-6xl">
        About me
      </h2>
      <div className="hidden md:block"></div>
      {/* <div className=' flex justify-around items-center'> */}

      <p className="my-auto text-left text-sm text-gray-500 md:pl-10 md:text-lg">
        My name is Aleksa Tesic. I am a{" "}
        <span className="mx-1 underline">NextJs</span> and{" "}
        <span className="mx-1 underline">React</span> web developer with over 3
        years of experience.
        <span className="block h-[.5em]"> </span>I have worked on numerous
        projects, including web shops, restaurant websites, web games,
        e-commerce and business sites.
        <span className="block h-[.5em]"> </span>I have a lot of experience, and
        was able to get a grasp on the fundamentals of UX/UI design.
        <span className="block h-[.5em]"> </span>The thing that sepparates me
        from the crowd is that I am a really ambitious learner, who sees every
        obsticle as a challenge.
      </p>

      <Image
        src={Acalegenda}
        className="mx-auto my-auto w-3/4 rounded shadow-2xl brightness-110 sm:w-2/3"
        alt=""
      ></Image>

      {/* </div> */}
    </section>
  );
}

export default OMeni;
