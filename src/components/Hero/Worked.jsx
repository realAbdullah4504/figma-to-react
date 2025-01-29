import React from "react";
import clickup from "../../assets/clickup.png";
import dropbox from "../../assets/dropbox.png";
import payohex from "../../assets/payohex.png";
import Elastic from "../../assets/Elastic.png";
import stripe from "../../assets/stripe.png";

const Worked = () => {
  // Create an array of image objects
  const images = [
    { src: clickup, alt: "Clickup" },
    { src: dropbox, alt: "Dropbox" },
    { src: payohex, alt: "Payohex" },
    { src: Elastic, alt: "Elastic" },
    { src: stripe, alt: "Stripe" },
  ];

  return (
    <div className="w-[85%] px-10 mx-auto mt-[50px] lg:mt-0 mb-[4px]">
      <span className="font-[14px]">Worked with</span>
      <div className="flex flex-wrap  gap-[30px]  justify-center items-center mt-4 mb-12">
        {images.map((image, index) => (
          <div
            key={index}
            className="sm:basis-[calc(50%-30px)] md:basis-[calc(33%-30px)] lg:basis-[calc(20%-30px)] p-[20px] border border-[#1B1B1B] "
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-[28px] w-auto mx-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Worked;
