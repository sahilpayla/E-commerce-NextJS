import React from 'react'
import Image from 'next/image'
import banner from '../public/assets/banner.jpg'

const Hero = () => {
  return (
    <div className='h-[500px] w-full flex justify-center mt-16 mb-[15rem]'>
      <div className='relative h-[500px] w-10/12 mx-auto'>
        <Image className='h-[500px] object-cover rounded-xl' src={banner} alt="" />
        <div className='absolute top-[10rem] left-[2.5rem] flex flex-col items-center gap-4'>
          <span className='text-white text-bold text-4xl'>Get some nice <span className='text-white-500'>Products</span></span>
          <span className='text-[#efefefe8] text-3xl'>At a distance of a click</span>
          <button className='mt-6 bg-red-500 text-[#efefef] px-8 py-2 rounded-xl text-[18px]
          transition-all hover:bg-white-600'>See now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero