import React from 'react';
import { Krona_One } from '@next/font/google';

const kronaOne = Krona_One({ weight: '400', subsets: ['latin'] });

function Page() {
  return (
    <div className='relative flex h-screen'>
      <div style={{ backgroundColor: '#F09217' }} className='w-1/2'></div>
      <div className='w-1/2 bg-white'></div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className={`${kronaOne.className} text-[50px] md:text-[200px] tracking-wide font-bold `}>
          <span className='text-white'>EAT </span>SWIFT
        </h1>
      </div>
      <img 
        src='burgerauth.png' 
        className='absolute z-10 w-auto h-[200px] md:h-[500px]'
        style={{ 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
        }} 
      />
    </div>
  );
}

export default Page;