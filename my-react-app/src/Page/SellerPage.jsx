import React from "react";
import SellerHeader from "../component/SellerUI/SellerHeader";
import SellerSection from "../component/SellerUI/SellerSection";
import Footer from "../component/Footer";

const SellerPage = () => {
  return (
    <div className="bg-[#1E1E1E] h-screen relative">
      <SellerHeader />
      <div>
        <SellerSection />
        
      </div>
     
    </div>
  );
};

export default SellerPage;
