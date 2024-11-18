import React from "react";

const HomePage = () => {
  return (
    <main className="relative w-full h-screen">
      {/* Banner Image */}
      <img
        src="src/assets/banner.png"
        alt="banner"
        className="opacity-80 w-full rounded-b-lg object-cover h-[200px] sm:h-64 md:h-80 lg:h-auto"
      />

      {/* Text Block */}
      <div className="absolute z-10 text-center top-14 md:top-20 px-4 w-full">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4">
          Explore a World of Unique Shops and Products Tailored Just for You!
        </h1>
        <button
          className="px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-700 transition-all sm:h"
          aria-label="Get started for free"
        >
          Get started for free
        </button>
      </div>

      <div className=" w-[500px] h-[330px] p-14 ">
        <h1 className="text-4xl font-bold text-[#1E1E1E] ">
          Plan started at $0
        </h1>

        <p className="text-gray-600 leading-relaxed mt-4">
          You read that right. We’re not just talking about a free trial. We
          want to empower anyone to open an online store and make money doing
          what they love.
          <br />
          <br />
          Get started with a free online store and upgrade as you grow, or
          choose from one of our affordable premium plans now.
        </p>
      </div>

      <div>
        <h1 className="text-[40px] font-bold px-14">Shop by category </h1>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
