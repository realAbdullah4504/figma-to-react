import React from "react";

const ContactCard = () => {
  return (
    <div className="max-w-[350px] w-full flex flex-col gap-[20px]">
      <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="username"
      >
        Username
      </label>
      <input
        className="rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id="username"
        type="text"
        placeholder="Username"
      ></input>
      </div>
      <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="mobile"
      >
        Mobile
      </label>
      <input
        className="rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id="mobile"
        type="text"
        placeholder="Enter mobile"
      ></input>
      </div>
      <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="mobile"
      >
        Message
      </label>
      <textarea
        className="rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        id="mobile"
        type="text"
        rows={8}
        placeholder="Enter your message"
      ></textarea>
      </div>
      <span className="bg-[#3F8E00] py-3 rounded-[4px] text-center">Submit</span>
    </div>
  );
};

export default ContactCard;
