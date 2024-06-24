import React from 'react';
import { Link } from 'react-router-dom';
import WomanImg from '../img/woman_hero.png';

const Hero = () => {
  return (
    <section className='h-[800px] bg-blue-500 bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pretitle */}
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>
            <span></span>
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
           <br />
            <span className='font-semibold'>Angela's E-Shop</span>
          </h1>
          <Link
            to='/'
            className='self-start uppercase font-semibold border-b-2 border-primary'
          >
            Shop Now
          </Link>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          <img src={WomanImg} alt='Woman in stylish autumn fashion' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
