"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero from "@/public/imgs/Hero.jpeg";

function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Percentage of the element that needs to be visible to trigger the animation
  });

  return (
    <div className="relative z-[-10] flex items-center justify-center py-16 md:min-h-screen md:py-16">
      <div className="absolute left-0 top-0 -z-10 flex h-full w-full flex-col items-start justify-center gap-16 bg-indigo-950 bg-opacity-80 py-56"></div>
      <Image
        src={Hero}
        alt=""
        fill
        className="-z-20 object-cover brightness-50"
      ></Image>
      <div className="flex h-full w-full flex-col items-start justify-center gap-4 bg-opacity-80 md:gap-8">
        <div className="items-left mx-10 flex flex-col justify-center gap-4 md:gap-8">
          <h2 className="max-w-[8em] text-4xl font-extrabold text-white md:text-6xl">
            Numbers speak for themselves
          </h2>
          <p className="max-w-[25em] text-gray-400">
            In my short freelancing yourney I am proud of what i was able to
            accomplish.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-y-8 px-4 md:grid-cols-4 md:gap-0 md:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.25 }}
            className="align left flex flex-col gap-6 border-l border-gray-400 px-4 py-2"
          >
            <h3 className="text-2xl font-bold text-white md:text-4xl">15+</h3>
            <p className="text-thin text-xs text-gray-400 md:text-sm">
              Projects created
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.35 }}
            className="align left flex flex-col gap-6 border-l border-gray-400 px-4 py-2"
          >
            <h3 className="text-2xl font-bold text-white md:text-4xl">6+</h3>
            <p className="text-thin text-xs text-gray-400 md:text-sm">
              Customers pleased
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.55 }}
            className="align left flex flex-col gap-6 border-l border-gray-400 px-4 py-2"
          >
            <h3 className="text-2xl font-bold text-white md:text-4xl">
              1,500+
            </h3>
            <p className="text-thin text-xs text-gray-400 md:text-sm">
              Hours spent practicing and learning
            </p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ delay: 0.45 }}
            className="align left flex flex-col gap-6 border-l border-gray-400 px-4 py-2"
          >
            <h3 className="text-2xl font-bold text-white md:text-4xl">
              3,500+
            </h3>
            <p className="text-thin text-xs text-gray-400 md:text-sm">
              Coffee breaks
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
