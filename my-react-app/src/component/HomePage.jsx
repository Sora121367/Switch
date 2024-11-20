import React from "react";
import bannerImage from "../assets/banner.png";
import CategoryCard from "./CategoryCard";


const HomePage = () => {
  return (
    <div className="relative w-full ">


      <div className="relative w-full">
        <img
          src={bannerImage}
          alt="Homepage banner"
          className="w-full  object-cover"
        />

        {/* Text and Button on Banner */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white font-bold text-xl sm:text-3xl lg:text-4xl  leading-tight">
            Explore a World of Unique Shops and <br />Products Tailored Just for You!
          </h1>
          <button
            className="mt-3 p-3 text-white bg-[#0B5754] rounded-md text-sm sm:text-md lg:text-xl lg:mt-16  hover:bg-blue-700 transition-all duration-300"
            aria-label="Get started for free"
          >
            Get started for free
          </button>
        </div>
      </div>

    {/* Feature and catategqries */}

    <div className="mt-20 px-20 py-4 bg-red-300 w-full h-[100vh]">
      <h1 className="text-2xl font-bold">Feature and catategqries </h1>
     
      <div>
      <CategoryCard/>
      </div>
    </div>

    </div>
  );
};

export default HomePage;
