import React from 'react';
import Nav from './_components/nav';

export default function Home() {
  return (
    <div className='home-container'>
      <Nav />
      <div className='flex justify-end md:mt-[-85px]'>
          <img className='w-[80%] z-[-1]' src='homebg.png' />
      </div>
      <div className='flex justify-end'>
        <img className='w-[50%] h-[50%] mt-[-180px] md:mt-[-750px]' src='food.png' />
      </div>
    </div>
  );
} 
