import React from 'react';
import { Krona_One,Inria_Sans } from '@next/font/google';
import Btn from '@/app/_components/shared/btn';
import Link from 'next/link';

const kronaOne = Krona_One({ weight: '400', subsets: ['latin'] });
const InriaSans = Inria_Sans({weight:'700', subsets: ['latin'] })

function Page() {
  return (
    <div className='relative flex h-screen'>
      <div style={{ backgroundColor: '#F09217' }} className='w-1/2'></div>
      <div className='w-1/2 bg-white'></div>
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className={`${kronaOne.className} text-[50px] md:text-[200px] lg:text-[200px] tracking-wide font-bold `}>
          <span className='text-white'>EAT </span>SWIFT
        </h1>
      </div>
      <img 
        src='burgerauth.png' 
        className='absolute w-auto h-[200px] md:h-[500px] lg:h-[500px]'
        style={{ 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
        }} 
      />
      <div 
        className='absolute w-auto h-auto p-5 text-center md:p-10 lg:p-10 bg-white bg-opacity-50 rounded-md'
        style={{
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)',
        }}
      >
        <h1 className={`${kronaOne.className} tracking-widest text-[30px]`}>Welcome</h1><br />
        <form className='flex flex-col space-y-6'>
          <input
            required
            type='text'
            placeholder='Username'
            className='p-2 rounded-md'
          />
          <input
            required
            type='password'
            placeholder='Password'
            className='p-2 rounded-md'
          />
          <Link href={'/'}>
          <Btn />
          </Link>
          <h6 className='font-serif'>Don't have an account?<Link href={'/Signup'}><span className={`${InriaSans.className} font-bold`}>Sign up</span></Link></h6>
        </form>
      </div>
    </div>
  );
}

export default Page;