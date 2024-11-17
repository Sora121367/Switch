import React from 'react';

const HomePage = () => {
  return (
    <main className='relative h-screen'>
      <div className='w-full opacity-70'>
        <img src='src/assets/banner.png' alt='banner' className='' />
      </div>
      <div className='absolute z-10 text-center top-20 ml-[160px]'>
        <h1 className='text-3xl sm:text-xl md:text-4xl font-bold text-gray-800 mb-4'>
          Explore a World of Unique Shops and Products Tailored Just for You!
        </h1>
        <button
          className='px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-700 transition-all'
          aria-label='Get started for free'
        >
          Get started for free
        </button>
      </div>
    </main>
  );
};

export default HomePage;
