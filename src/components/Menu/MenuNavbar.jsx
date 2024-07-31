import React from 'react'

const Menunavbar = () => {
  return (
    <div>
        <div className='md:flex items-center gap-10 h-[60px] hidden px-10'>
            <li className='list-none font-sans font-semibold'>Home</li>
            <li className='list-none font-sans font-semibold'>Shop</li>
            <li className='list-none font-sans font-semibold'>Contact Us</li>
            <li className='list-none font-sans font-semibold'>About Us</li>
            <li className='list-none font-sans font-semibold'>Track Orders</li>
            <li className='list-none font-sans font-semibold'>Blogs</li>
        </div>
    </div>
  )
}

export default Menunavbar