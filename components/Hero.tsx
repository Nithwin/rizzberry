"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full min-h-[95svh] lg:min-h-[87dvh] flex flex-col justify-between">
      <div className="flex flex-col relative justify-center items-center gap-[2rem] px-[0.5rem] pt-[2rem] lg:pt-[5rem]">
        <div className="bg-gradient-to-r relative cursor-pointer from-[#5900ff] to-[#8700fe] rounded-full p-[2px] w-fit">
          <div className="size-25 lg:w-full lg:size-15 rounded-full bg-[#8800FF]/30 blur-3xl absolute top-[0rem] left-[0rem] mix-blend-plus-lighter"></div>

          <p className="flex items-center text-[10px] lg:text-sm bg-black/55 px-[1.2rem] py-2 backdrop-blur-2xl rounded-full h-full w-fit">
            💖 Find your perfect line. &nbsp;{" "}
            <span className="font-bold"> Join the Fun </span>
            <ArrowRight className="ps-1 h-5 w-5" />
          </p>
        </div>

        <div className="flex flex-col relative gap-[1.5rem]">
          <div className="size-50 lg:w-full lg:size-15 rounded-full bg-[#8800FF]/30 blur-3xl absolute top-[1rem] left-[4rem] mix-blend-plus-lighter"></div>
          <motion.div
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            animate={{ y: [0, -10, 0] }}
            className="-left-[0.5rem] -top-[4rem] absolute"
          >
            <div className="size-5 h-10 rounded-full bg-red-500/30 blur-xl absolute top-[0rem] left-[0rem] mix-blend-plus-lighter"></div>
            <Image
              alt="Heart"
              src={"/icons/Heart.png"}
              className="size-11 z-50 "
              width={70}
              height={70}
            />
          </motion.div>
          <motion.div
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            animate={{ y: [0, -10, 0] }}
            className="-right-[0.5rem] -top-[6rem] absolute"
          >
            <div className="size-10 h-10 rounded-full bg-pink-500/30 blur-lg absolute top-[0rem] left-[0rem] mix-blend-plus-lighter"></div>
            <Image
              alt="Heart"
              src={"/icons/skull.png"}
              className="size-11 z-50 "
              width={70}
              height={70}
            />
          </motion.div>
          <p className="text-4xl lg:text-6xl font-black font-poppins text-center">
            Never run out of &nbsp;
            <span className="relative inline-block">
              <span className="bg-gradient-to-l text-transparent bg-clip-text from-[#A100FF] to-[#FE00AD]">
                witty lines.
              </span>
              <motion.svg
                className="absolute -bottom-2 left-0 w-full h-4 lg:h-8 lg:top-[2.8rem]"
                viewBox="0 0 200 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M0 15 Q100 0, 200 15"
                  stroke="url(#grad)"
                  strokeWidth="3"
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{
                    duration: 8, // total animation time
                    ease: "easeInOut",
                    repeat: Infinity, // infinite loop
                    repeatDelay: 2, // pause between loops
                  }}
                />
                <defs>
                  <linearGradient
                    id="grad"
                    x1="0"
                    y1="0"
                    x2="200"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#A100FF" />
                    <stop offset="1" stopColor="#FE00AD" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </p>
          <div className=" flex justify-center">
            <p className="text-center text-[#A4A4A4] text-sm lg:text-lg max-w-[40rem]">
            RizzBerry is your AI-powered wingman. Generate endless, personalized
            pickup lines, share them with community, and first inspiration for
            your next conversation
          </p>
          </div>
          <p className="text-center font-medium text-lg lg:text-xl">
            <q>
              All the good pick up lines are taken but{" "}
              <span className="bg-gradient-to-l text-transparent bg-clip-text -from-60% from-[#A100FF] to-[#FE00AD]">
                you aren't.
              </span>
            </q>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[2rem] relative">
          <div className="size-50 lg:w-full lg:size-20 rounded-full bg-[#8800FF]/30 blur-3xl absolute -top-[2rem] left-[0rem] mix-blend-plus-lighter"></div>
          <motion.div
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            animate={{ y: [0, -10, 0] }}
            className="-left-[4.5rem] lg:-left-[10rem] -top-[2.5rem] absolute"
          >
            <div className="size-5 h-10 rounded-full bg-purple-500/30 blur-xl absolute top-[0rem] left-[0rem] mix-blend-plus-lighter"></div>
            <Image
              alt="Heart"
              src={"/icons/CupidTarget.png"}
              className="size-11 z-50 "
              width={70}
              height={70}
            />
          </motion.div>
          <motion.div
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            animate={{ y: [0, -10, 0] }}
            className="-right-[4.5rem] lg:-right-[10rem] -bottom-[2.5rem] absolute"
          >
            <div className="size-5 h-10 rounded-full bg-orange-500/30 blur-xl absolute top-[0rem] left-[0rem] mix-blend-plus-lighter"></div>
            <Image
              alt="Heart"
              src={"/icons/Cupid.png"}
              className="size-11 z-50 "
              width={70}
              height={70}
            />
          </motion.div>

          <Link href={"generate"} className="z-50 flex justify-center items-center cursor-pointer hover:scale-110 transition-transform ease-in delay-100 bg-gradient-to-l from-[60%] from-[#A100FF] to-[#FE00AD] px-[1.5rem] py-2 span rounded-full font-semibold text-xl">
            <span>Get Started</span>
          </Link>
          <button className="z-50 hover:scale-110  cursor-pointer transition-transform ease-in delay-100 bg-gradient-to-l from-60% from-[#A100FF] to-[#FE00AD] p-0.5 flex rounded-full font-semibold text-xl">
            <p className="px-[1.5rem] py-1.5 bg-[#10011C] backdrop-blur-3xl rounded-full">
              <span className="bg-gradient-to-l text-transparent bg-clip-text from-60% to-100% from-[#A100FF] to-[#FE00AD]">
                Explore Lines
              </span>
            </p>
          </button>
        </div>
      </div>

      <div className="pt-[2rem] flex flex-col gap-3">
        <p className="text-center text-gray-400 text-sm">
          © 2025 RizzBerry Inc. All right reversed
        </p>
        <p className="font-poppins text-gray-400 text-center text-xs ">Created with ❤️ by <a className="underline text-purple-400" href="https://www.nithwin.xyz/">Nithwin</a></p>
      </div>
    </section>
  );
};

export default Hero;
