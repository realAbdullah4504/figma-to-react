import React from "react";
import Hero from "./Hero";
import Worked from "./Worked";

const HeroPage = () => {
  return (
    <div className="bg-primaryDark text-[#FFFFFF] min-h-[100vh] flex flex-col">
      <Hero />
      <Worked />
    </div>
  );
};

export default HeroPage;
