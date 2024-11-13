import React from 'react';

export const Navbar = () => {
  return (
    <header className="bg-[#162623] w-full h-14 flex items-center">
      <nav className="flex justify-between items-center w-full px-4 mr-12 ml-12">
        <img src="src/assets/logo.png" alt="Company logo" className="h-6" />
        <div className="flex space-x-8 ">
          <button className="text-white">Login</button>
          <button className="text-black bg-white px-4 py-2 rounded">Start for free</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
