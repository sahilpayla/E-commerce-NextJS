import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-r from-violet-500 to-fuchsia-500 py-20 h-full w-full flex justify-center mt-[10rem] pb-12'>
      <div className='h-full w-10/12 grid grid-cols-3 justify-between'>
        {/* column */}
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold mb-8 text-[#e5e7eb]'>FAQ</h2>
          <span>Where we are based</span>
          <span>How we operate</span>
          <span>Refund policy</span>
        </div>
        {/* column */}
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold mb-8 text-[#e5e7eb]'>Contacts</h2>
          <span>Instagram: Amazing_Apple_Store</span>
          <span>Gmail: applestore@gmail.com</span>
          <span>YouTube: HereWillBeSoon</span>
        </div>
        {/* column */}
        <div className='flex flex-col gap-2'>
          <h2 className='text-2xl font-bold mb-8 text-[#e5e7eb]'>Privacy Policy</h2>
          <p>
            Copyright © 2023 Apple Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer