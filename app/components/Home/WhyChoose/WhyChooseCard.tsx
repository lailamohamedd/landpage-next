import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  linkText: string;
};
const WhyChooseCard = ({ image, title, linkText }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={100}
        height={100}
        className="object-contain mx-auto"
      />
      <h1 className="mt-5 mb-5 text-lg md:text-xl capitalize font-semibold text-gray-800 text-center">
        {title}
      </h1>
      <p className="text-gray-600 text-center font-medium text-sm mb-7">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        asperiores! adipisicing elit.
      </p>
      <p className="text-center font-semibold text-blue-900 hover:text-blue-950 transition-all duration-200 cursor-pointer">
        {linkText} &#8594;
      </p>
    </div>
  );
};

export default WhyChooseCard;
