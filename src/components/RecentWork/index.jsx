import RecentWorkDescription from "./RecentWorkDescription";
import WorkCard from "./WorkCard";

const workDetails = [
  {
    name: "Work name here",
    description:
      "Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "src/assets/work1.png",
    buttonText: "Know more",
    buttonColor: "bg-[#62BA1B]",
  },
  {
    name: "Work name here",
    description:
      "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",
    image: "src/assets/work2.png",
    buttonText: "Know more",
    buttonColor: "bg-[#62BA1B]",
  },
  {
    name: "Work name here",
    description:
      "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",
    image: "src/assets/work2.png",
    buttonText: "Know more",
    buttonColor: "bg-[#62BA1B]",
  },

  {
    name: "Work name here",
    description:
      "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",
    image: "src/assets/work2.png",
    buttonText: "Know more",
    buttonColor: "bg-[#62BA1B]",
  },
  {
    name: "Work name here",
    description:
      "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",
    image: "src/assets/work2.png",
    buttonText: "Know more",
    buttonColor: "bg-[#62BA1B]",
  },
  {
    name: "Work name here",
    description:
      "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",
    image: "src/assets/work2.png",
    buttonText: "Know more",
    buttonColor: "bg-[#62BA1B]",
  },
  {
    name: "Work name here",
    description:
      "Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod tempor incididunt u",
    image: "src/assets/work2.png",
    buttonText: "Know more",
    buttonColor: "bg-[#62BA1B]",
  },
];

const RecentWork = () => {
  return (
    <div className="min-h-[100vh] flex flex-col py-[80px] gap-[60px]">
      <RecentWorkDescription />
      <div className="flex w-[85%] mx-auto gap-[30px] flex-wrap">
        {workDetails.map((work, index) => (
          <WorkCard
            key={index}
            name={work.name}
            description={work.description}
            image={work.image}
            buttonText={work.buttonText}
            buttonColor={work.buttonColor}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentWork;
