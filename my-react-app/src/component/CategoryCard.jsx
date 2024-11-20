import React from "react";

const CategoryCard = () => {
  return (
    <div className="w-[320px] h-[430px] rounded-[25px] flex flex-col items-center justify-between bg-[#0B5754] mt-4 ml-4 p-4 relative">
      {/* Title and Subtitle */}
      <div className="text-center py-4 space-y-2">
        <h1 className="text-3xl font-bold text-white">Dog Treat</h1>
        <p className="text-lg text-white">by animal</p>
      </div>

      {/* Image */}
      <div className="w-[184px] h-[184px] bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
        <img
          src="src/assets/image1.png"
          alt="Dog treat"
          className="w-full h-full object-cover"
        />
        {/* Discount Badge */}
        <div className="absolute -mt-[160px] right-10 w-[74px] h-[74px] bg-[#FA8F21] rounded-full flex flex-col items-center justify-center text-white text-sm font-bold shadow-lg">
          <p>OFF</p>
          <h3 className="text-xl">50%</h3>
        </div>
      </div>

      {/* Button */}
      <button className="w-[250px] py-2 bg-white text-black text-lg rounded-md hover:bg-white/10 transition-all">
        Shop Now
      </button>
    </div>
  );
};

export default CategoryCard;
