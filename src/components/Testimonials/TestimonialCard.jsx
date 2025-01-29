import React from "react";
import PropTypes from "prop-types";
import quote from "../../assets/quote.png";

const TestimonialCard = ({ description, image, name }) => {
  return (
    <div className="relative border border-[#E5E5E5] rounded-[10px] border-gradient-to-r px-[30px] basis-[445px]  lg:basis-[calc(50%-20px)] flex-1 flex flex-col gap-[20px] justify-center">
      <div className="absolute top-0 -translate-y-1/2">
        <img src={quote} />
      </div>
      <p className="text-dark font-[14px]">{description}</p>
      <div className="flex items-center gap-[20px]">
        <img src={image} alt="client" className="rounded-full" />
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default TestimonialCard;

TestimonialCard.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
