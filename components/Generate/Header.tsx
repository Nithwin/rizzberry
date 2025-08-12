"use client";
import Logo from "@/public/logo/Logo";
import React, { useState } from "react";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="px-[1rem] py-[0.5rem] h-[9vh]">
      <nav className="flex justify-between items-center lg:w-full">
        <Link href={"/"} className="flex items-center gap-[0.5rem]">
          <div className="h-8 w-8">
            <Logo />
          </div>
          <div>
            <p className="text-xl font-semibold">Rizz<span className="text-pink-400">Berry</span></p>
          </div>
        </Link>
        <div className="lg:hidden">
          {open ? (
            <X onClick={() => setOpen(!open)} className="w-11 h-11" />
          ) : (
            <Menu onClick={() => setOpen(!open)} className="w-11 h-11" />
          )}
        </div>
        <div
          className={`${
            open ? "translate-y-0" : "translate-y-200"
          } z-100 lg:translate-none lg:static transition-transform ease-linear delay-150 fixed bg-white/5 lg:bg-transparent backdrop-blur-3xl lg:backdrop-blur-none top-[4rem] left-0 bottom-0 right-0 rounded-t-2xl lg:ps-[3rem]`}
        >
          <div className="h-full flex flex-col items-center lg:flex-row justify-between">
            <ul className="flex flex-col lg:flex-row justify-center my-auto items-center gap-[6rem] lg:gap-[5rem] lg:p-0">
              <li>
                <Link href={"/generate"}>
                  <p className="text-2xl lg:text-lg text-[#ADADAD] cursor-pointer transition-all hover:scale-125 ease-in-out delay-100 hover:bg-gradient-to-l hover:from-[#A100FF] hover:to-[#FE00AD] hover:bg-clip-text hover:text-transparent">
                    Generate
                  </p>
                </Link>
              </li>
              <li>
                <Link href={"/explore"}>
                  <p className="text-2xl lg:text-lg text-[#ADADAD] cursor-pointer transition-all hover:scale-125 ease-in-out delay-100 hover:bg-gradient-to-l hover:from-[#A100FF] hover:to-[#FE00AD] hover:bg-clip-text hover:text-transparent">
                    Explore
                  </p>
                </Link>
              </li>
              <li className="">
                <Link href="/add">
                  <p className="text-2xl lg:text-lg text-[#ADADAD] cursor-pointer transition-all hover:scale-125 ease-in-out delay-100 hover:bg-gradient-to-l hover:from-[#A100FF] hover:to-[#FE00AD] hover:bg-clip-text hover:text-transparent">
                    Add Yours
                  </p>
                </Link>
              </li>
              <li className="">
                <Link href="/feedback">
                  <p className="text-2xl lg:text-lg text-[#ADADAD] cursor-pointer transition-all hover:scale-125 ease-in-out delay-100 hover:bg-gradient-to-l hover:from-[#A100FF] hover:to-[#FE00AD] hover:bg-clip-text hover:text-transparent">
                    Feedback
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block px-[2rem] my-auto">
          <div className="size-10">
            <video
              src="Fire.webm" // Place your file in /public/videos/
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-full"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
