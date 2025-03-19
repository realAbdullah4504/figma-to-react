import React from "react";
import Vector from "../../assets/Vector.png";
import photo from "../../assets/photo.png";

const Hero = () => {
  return (
    <div className="flex  flex-1 flex-wrap-reverse px-4 mt-[20px] lg:mt-0 w-[85%] justify-evenly items-center m-auto">
      <div className="flex flex-col gap-[30px] basis-[492px]">
        <div className="text-[44px] font-extrabold font-railway">
          <span>Your Name Here</span>
        </div>
        <div className="text-[14px] text-dark font-normal">
          <span>
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </span>
        </div>
        <div className="text-[16px] max-w-[307px] font-bold bg-[#62BA1B] rounded-[8px] gap-[5px] inline-flex items-center justify-center  py-4">
          <span>Let’s get started </span>
          <img src={Vector} className="w-[12px] h-[12px]" />
        </div>
      </div>
      <img src={photo} className="w-[350px] h-[350px]"/>
    </div>
  );
};

export default Hero;
