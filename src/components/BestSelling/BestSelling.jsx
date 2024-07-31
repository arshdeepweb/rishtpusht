import React from 'react'
import { images } from '../../assets/assets'
import Product from '../Product/Product'
import { IoIosStarOutline } from "react-icons/io";

const BestSelling = () => {
    return (
        <div>
            <div>
                <h2 className='text-4xl text-center font-bold my-12'>Best Selling Products</h2>
            </div>
            <div className='w-[85%] m-auto my-6 md:h-[600px] flex flex-col md:flex-row border-2 border-solid border-gray-500 rounded-md'>
                <img src={images.sellingProduct} alt="" className='w-[100%] md:w-[50%]' />
                <div className='bg-gray-300 w-[1005] md:w-[50%] h-full py-10' >
                    <div className='w-[15rem] m-auto rounded-2xl  border-2 border-solid  bg-white border-gray-300'>
                        <div>
                            <img src={images.product1} alt="" className='rounded-2xl' />
                        </div>
                        <div className='px-7 flex-col flex gap-2'>
                            <p>Rs.100.00</p>
                            <h3 className='text-2xl font-bold'>Giloy Tab</h3>
                            <div className='flex gap-3 items-center'>
                                <div className='flex'>
                                    <IoIosStarOutline />
                                    <IoIosStarOutline />
                                    <IoIosStarOutline />
                                    <IoIosStarOutline />
                                    <IoIosStarOutline />
                                </div>
                                <p>No review</p>
                            </div>
                            <div className='mb-10 mt-4'>
                                <button className='text-black w-full border-2 border-slate-700 hover:border-green-600 hover:bg-green-600 hover:text-white border-solid m-auto bg-transparent rounded-full py-2 px-5'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestSelling