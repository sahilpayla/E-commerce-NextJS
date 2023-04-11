import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1 from '../public/assets/iphone.jpg'
import img2 from '../public/assets/magic-keyboard.jpg'
import img3 from '../public/assets/pod.jpg'

const Categories = () => {
  return (
    <>
      <div className='h-full w-full flex justify-center'>
        <div className='h-full w-10/12'>
          {/* title */}
          <h2 className='mb-8 text-3xl text-[#333]'>Categories</h2>
          <div className='h-full w-full flex items-center justify-between'>
            {/* category */}
            <Link href='/category/iphone' className="h-[325px] w-[325px] relative">
              <Image src={img1} alt="" className="h-full w-full object-cover" />
              <span className="absolute bottom-0 left-0 rounded-xl bg-purple-500 px-6 py-2 text-white">Iphone </span>
            </Link>
            {/* category */}
            <Link href='/category/laptop' className="h-[325px] w-[325px] relative">
              <Image src={img2} alt="" className="h-full w-full object-cover" />
              <span className="absolute bottom-0 left-0 rounded-xl bg-red-500 px-6 py-2 text-white">Laptop</span>
            </Link>
            {/* category */}
            <Link href='/category/music' className="h-[325px] w-[325px] relative" >
              <Image src={img3} alt="" className="h-full w-full object-cover" />
              <span className="absolute bottom-0 left-0 rounded-xl bg-pink-500 px-6 py-2 text-white">Music</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Categories