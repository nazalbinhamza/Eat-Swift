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
      <div className='flex justify-start'>
          <h1 className='font-bold font-kantumruy text-[15px] mt-[-30px] ml-[20px] md:text-[25px] md:ml-[90px] md:mt-[-50px] tracking-widest'>What's on your mind?</h1>
      </div>
      <div className='flex justify-start gap-4 md:gap-24'>
          <img className='ml-[10px] w-[60px] h-[60px] md:h-auto md:w-[200px] md:ml-[70px] md:mt-[30px]' src='biriyani.png' />
          <img className='w-[60px] h-[60px] md:h-auto md:w-[200px] md:mt-[30px]' src='icecream.png' />
          <img className='w-[60px] h-[60px] md:h-auto md:w-[200px] md:mt-[30px]' src='cakes.png' />
          <img className='w-[60px] h-[60px] md:h-auto md:w-[200px] md:mt-[30px]' src='paratha.png' />
          <img className='w-[60px] h-[60px] md:h-auto md:w-[200px] md:mt-[30px]' src='noodles.png' />
      </div>
      <div className='flex justify-start text-[10px] gap-10 font-semibold md:gap-52 md:text-[18px]'>
          <h1 className='ml-[23px] md:ml-[130px]'>Biriyani</h1>
          <h1 className='ml-[-10px]'>IceCream</h1>
          <h1 className='ml-[10px] md:ml-[50px]'>Cakes</h1>
          <h1 className='ml-[10px] md:ml-[50px]'>Paratha</h1>
          <h1 className='mr-[10px] md:ml-[10px]'>Noodles</h1>
      </div>
    </div>
  );
} 
