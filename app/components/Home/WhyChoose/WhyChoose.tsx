import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div id="about" className="pt-16 pb-16">
      <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        Why you Choose Application
      </h1>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/images/choose1.png"
            title="Create Free Account"
            linkText="Start Earning"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <WhyChooseCard
            image="/images/choose2.webp"
            title="Monitor User Analytics"
            linkText="Sign up your store"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <WhyChooseCard
            image="/images/choose3.png"
            title="Save and Trusted"
            linkText="Get The App"
          />
        </div>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <WhyChooseCard
            image="/images/choose4.webp"
            title="Fast Customer Support"
            linkText="Learn More"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
