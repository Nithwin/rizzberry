import { div } from "framer-motion/client";
import { Copy, Heart, Search } from "lucide-react";

const Hero = () => {
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
  const data = [
    {
      line: "Do you have a map? I keep getting lost in your eyes.",
      likes: 7,
      tag: "Flirty",
    },
    {
      line: "Are you a parking ticket? Because you've got 'FINE' written all over you.",
      likes: 6,
      tag: "Funny",
    },
    {
      line: "I never believed in love at first sight until I saw you walk in.",
      likes: 8,
      tag: "Love",
    },
    {
      line: "Are your parents bakers? Because you're a cutie pie.",
      likes: 7,
      tag: "Happy",
    },
    {
      line: "If you were words on a page, you'd be fine print, because I'd want to read you all day.",
      likes: 8,
      tag: "Flirty",
    },
  ];

  return (
    <section className="flex items-center justify-center min-h-[80dvh]">
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
          {data.map((item, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-transform ease-in delay-100 flex flex-col justify-between gap-[1rem] border-2 border-[#69009E]/50 rounded-2xl bg-[#8800FF]/20 backdrop-blur-3xl px-[1.5rem] pt-[1.2rem] pb-[1rem]"
            >
              <div>
                <p className="font-poppins font-medium text-lg w-full">
                  <q>{item.line}</q>
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
                  <p className="flex gap-2 items-center text-sm font-medium text-gray-300"><Heart className="cursor-pointer " />{item.likes}</p>
                  <Copy className="text-purple-300 cursor-pointer" />
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
