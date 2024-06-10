import React, { useState } from "react";
import { LOGO_NAME } from "../constants.ts";

import {
  Bars3Icon,
  XMarkIcon,
  BuildingOfficeIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import NavSocialItem from "./NavSocialItem.jsx";

const navItems = [
  {
    text: "LinkedIn",
    href: "/",
    bgColor: "blue-600",
    Icon: BuildingOfficeIcon,
  },
  {
    text: "GitHub",
    href: "/",
    bgColor: "orange-700",
    Icon: CodeBracketIcon,
  },
  {
    text: "Mail",
    href: "/",
    bgColor: "gray-600",
    Icon: EnvelopeIcon,
  },
  {
    text: "CV",
    href: "/",
    bgColor: "purple-600",
    Icon: IdentificationIcon,
  },
];

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const handleNavClick = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="fixed text-white w-full h-[80px] bg-primary flex justify-between items-center px-4">
      <div>
        <p className="text-4xl">{LOGO_NAME}</p>
      </div>

      {/* Menu for desktop screens (>= 768px) */}
      <ul className="hidden md:flex gap-4">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Skills</li>
        <li className="cursor-pointer">Experience</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      <div onClick={handleNavClick} className="md:hidden z-10">
        {!mobileNav ? (
          <Bars3Icon className="w-6 text-white" />
        ) : (
          <XMarkIcon className="w-6 text-white" />
        )}
      </div>

      {/* Menu for mobile screens */}
      <ul
        className={
          mobileNav
            ? "absolute top-0 left-0 w-full h-screen justify-center items-center flex flex-col gap-6 bg-primary"
            : "hidden"
        }
      >
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Contact</li>
      </ul>

      <div className="fixed flex flex-col left-0 top-[35%]">
        <ul className="text-white">
          {navItems.map((item, index) => (
            <NavSocialItem
              key={index}
              text={item.text}
              href={item.href}
              bgColor={item.bgColor}
              Icon={item.Icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
