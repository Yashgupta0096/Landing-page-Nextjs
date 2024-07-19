'use client';

import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="bg-cover bg-center h-700 m-5 p-5 h-[600px] flex flex-col md:flex-row items-center justify-between border-2 rounded-3xl bg-[url('/assets/header1.webp')]">
      <div className="flex flex-col items-start">
        <p className="text-xl md:text-2xl">Ahead app</p>
        <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4">Master your life by mastering emotions</h1>
        <div className="flex items-center mt-4">
          <a href="#" className="btn bg-black text-white px-4 py-2 rounded-full mr-4">Download on the AppStore</a>
          <div className="flex items-center">
            <span className="text-xl">⭐️⭐️⭐️⭐️⭐️</span>
            <span className="ml-2 text-lg">100+ AppStore reviews</span>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        <Image src="/assets/head1.png" alt="App preview" width={300} height={600} />
      </div>
    </div>
  );
};

export default Header;
