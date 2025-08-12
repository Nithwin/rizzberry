"use client";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const Hero = () => {
  const [pickupline, setPickupLine] = useState("");
  const [category, setCategory] = useState("");
  return (
    <section className="px-2">
      <div className="pt-[2rem] px-[0.5rem] flex flex-col items-center gap-[2.5rem]">
        <div className="relative flex flex-col gap-[0.5rem]">
          <div className="size-25 lg:w-full lg:size-15 rounded-full bg-[#8800FF]/30 blur-3xl absolute top-[2rem] left-[4rem] lg:left-0 mix-blend-plus-lighter"></div>
          <p className="text-4xl font-poppins font-semibold text-center lg:text-5xl">
            Share Your Best{" "}
            <span className="bg-gradient-to-l text-transparent bg-clip-text from-[#A100FF] to-[#FE00AD]">
              Rizz
            </span>
          </p>
          <p className="text-gray-300 text-sm text-center max-w-[30rem] mx-auto">
            Got a pickup line that guaranteed to make someone smile? Share it
            with the RizzBerry community and spread the love (or laughter)!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-[3rem] lg:gap-0 w-full lg:px-[5rem]">
          <div className=" w-full px-[1rem] lg:w-1/2 lg:px-[6rem] relative">
            <div className="size-25 -z-10 lg:w-full lg:size-15 rounded-full bg-[#8800FF]/30 blur-3xl absolute -top-[1rem] left-[4rem] lg:left-0 mix-blend-plus-lighter"></div>
            <div className="z-50 flex flex-col gap-[1.4rem] border border-purple-400 p-4 py-[2rem] rounded-xl">
              <div className="flex flex-col gap-[0.5rem]">
                <label htmlFor="">Your Pickup Line</label>
                <textarea
                  onChange={(e) => setPickupLine(e.target.value)}
                  className="min-h-28 outline-0 border border-white hover:border-gray-200/30 py-2 px-3 rounded-xl "
                  placeholder="Write your pickupline here..."
                  value={pickupline}
                  required
                />
              </div>
              <div>
                <Box>
                  <FormControl fullWidth>
                    <InputLabel
                       sx={{
                        color: "white",
                        "&.Mui-focused": {
                          color: "white", 
                        },
                        backgroundColor: "#10011C", 
                        borderRadius:20,
                        paddingRight: "5px",
                      }}
                      id="demo-simple-select-label"
                    >
                      Category
                    </InputLabel>
                    <Select
                      sx={{
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "white",
                          borderRadius: 3,
                        },
                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "gray",
                        },

                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                        color:'white'
                      }}
                      className="text-white"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Age"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <MenuItem value={"Love"}>Love</MenuItem>
                      <MenuItem value={"Flirty"}>Flirty</MenuItem>
                      <MenuItem value={"Funny"}>Funny</MenuItem>
                      <MenuItem value={"Happy"}>Happy</MenuItem>
                      <MenuItem value={"Wordplay"}>Wordplay</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div>
                <button className="w-full z-50 flex justify-center items-center cursor-pointer hover:scale-110 transition-transform ease-in delay-100 bg-gradient-to-l from-[60%] from-[#A100FF] to-[#FE00AD] px-[1.5rem] py-2 span rounded-2xl font-semibold text-xl">
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex lg:px-[5.5rem] w-full">
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">Live Preview</p>
              <div className="bg-white px-[2rem] py-4 rounded-e-2xl rounded-ss-2xl -rotate-3">
                <p className="text-purple-900 font-semibold font-poppins text-sm lg:text-lg">
                  <q>
                    Tired of lame pick-up lines? Our AI crats witty, charming,
                    and irresistible openers that actually work.
                  </q>
                </p>
              </div>
              <div className="">
                <p className="text-end">-You</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
