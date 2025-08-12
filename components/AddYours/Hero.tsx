"use client";
import { db } from "@/utils/firebaseConfig";
import {
  Alert,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const Hero = () => {
  const [pickupline, setPickupLine] = useState("");
  const [tag, setTag] = useState("");
  const [loading, setLoading] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false); 
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState(""); 
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlertOpen(false);
    }, 3000);
    return () => clearTimeout(timer);
  },[alertOpen]);

  const handleAddPickupLine = async () => {
    // Basic validation
    if (!pickupline.trim() || !tag) {
      setAlertType("error");
      setAlertMessage("Please provide both a pickup line and a category.");
      setAlertOpen(true);
      return;
    }

    setLoading(true);
    setAlertOpen(false); 
    setError(""); 

    try {
      const querySnapshot = await getDocs(collection(db, "pickuplines"));
      const fetchedData: any = [];
      querySnapshot.forEach((doc) => {
        fetchedData.push({ id: doc.id, ...doc.data() });
      });

      // Check for duplicate pickup lines
      const isDuplicate = fetchedData.some((i:any) => i.pickupline === pickupline);

      if (isDuplicate) {
        setAlertType("error");
        setAlertMessage("Pickup line was already taken!");
        setAlertOpen(true);
        setLoading(false);
        return; 
      }

      const docRef = await addDoc(collection(db, "pickuplines"), {
        pickupline: pickupline,
        tag: tag,
        likes: 0,
      });

      setAlertType("success");
      setAlertMessage("Pickup line was added successfully!");
      setAlertOpen(true);
      setPickupLine(""); 
      setTag(""); 
    } catch (err: any) { 
      console.error("Error adding document: ", err);
      setAlertType("error");
      setAlertMessage(`Error: ${err.message || "Something went wrong."}`);
      setAlertOpen(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-2 relative">
      <div className="pt-[2rem] px-[0.5rem] flex flex-col items-center gap-[2.5rem]">
        <div
          className={`${
            alertOpen ? " opacity-100 translate-y-0" : " opacity-0 translate-y-5"
          } fixed transition-all delay-150 ease-linear z-10 top-[4rem] right-3 lg:right-[2rem]`}
        >
          {alertOpen && (
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => setAlertOpen(false)}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              severity={alertType as "success" | "error"} 
              sx={{ mb: 2 }}
            >
              {alertMessage}
            </Alert>
          )}
        </div>

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
                  className="min-h-28 outline-0 border border-white hover:border-gray-200/30 py-2 px-3 rounded-xl text-white bg-transparent"
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
                        borderRadius: 20, 
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
                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "green", 
                        },
                        "& .MuiSvgIcon-root": {
                          color: "white",
                        },
                        color: "white",
                      }}
                      className="text-white"
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={tag}
                      label="Category"
                      onChange={(e) => setTag(e.target.value)}
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
                <button
                  onClick={handleAddPickupLine} 
                  className="w-full z-50 flex justify-center items-center cursor-pointer hover:scale-110 transition-transform ease-in delay-100 bg-gradient-to-l from-[60%] from-[#A100FF] to-[#FE00AD] px-[1.5rem] py-2 span rounded-2xl font-semibold text-xl"
                  disabled={loading}
                >
                  {!loading ? <span>Submit</span> : <span>Adding...</span>}
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 flex lg:px-[5.5rem] w-full">
            <div className="flex flex-col gap-3">
              <p className="text-xl font-semibold">Live Preview</p>
              <div className="bg-white px-[2rem] py-4 rounded-e-2xl rounded-ss-2xl -rotate-3">
                <p className="text-purple-900 font-semibold font-poppins text-sm lg:text-lg">
                  {
                    pickupline.length > 0 ? 
                    <q>
                    {pickupline}
                  </q> : <q>Here your Pickupline will be displayed.</q>
                  }
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
