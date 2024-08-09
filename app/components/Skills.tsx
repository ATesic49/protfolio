"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.01, // Percentage of the element that needs to be visible to trigger the animation
  });

  const skills = [
    "HTML",
    "CSS",
    "Java Script",
    "Node.js",
    "MongoDB,",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Figma",
    "Framer Motion",
    "React Query",
  ];
  return (
    <div className="my-16 flex flex-col items-center justify-center gap-6 md:gap-16">
      <h2 className="bg-gradient-to-tr from-pink-500 to-cyan-400 bg-clip-text text-6xl font-bold text-transparent">
        My skills:
      </h2>
      <ul className="mx-auto flex w-[70%] flex-wrap items-center justify-center gap-4">
        {skills.map((skill, index) => {
          return (
            <motion.li
              ref={ref}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
              transition={{ delay: index / 10, type: "spring" }}
              key={index}
              className="cursor-pointer rounded border border-gray-300 bg-gray-50 px-4 py-2 duration-300 hover:bg-gray-200"
            >
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
