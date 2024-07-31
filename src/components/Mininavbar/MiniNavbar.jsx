import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const MiniNavbar = () => {
  return (
    <div className='w-full'>
        <div className='grid w-[full] grid-cols-3 h-[42px] text-white bg-[#016332]'>
            <div className='flex gap-4 ml-[70px] items-center '>
                <FaFacebookF className='text-[24px]' />
                <IoLogoInstagram className='text-[24px]'/>
                <FaYoutube className='text-[24px]'/>
            </div>
            <div className='text-center flex items-center'>
                <p className='text-[14px]'>Call us 24/7 Helplines USA: +1(888) 624-5925 | INDIA +91-7791006006</p>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default MiniNavbar