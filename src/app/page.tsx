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
      <div className='flex justify-start'>
        <h1 className='text-[20px] font-serif ml-[20px] mt-[-170px] md:ml-[70px] md:mt-[-620px] md:text-[70px]'>Enjoy Healthy And<br></br>Delicious Food</h1>
      </div>
      <div className='flex justify-start'>
        <button className=' bg-black text-white w-[120px] h-[30px] ml-[20px] mt-[-100px] md:w-[200px] md:h-[70px] rounded-full md:mt-[-400px] md:ml-[70px]'>Order Now</button>
      </div>
    </div>
  );
} 
