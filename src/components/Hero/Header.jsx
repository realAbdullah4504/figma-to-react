import { useState } from "react";

const navItems = [
  {
    name: "Home",
    path: "/",
    icon: "",
  },
  {
    name: "Case Studies",
    path: "#caseStudies",
    icon: "",
  },
  {
    name: "Testimonials",
    path: "#testmonials",
    icon: "",
  },
  {
    name: "Recent work",
    path: "#recentWork",
    icon: "",
  },
];

const socialLinks = [
  {
    icon: "src/assets/LinkedIn.png",
  },
  {
    icon: "src/assets/Behance.png",
  },
  {
    icon: "src/assets/Twitter.png",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="text-[#FFFFFF] fixed top-0 w-[85%] left-1/2 -translate-x-1/2 bg-secondaryDark rounded-b-[8px] min-h-[70px] z-50  px-4 flex justify-between">
        <button
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen
              ? "flex absolute md:static top-[65px] rounded-b-[8px]  bg-secondaryDark inset-x-0"
              : "hidden"
          } md:flex md:flex-row flex-col  md:px-0 gap-4 md:gap-[70px]  md:pt-[21px] pb-[25px] `}
        >
          {navItems.map((item) => (
            <a key={item.name} href={item.path} className="">
              {item.name}
            </a>
          ))}
        </div>

        <div
          className={`${
            isMenuOpen
              ? "flex absolute md:static top-[220px] rounded-b-[8px]  bg-secondaryDark inset-x-0"
              : "hidden"
          } md:flex gap-[25px] p-4 items-center `}
        >
          {socialLinks.map((item) => (
            <a key={item.icon} href="">
              <img src={item.icon} alt="" className="" />
            </a>
          ))}
        </div>
      </div>
  );
};
export default Header;
