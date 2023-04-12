import React from 'react'
import { FcApproval } from "react-icons/fc";

const success = () => {
  return (
    <>
      <div className=" flex justify-center items-center flex-col w-full h-screen font-bold text-3xl text-[black]">
        <>
          You have successfully payed with card!
        </>
        &nbsp;
        <br />
        <br />
        <span className='text-[145px]' > <FcApproval /> </span>
      </div>
    </>
  )
}

export default success