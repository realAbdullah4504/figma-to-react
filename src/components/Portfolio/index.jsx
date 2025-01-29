import React from "react";
import CaseStudies from "./CaseStudies";
import Work from "./Work";

const workDetails = [
  {
    heading: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "src/assets/Mask.png",
    link: "/",
    buttonColor:'#FFA217',
    category:"Fintech",
  },
  {
    heading: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "src/assets/Mask2.png",
    link: "/",
    buttonColor:'#000AFF',
    category:"EdTech",
  },
  {
    heading: "Work name here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "src/assets/Mask3.png",
    link: "/",
    buttonColor:'#2AB090',
    category:"Pharma",
  },
];

const Portfolio = () => {
  return (
    <div className="bg-[#F%F%F%] min-h-[1242px] w-full sm:w-[85%] md:w-[70%] m-auto my-[80px] flex flex-col gap-[76px]">
      <CaseStudies />
      {workDetails.map((work, index) => (
        <Work
          key={index}
          heading={work.heading}
          description={work.description}
          image={work.image}
          link={work.link}
          buttonColor={work.buttonColor}
          reverse={index % 2 === 1} // Reverse every other work item
          category={work.category}
        />
      ))}
    </div>
  );
};

export default Portfolio;

