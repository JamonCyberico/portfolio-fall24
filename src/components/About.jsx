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
        <div className="group flex gap">
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary">
            View work
            <span className="group-hover:rotate-90 duration-300">
              <ArrowRightIcon className="ml-2 w-6 text-white" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
