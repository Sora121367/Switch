import React from "react";
import CustomerHeader from "../component/customer/CustomerHeader";
import CustomerSection from "../component/customer/CustomerSection";

const Customerpage = () => {
  return (
    <div className="bg-[#1E1E1E] h-screen relative">
      <CustomerHeader />

      <div className="">
           <CustomerSection/>
      </div>
    </div>
  );
};

export default Customerpage;
