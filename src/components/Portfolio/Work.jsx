import React from "react";
import PropTypes from "prop-types";
import Vector from "../../assets/Vector.png";

const addOpacityToColor = (color, opacity) => {
  // Handle hex colors
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }

  // Handle rgb colors
  const rgbMatch = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (rgbMatch) {
    return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${opacity})`;
  }

  return color;
};
const Work = ({
  heading,
  description,
  image,
  reverse,
  buttonColor,
  category,
}) => {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } px-[24px] gap-[24px] items-center justify-center flex-wrap`}
    >
      <div className=" flex flex-col gap-[10px]  lg:basis-[calc(50%-24px)]">
        {/* max-w-[421px] */}
        <span
          className="text-[#FFFFFF] text-[14px] text-center font-bold max-w-[72px] rounded-[60px]"
          style={{
            color: buttonColor,
            backgroundColor: addOpacityToColor(buttonColor, 0.25),
          }}
        >
          {category}
        </span>
        <h1 className="font-extrabold">{heading}</h1>
        <p className="text-dark text-[14px]">{description}</p>
        <div
          className={`text-[14px] text-[#FFFFFF] max-w-[190px] font-bold rounded-[8px] gap-[5px] inline-flex items-center justify-center  py-2`}
          style={{ backgroundColor: buttonColor }}
        >
          <span>View case study </span>
          <img src={Vector} className="w-[12px] h-[12px] " />
        </div>
      </div>
      <div className=" lg:basis-[calc(50%-24px)]">
        <img
          src={image}
          alt=""
          className="w-full max-w-[445px] object-contain"
        />
      </div>
    </div>
  );
};

export default Work;

Work.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reverse: PropTypes.bool.isRequired,
  buttonColor: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
