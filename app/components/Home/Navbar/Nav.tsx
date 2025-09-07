"use client";
import { navLinks } from "@/app/constant/Constant";
import Link from "next/link";
import React, { use, useEffect } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
type Props = {
  openNav: () => void;
};
const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = React.useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return (
    <div
      className={`w-full transition-all duration-200 h-[12vh] z-[1000] fixed ${
        navBg ? "bg-white shadow-md" : "fixed"
      }`}
    >
      <div className="flex justify-between items-center w-[90%] xl:w-[80%] h-full mx-auto">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold cursor-pointer">
          <span className="text-3xl md:text-4xl text-pink-700">A</span>ppify
        </h1>
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              scroll={true}
              className="text-lg font-semibold hover:text-pink-700"
            >
              <p className="nav_link">{link.title}</p>
            </Link>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-8 md:py-2.5 px-6 py-2 cursor-pointer font-semibold text-base bg-blue-700 rounded-full hover:bg-blue-900 text-white transition-all duration-200">
            Join Now
          </button>
        </div>
        {/* Burger Menu */}
        <HiBars3BottomRight
          onClick={openNav}
          className="w-8 h-8 cursor-pointer lg:hidden text-black"
        />
      </div>
    </div>
  );
};

export default Nav;
