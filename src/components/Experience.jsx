import React from "react";

const Experience = () => {
  return (
    <div name="experience" className="w-full h-screen bg-primary">
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4">
        <div>
          <p className="text-3xl font-bold inline border-b-4 text-white border-pink-700">
            Experience
          </p>
          <p className="text-gray-300 py-3">Check out some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          <div className="group container content-div rounded-md shadow-lg flex justify-center items-center mx-auto">
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white">
                ReactJS Application
              </span>
              <div className="pt-10 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 mx-4 bg-white text-gray-300 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-300 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
