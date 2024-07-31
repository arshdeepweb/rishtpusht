import React from 'react'
import { images } from '../../assets/assets'
import { MdAccountBox } from "react-icons/md";
import { PiTrolleySuitcase } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center flex-col md:flex-row my-[2rem]'>
        <div className='flex items-start justify-evenly w-full'>
        <div className='md:hidden flex items-center'>
        <FaBars />
        </div>
            <img src={images.logo} alt="" className='w-[120px]'/>
        </div>
        <div className='flex gap-6 items-center '>
            <form className='flex gap-3 md:w-[34rem] lg:w-[44rem] w-full h-[49px] border-2 items-center border-solid rounded-full px-6 border-gray-200'>
            <IoSearch className='text-[1.5rem]'/>
            <input type="text" placeholder='Search' className='flex w-full md:w-[400px] border-2 border-transparent outline-none border-gray-500'/>
            </form>
            <div className='hidden md:flex gap-6 items-center mr-12'>
            <button className='flex gap-3 items-center border-2 border-solid rounded-full px-6 py-3 border-gray-500'><MdAccountBox className='text-[1.5rem]'/>Account</button>
            <button className='flex gap-2 items-center min border-2 border-solid border-[#000000] rounded-full text-white bg-[#000000] px-6 py-3'><PiTrolleySuitcase className='text-[1.5rem]' />Rs.0.00</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar