import React from 'react'

const Header = () => {
    return (
        <div>
            <div className='bg-[url(/header.jpg)] h-[60vh] relative bg-cover justify-center flex items-center bg-center rounded-xl bg-no-repeat'>
                <div className='flex flex-col px-8 justify-center sm:text-left w-[100%] gap-8 z-10 relative sm:w-[60%]'>
                    <img src="./" alt="" />
                    <p className='text-xl text-white text-center font-bold font-sans'>RISHTPUSHT</p>
                    <h2 className='text-3xl text-white text-center  font-bold font-sans'>WORLD'S LEADING AYURVEDA BASED HEALTHCARE BRAND
                    </h2>
                    <button className='text-white w-[8rem] border-2 border-white hover:bg-green-600 hover:text-white border-solid m-auto bg-transparent rounded-2xl py-2 px-5'>View More</button>
                </div>
                <div className='h-[60vh] bg-black opacity-45 w-[100%] absolute top-[0%] rounded-xl'></div>
            </div>

        </div>
    )
}

export default Header