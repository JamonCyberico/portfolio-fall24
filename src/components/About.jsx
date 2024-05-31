import React from "react";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <div name="about" className="bg-primary h-screen w-full">
      <div className="text-white max-w-[1000px] flex flex-col px-[100px] justify-center h-full">
        <p className="text-pink-700">Hi, my name is</p>
        <h1 className="text-6xl md:text-4xl text-white font-bold">
          Anthony Ajami
        </h1>
        <h2 className="text-gray-300 md:text-4xl text-6xl font-bold">
          I'm a Frontend developer
        </h2>
        <p className="text-gray-300 max-w-[700px] py-4">
          I specialize in building interfaces for web and mobile apps.
          Currently, I am focusing on cross-platform developement with the Ionic
          framework
        </p>
        <div className="group flex cursor-pointer gap-3 item-center justify-center py-2 px-6 mx-auto text-white border-2 bg-primary hover:bg-secondary">
          <button>View Work</button>
          <ArrowRightIcon className="text-white w-4 group-hover:rotate-90" />
        </div>
      </div>
    </div>
  );
};

export default About;
