import React from "react";
import PropTypes from "prop-types";

const WorkCard = ({ name, description, image, buttonText, buttonColor }) => {
  return (
    <div className="flex flex-col gap-[40px] min-w-[300px]  basis-[calc(33%-30px)]">
      <div className="max-w-[445px]">
        <img src={image} className="w-full rounded-[10px] object-contain" />
      </div>
      <div className="flex flex-col gap-[20px] max-w-[445px] h-[100%]">
        <h1 className="font-extrabold text-[24px]">{name}</h1>
        <p className="text-dark font-[14px] flex-1">{description}</p>
        <span
          className={`${buttonColor} max-w-[140px] rounded-[4px] text-center py-[9px] text-[14px] text-[#FFFFFF] font-bold`}
        >
          {buttonText}
        </span>
      </div>
    </div>
  );
};

export default WorkCard;

WorkCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonColor: PropTypes.string.isRequired,
};
