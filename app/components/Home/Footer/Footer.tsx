import Link from "next/link";
import React from "react";
import {
  FaClock,
  FaDribbble,
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white py-10">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Logo and description */}
          <div>
            {/* Logo  */}
            <h1 className="text-xl md:text-2xl font-bold cursor-pointer">
              <span className="text-3xl md:text-4xl text-pink-700">A</span>ppify
            </h1>
            {/* Description */}
            <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-800">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              expedita.
            </p>
          </div>
          {/* About us Links  */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">About Us</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Support Center</li>
              <li>Customer Support</li>
              <li>About Us</li>
              <li>Copyright</li>
              <li>Popular Campaign</li>
            </ul>
          </div>
          {/* Our Information Links  */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Our Information
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li>Return Policy</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Site Map</li>
              <li>Store Hours</li>
            </ul>
          </div>
          {/* Contact Info  */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Info
            </h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                California, USA
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2" />
                +2 392 3929 210
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" />7 Days - 8AM to 9PM
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2" />
                info.example@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="mt-8 border-t text-sm border-gray-400 pt-8 flex items-center justify-between md:flex-row flex-col">
        <p className="text-center md:text-left px-4">
          Copyright © 2025 Appify. All rights reserved
        </p>
        <div className="flex items-center space-x-4 px-4 mt-4 md:mt-0">
          <span>Social:</span>
          <Link href="0" className="text-gray-500 hover:text-gray-800">
            <FaFacebook />
          </Link>
          <Link href="0" className="text-gray-500 hover:text-gray-800">
            <FaTwitter />
          </Link>
          <Link href="0" className="text-gray-500 hover:text-gray-800">
            <FaDribbble />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
