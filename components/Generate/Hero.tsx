"use client";
import { Sparkles } from "lucide-react";
import { Copy } from "lucide-react";
import { useState } from "react";
import copy from "copy-to-clipboard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  const [text, setText] = useState(
    "Are you a parking ticket? Because you've got 'fine' written all over you."
  );
  const handleCopy = () => {
    copy(text);
    alert("Clipboard Copied Successfully...");
  };
  return (
    <section className="flex items-center justify-center min-h-[80dvh]">
      <div className="relative px-[10px] flex flex-col gap-[1.5rem] lg:gap-[1rem]">
        <div className="absolute h-32 -left-16 -top-24 lg:top-0 mx-auto lg:-left-[13rem]">
          <DotLottieReact src="love.lottie" loop autoplay />
        </div>
        <div className="absolute w-36 lg:w-48 left-26 -top-17 -right-28 lg:top-[3rem] mx-auto lg:-right-[45rem]">
          <DotLottieReact
            src="emoji.lottie"
            className="h-full w-full"
            loop
            autoplay
          />
        </div>
        <div className="size-25 lg:w-full lg:size-15 rounded-full bg-[#8800FF]/30 blur-3xl absolute top-[2rem] left-[4rem] lg:left-0 mix-blend-plus-lighter"></div>
        <div className="size-25 lg:w-full lg:size-15 rounded-full bg-[#8800FF]/30 blur-3xl absolute top-[12rem] left-[4rem] lg:left-0 mix-blend-plus-lighter"></div>
        <div className="flex flex-col gap-[1.7rem] ">
          <p className="text-4xl lg:text-6xl text-center max-w-[40rem] mx-auto font-bold bg-gradient-to-r from-[#AA00FF] to-[#FF4A9E] text-transparent bg-clip-text font-poppins">
            Unleash Your Inner Charmer
          </p>

          <p className="text-sm lg:text-lg max-w-[40rem] text-center px-3 text-gray-400">
            Tired of lame pick-up lines? Our AI crats witty, charming, and
            irresistible openers that actually work.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-[1.5rem] items-center py-[1rem]">
          <div className="bg-gradient-to-r from-[#AA00FF] to-[#FF4A9E] rounded-full w-fit p-[2px]">
            <input
              type="text"
              className="outline-none px-6 py-3 w-full text-white bg-[#10011C] rounded-full"
              placeholder="Type your vibe or keyboard..."
              required
            />
          </div>
          <button className="cursor-pointer hover:scale-105 transition-transform delay-150 ease-in flex items-center bg-gradient-to-r from-[#AA00FF] to-[#FF4A9E] px-[1.5rem] text-xl font-medium font-poppins py-3 rounded-full gap-[0.5rem]">
            <Sparkles />
            <span>Generate</span>
          </button>
        </div>

        <div>
          <div className="px-[1rem] relative py-[1rem] border-2 border-purple-700 rounded-2xl bg-purple-950/25 backdrop-blur-3xl">
            <Copy
              onClick={handleCopy}
              className="absolute right-2 top-2 text-pink-500/80 cursor-pointer"
            />
            <p className="text-center text-lg pt-4">
              <q>{text}</q>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
