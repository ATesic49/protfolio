"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Tebra from "@/public/imgs/projects.jpg";
import Caliper from "@/public/imgs/project2.jpg";
import Pound from "@/public/imgs/pound.jpg";
import Pitaj from "@/public/imgs/pitaj-me.jpg";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Project from "./Project";
function Projects() {
  const svePortebno = [
    {
      ime: "Ozvučenje i Dj",
      opis: "A black-themed site for audio rental, and Dj services",
      skills: [
        "JavaScript",
        "ReactJs",
        "NodeJS",
        "TailwindCSS",
        "GitHub",
        "HTML5",
      ],
      imgs: ["ozvucenje1", "ozvucenje2", "ozvucenje3", "ozvucenje4"],
    },
    {
      ime: "Learning Excellence",
      opis: "Responsive Business education website",
      skills: [
        "TypeScript",
        "NextJs",
        "NodeJS",
        "TailwindCSS",
        "GitHub",
        "Sprite",
      ],
      imgs: ["business1", "business2", "business3"],
    },
    {
      ime: "Pound",
      opis: "Club website rental",
      skills: [
        "TypeScript",
        "NextJs",
        "NodeJS",
        "TailwindCSS",
        "GitHub",
        "Figma",
      ],
      imgs: ["pound1", "pound2", "pound3"],
    },
  ];
  return (
    <div
      className="flex flex-col items-center justify-center gap-16 py-16"
      id="Projekti"
    >
      <h2 className="bg-gradient-to-tr from-pink-500 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
        Portfolio:
      </h2>

      {svePortebno.map((data, i) => {
        return <Project data={data} key={i} />;
      })}
    </div>
  );
}

export default Projects;
