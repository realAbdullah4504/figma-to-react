import React from "react";
import TestimonialsDescription from "./TestimonialsDescription";
import TestimonialCard from "./TestimonialCard";

const cardDetails = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "src/assets/client1.png",
    name: "Client Name",
  },
  {
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "src/assets/client2.png",
    name: "Client Name",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "src/assets/client3.png",
    name: "Client Name",
  },
  {
    description:
      "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    image: "src/assets/client4.png",
    name: "Client Name",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-primaryDark text-[#FFFFFF] min-h-[100vh] flex flex-col py-[80px]">
      <TestimonialsDescription />
      <div className="mt-[60px]  flex flex-wrap gap-[30px] w-[85%] m-auto flex-1">
        {cardDetails.map((card, index) => (
          <TestimonialCard
            key={index}
            description={card.description}
            image={card.image}
            name={card.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
