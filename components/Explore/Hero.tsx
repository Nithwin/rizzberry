"use client";
import { db } from "@/utils/firebaseConfig";
import { Alert, IconButton } from "@mui/material";
import copy from "copy-to-clipboard";
import { collection, getDocs } from "firebase/firestore";
import { Copy, Heart, Search } from "lucide-react";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
interface PickupLines {
  pickupline: string;
  likes: number;
  tag: string;
}

const Hero = () => {
  const [pickuplines, setPickupLines] = useState<any>();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setOpen(false);
    }, 4000);

    return () => clearTimeout(timerId);
  },[open]);
  useEffect(() => {
    const fetchRizzLines = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "pickuplines"));
        const fetchedData: any = [];
        querySnapshot.forEach((doc) => {
          fetchedData.push({ id: doc.id, ...doc.data() });
        });
        setPickupLines(fetchedData);
      } catch (err) {
        console.error(err);
      }
      finally{
        setLoading(false);
      }
    };
    fetchRizzLines();
  }, []);
  const bgFinder = (tag: String) => {
    if (tag === "funny") {
      return "#ce9101";
    } else if (tag === "love") {
      return "red";
    } else if (tag === "happy") {
      return "#00a0f6";
    } else if (tag === "flirty") {
      return "#8100e3";
    } else if (tag === "romantic") {
      return "pink";
    } else if (tag === "double meaning") {
      return "lightblue";
    } else {
      return "black";
    }
  };

  return (
    <section className="flex items-center justify-center min-h-[80dvh]">
      <div
        className={`${
          open ? " opacity-100 translate-y-0" : " opacity-0 translate-y-5"
        } absolute transition-all delay-150 ease-linear z-10 top-[5rem] right-3 lg:right-[2rem]`}
      >
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpen(false)}
            >
              <CloseIcon onClick={() => setOpen(false)} fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Pickupline was copied successfully
        </Alert>
      </div>

      <div className="relative px-[7px] lg:px-[8rem] flex flex-col gap-[2rem] lg:gap-[1rem] items-center">
        <div className="relative">
          <div className="size-25 lg:w-full lg:size-15 rounded-full bg-[#8800FF]/30 blur-3xl absolute top-[2rem] left-[4rem] lg:left-0 mix-blend-plus-lighter"></div>
          <p className="text-4xl py-[2rem] font-poppins lg:text-6xl text-center max-w-[50rem] font-bold bg-gradient-to-r from-[#AA00FF] to-[#FF4A9E] text-transparent bg-clip-text">
            Explore Something New
          </p>
        </div>
        <div>
          <div className="bg-gradient-to-r from-[#AA00FF] to-[#FF4A9E] rounded-full w-fit p-[2px] flex items-center">
            <div className="flex justify-between items-center bg-[#10011C] rounded-full px-[0.7rem] gap-[1rem]">
              <input
                type="text"
                className="outline-none px-3 py-3 w-full text-white bg-[#10011C] rounded-full"
                placeholder="Search a keyword..."
                required
              />
              <Search className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem] pt-[2rem]">
          {
            loading && <p className="text-center">Loading Please Wait...</p>
          }
          {pickuplines &&
            pickuplines.map((item:any, index: number) => (
              <div
                key={index}
                className="hover:scale-105 transition-transform ease-in delay-100 flex flex-col justify-between gap-[1rem] border-2 border-[#69009E]/50 rounded-2xl bg-[#8800FF]/20 backdrop-blur-3xl px-[1.5rem] pt-[1.2rem] pb-[1rem]"
              >
                <div>
                  <p className="font-poppins font-medium text-lg w-full">
                    <q>{item.pickupline}</q>
                  </p>
                </div>
                <div className="flex justify-between">
                  <p
                    style={{
                      backgroundColor: bgFinder(item.tag.toLowerCase()),
                    }}
                    className={`px-4 py-1 text-sm rounded-full font-semibold`}
                  >
                    {item.tag}
                  </p>
                  <div className="flex items-center justify-center gap-9">
                    <p className="flex gap-2 items-center text-sm font-medium text-gray-300">
                      <Heart className="cursor-pointer " />
                      {item.likes}
                    </p>
                    <Copy
                      onClick={() => {
                        copy(item.pickupline);
                        setOpen(true);
                      }}
                      className="text-purple-300 cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
