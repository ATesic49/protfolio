"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Pitaj from "@/public/imgs/pitaj-me.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";

import "swiper/css/navigation";

const Project = ({
  data,
}: {
  data: { ime: string; opis: string; skills: string[]; imgs: string[] };
}) => {
  const [picture, setPicture] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setPicture(!picture);
  };
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className={`${open ? "flex" : "hidden"} fixed inset-0 z-20 items-center justify-center bg-black bg-opacity-45`}
      >
        <div className="absolute -z-10 flex h-[360px] w-[640px] items-center justify-center rounded-lg bg-gray-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-600 stroke-gray-400"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#000000"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 8h.01" />
            <path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z" />
            <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5" />
            <path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3" />
          </svg>
        </div>
        <Swiper modules={[Pagination, Navigation]} slidesPerView={1}>
          {data.imgs.map((src, i) => (
            <SwiperSlide key={i}>
              <Image
                alt="Projekat"
                width={640}
                height={360}
                className="mx-auto aspect-video rounded-lg object-cover"
                src={`/imgs/${src}.png`}
              ></Image>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex w-full max-w-screen-lg flex-col items-center gap-8 px-8">
        <div
          onClick={handleClick}
          className="border-netral-20 group cursor-pointer gap-10 overflow-hidden rounded-xl border bg-gray-100 duration-200 hover:bg-gray-200 md:grid md:grid-cols-3"
        >
          <div className="col-span-2 flex flex-col justify-center gap-4 px-4 py-10 md:px-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-extrabold md:text-4xl">{data.ime}</h3>
              <p className="leading-2 font-extralight text-gray-400">
                {data.opis}
              </p>
            </div>
            <ul className="flex flex-wrap justify-start gap-2">
              {data.skills.map((skill, i) => (
                <li
                  key={i}
                  className="rounded-xl bg-neutral-800 px-2 py-1 text-sm text-neutral-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <Image
            alt="0"
            src={`/imgs/${data.imgs[0]}.png`}
            width={480}
            height={270}
            className={`${picture ? "-translate-x-3 translate-y-3 -rotate-3 scale-105" : ""}border-gray-00 m-4 h-full w-full rounded-l border-b border-l border-t object-cover object-left shadow-xl duration-200`}
          ></Image>
        </div>
        <AnimatePresence>
          {picture && (
            <motion.div
              layout
              initial={{ height: 0, opacity: 0 }}
              animate={
                picture
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              exit={{ height: 0, opacity: 0 }}
              className="w-full"
            >
              <Swiper
                className="w-full"
                breakpoints={{
                  640: {
                    slidesPerView: 3.2,
                    spaceBetween: 32,
                  },
                }}
                spaceBetween={16}
                slidesPerView={1.5}
              >
                {data.imgs.map((src, i) => (
                  <SwiperSlide key={i}>
                    <Image
                      onClick={() => picture && setOpen(true)}
                      alt="Projekat"
                      width={320}
                      height={240}
                      className="aspect-video w-full rounded-lg object-cover"
                      src={`/imgs/${src}.png`}
                    ></Image>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Project;
