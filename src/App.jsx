import React, { useEffect, useState } from 'react'
import MiniNavbar from './components/Mininavbar/MiniNavbar'
import Navbar from './components/Navbar/Navbar'
import Menunavbar from './components/Menu/MenuNavbar.jsx'
import Header from './components/Header/Header.jsx'
import Product from './components/Product/Product.jsx'
import BestSelling from './components/BestSelling/BestSelling.jsx'
import Footer from './components/Footer/Footer.jsx'


const App = () => {




  useEffect(() => {
    
    const folder = fetch("/product/")
    if(folder){
      console.log(folder);
    } else {
      console.log("Error");
    }
    
  }, [])
  


  return (
    <div>
      <MiniNavbar />
      <Navbar />
      <hr className='bg-gray-200 w-full'/>
      <Menunavbar />
      <Header />
      <Product />
      <BestSelling />
      <Footer />
    </div>
  )
}

export default App