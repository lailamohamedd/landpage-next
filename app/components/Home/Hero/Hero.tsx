import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen pt-[4vh] md:pt-[12vh] bg-[#f7f6fb]">
      <div className="w-[90%] md:w-[80%] h-full flex flex-col justify-center mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            {/* Top box */}
            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white ">
              <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
                News
              </div>
              <p className="text-xs sm:text-sm">
                We have updated our term & condition policy
              </p>
            </div>
            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3-5rem]"
            >
              The premier workspace companion for your daily needs.
            </h1>
            {/* Description */}
            <p className="text-gray-700 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              aspernatur atque consequatur, tempore hic aliquid quod quam unde
              voluptatem soluta?
            </p>
            {/* play store and app store image */}
            <div className="flex mt-0 mb-0 items-center space-x-4">
              <Image
                src="/images/googleplay.png"
                alt="Play store"
                width={150}
                height={150}
                className="object-contain"
              />
              <Image
                src="/images/appstore.png"
                alt="App store"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
          {/* Image Content */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="hidden lg:block"
          >
            <Image
              src="/images/hero.png"
              alt="hero img"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
