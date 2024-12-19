import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { MdOutlinePointOfSale } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { GiBoxUnpacking } from "react-icons/gi";
import { BsFillPeopleFill, BsFillCartPlusFill } from "react-icons/bs";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaPaperPlane } from "react-icons/fa";
import Header from "../component/SellerUI/Header";
import Sidebar from "../component/SellerUI/Sidebar";
import Home from "../component/SellerUI/Home";
import Messages from "../component/SellerUI/Message";
import MyProduct from "../component/SellerUI/MyProduct";
import Order from "../component/SellerUI/Order";
import DiscountProduct from "../component/SellerUI/DiscountProduct";
import Customer from "../component/SellerUI/Customer";

const SellerDashboard = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  const sidebarItems = [
    { label: "Home", icon: IoHomeSharp, path: "/" },
    { label: "My Products", icon: GiBoxUnpacking, path: "/my-products" },
    {
      label: "My Sales",
      icon: MdOutlinePointOfSale,
      path: "/orders",
      subItems: [
        { label: "Orders", path: "/orders" },
        { label: "Customers", path: "/customers" },
      ],
    },
    { label: "Discounts", icon: RiDiscountPercentFill, path: "/discounts" },
    { label: "Messages", icon: FaPaperPlane, path: "/messages" },
  ];

  // Synchronize activeItem with the current path
  useEffect(() => {
    const currentItem = sidebarItems.find((item) => item.path === location.pathname);
    if (currentItem) {
      setActiveItem(currentItem.label);
    }
  }, [location.pathname]); // Update when the pathname changes

  return (
    <div className="w-full bg-[#0B5754] flex flex-col overflow-y-hidden">
      {/* Header Section */}
      <div>
        <Header />
      </div>

      {/* Main Content Section */}
      <div className="flex h-screen flex-grow bg-white">
        {/* Sidebar */}
        <div>
          <Sidebar
            items={sidebarItems}
            activeItem={activeItem}
            setActiveItem={(label) => setActiveItem(label)}
          />
        </div>

        {/* Scrollable Content */}
        <div className="p-5 flex-grow overflow-y-auto">
          <header className="flex items-center justify-between text-lg lg:text-xl mb-6">
            <div className="flex items-center gap-3">
              <h1 className="font-semibold text-2xl">{activeItem}</h1>
            </div>
            <div className="flex items-center gap-3 cursor-pointer hover:text-blue-300">
              <h1 className="text-xl">View Store</h1>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<Messages setActiveItem={setActiveItem} />} />
            <Route path="/my-products" element={<MyProduct setActiveItem={setActiveItem} />} />
            <Route path="/orders" element={<Order setActiveItem={setActiveItem} />} />
            <Route path="/discounts" element={<DiscountProduct />} />
            <Route  path="/customers" element = {<Customer/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
