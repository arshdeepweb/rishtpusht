import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className='bg-[#016332] py-[100px] text-white  flex-col md:flex-row flex justify-center items-center md:justify-evenly'>
                <div className='text-center md:text-justify flex flex-col gap-5'>
                    <h4 className='text-xl text-white font-bold font-sans'>Contact us</h4>
                    <div className='flex flex-col gap-3'>
                        <p>info@ndayurveda.com</p>
                        <p>Got questions? Call us 24/7!</p>
                        <p>USA: +1(888) 624-5925 / +1(407)777-0062</p>
                        <p>INDIA: +91-7791006006 / +91-7307032211</p>
                    </div>
                    <div>
                        <div className='flex gap-4 justify-center  items-center '>
                            <FaFacebookF className='text-[24px]' />
                            <IoLogoInstagram className='text-[24px]' />
                            <FaYoutube className='text-[24px]' />
                        </div>
                    </div>
                </div>
                
                <div className='text-justify flex flex-col gap-5 my-6'>
                    <h4 className='text-xl text-white font-bold font-sans'>Information</h4>
                    <div className='flex flex-col gap-3'>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Refund Policy</a>
                        <a href="#">Trems of Services</a>
                    </div>
                </div>

                <div className='text-justify flex flex-col gap-5 my-6'>
                    <h4 className='text-xl text-white font-bold font-sans'>Account</h4>
                    <div className='flex flex-col gap-3'>
                        <a href="#">Register</a>
                        <a href="#">Login</a>
                    </div>
                </div>
                
            </div>
            <div className='bg-[#016332] text-white '>
                <hr className='bg-gray-500 w-full'/>
                <div className='py-6 px-6'>
                    <p>copyright &copy; 2024 RishtPusht</p>
                </div>
            </div>
        </div>
    )
}

export default Footer