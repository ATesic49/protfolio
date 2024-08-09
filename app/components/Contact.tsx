"use client";
import { Asap_Condensed } from "next/font/google";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
interface State {
  ime: string;
  preizme: string;
  email: string;
  brojTelefona: string;
  poruka: string;
}

function Contact() {
  const [state, setState] = useState<State | {}>({});
  const [success, setSuccess] = useState(false);
  // setTimeout(() => {
  //   setSuccess(false);
  // }, 5000);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);

    try {
      const res = await axios.post("/api/email", { ...state });
      console.log(res);
      if (res.status === 200) {
        setState({});
        (e.target as HTMLFormElement).reset();
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <>
      <AnimatePresence>
        {success ? (
          <motion.div
            onClick={() => setSuccess(false)}
            initial={{ opacity: 0, y: -100, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            transition={{
              duration: 0.15,
              delay: 0.25,
              type: "tween",
              bounce: 0.75,
            }}
            exit={{ opacity: 0, y: -100, x: "-50%" }}
            className={`${success} items center fixed left-1/2 top-[2em] z-[8000] flex w-fit -translate-x-1/2 cursor-pointer justify-center rounded-2xl border border-green-400 bg-opacity-0 bg-gradient-to-tr from-green-100 to-green-200 px-4 py-2 duration-300 hover:scale-[102.5%]`}
          >
            <p className="text-lg tracking-wide">Uspešno ste poslali email!</p>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <section
        id="Kontakt"
        className="display relative z-10 flex flex-col items-center justify-center gap-6 overflow-hidden py-10 md:py-24"
      >
        <div className="absolute left-0 top-0 z-[-1] h-[125%] w-[125%] rotate-12 gap-8 bg-gradient-to-br from-cyan-400 to-pink-500 opacity-100 blur-2xl backdrop-blur-xl"></div>
        <h2 className="text-2xl font-extrabold text-neutral-900 opacity-70 md:text-4xl">
          Contact:
        </h2>
        <p className="-mt-2 text-center text-sm text-neutral-800 opacity-60 md:text-left md:text-lg">
          Here are the ways you can get in touch with me.
        </p>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="grid grid-cols-2 gap-4 px-8 tracking-wide text-gray-50 md:w-2/3 md:max-w-[40em]"
        >
          <div className="flex flex-col items-start justify-center gap-2">
            <label className="text-xs font-medium md:text-base">Name:</label>
            <input
              name="ime"
              onChange={(e) => handleChange(e)}
              type="text"
              className="w-full rounded border border-neutral-200 p-2 text-xs text-gray-500 focus-visible:outline-none md:text-sm"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-2">
            <label className="text-xs font-medium md:text-base">Surname:</label>
            <input
              name="prezime"
              onChange={(e) => handleChange(e)}
              type="text"
              className="border-neutral-20 p w-full rounded border p-2 text-xs text-gray-500 focus-visible:outline-none md:text-sm"
            />
          </div>
          <div className="col-span-2 flex flex-col items-start justify-center gap-2">
            <label className="text-xs font-medium md:text-base">Email:</label>
            <input
              name="email"
              onChange={(e) => handleChange(e)}
              type="text"
              className="w-full rounded border border-neutral-200 p-2 text-xs text-gray-500 focus-visible:outline-none md:text-sm"
            />
          </div>
          <div className="col-span-2 flex flex-col items-start justify-center gap-2">
            <label className="text-xs font-medium md:text-base">
              Telephone:
            </label>
            <input
              name="brojTelefona"
              onSubmit={() => alert("HAOS")}
              onChange={(e) => {
                handleChange(e);
              }}
              type="text"
              className="relative w-full rounded border border-neutral-200 p-2 text-xs text-gray-500 focus-visible:outline-none md:text-sm"
            />
          </div>
          <div className="col-span-2 flex flex-col items-start justify-center gap-2">
            <label className="text-xs font-medium md:text-base">Message:</label>
            <textarea
              name="poruka"
              onChange={(e) => {
                handleChange(e);
              }}
              className="relative min-h-[10em] w-full rounded border border-neutral-200 p-2 text-xs text-gray-500 focus-visible:outline-none md:text-sm"
            ></textarea>
          </div>
          <div className="col-span-2 flex flex-col items-end justify-center gap-2">
            <button className="duration-50 text-neutral-850 font-semiold mx-5 rounded bg-gray-500 px-4 py-2 text-sm font-semibold active:scale-95 md:text-base">
              Send
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
