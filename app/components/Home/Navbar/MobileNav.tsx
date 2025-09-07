import { navLinks } from "@/app/constant/Constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};
const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "-translate-x-[100%]";
  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1000] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* NavLinks */}
      <div
        className={`text-white  ${navOpen} fixed justify-center transform transition-all duration-500 flex flex-col h-full delay-300 w-[80%] z-[10006] sm:w-[60%] bg-indigo-900 space-y-6`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            scroll={true}
            className="text-lg font-semibold hover:text-pink-700"
          >
            <p className="nav_link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.title}
            </p>
          </Link>
        ))}
        {/* Close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute cursor-pointer top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
