import React, { useEffect, useState } from 'react'
import { images, products } from '../../assets/assets'
import { IoIosStarOutline } from "react-icons/io";


const Product = () => {

    const [productList, setproductList] = useState([])
    
    useEffect(() => {
      
        setproductList(products)
        
    }, [])
    

  return (
    <div className='w-[80%] m-auto py-[100px]'>
        <div className='flex flex-col md:flex-row justify-between mb-[2rem]'>
            <h2 className='text-2xl font-sans font-bold'>New Arrival</h2>
            <a href="#" className=''><u>View All Product</u></a>
        </div>

<div className=' flex justify-evenly flex-wrap'>
    {productList.map((item, index)=>{
          
          return (
            <div key={index}>
                        
        <div className='w-[300px] rounded-xl border-2 border-solid my-4 border-gray-300'>
            <div>
                <img src={item.image} alt="" />
            </div>
            <div className='px-7 flex-col flex gap-2'>
                <p>{item.price}</p>
                <h3 className='text-2xl font-bold'>{item.name}</h3>
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
          )
        
      })}
</div>

        
        
    </div>
  )
}

export default Product