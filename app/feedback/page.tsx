import Hero from "@/components/FeedBack/Hero";
import Header from "@/components/Generate/Header";
import React from "react";

const FeedBack = () => {
  return (
    <section className="bg-[#10011C] min-h-svh lg:min-h-dvh">
      <div className="py-2 px-1 h-full">
        <Header />
        <Hero />
      </div>
    </section>
  );
};

export default FeedBack;
