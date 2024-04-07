import React from 'react'
import home from "./home.module.css"
import Poster from '@/components/Poster'
import Product from '@/components/Product'
import Summer from '@/components/posters/Summer'

const Home = () => {
  return (
    <>
    <div className={`${home.bb} homepage min-h-screen`}>
      <div className='flex flex-col items-center py-20'>
        <h1 className='text-xl text-center md:text-5xl font-bold text-[rgba(0,0,0,0.7)]'>"REMEMBER BEAUTY IS FROM INSIDE"</h1>
        <p className='text-md px-5 md:px-0 text-center md:text-2xl mt-3 text-[#2d2c2c]'>WE CAN HELP YOU ACHEIVE THE BEST VERSION OF YOURSELF</p>
      </div>
      <div className={`flex mb-auto items-center flex-col mt-20 md:mt-28 gap-2`}>
        {/* <div className='bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text'> */}
      <h1 className='text-2xl md:text-3xl font-bold text-[#813737]'>SO ELEGANT</h1>
      <p className='text-md md:text2xl uppercase text-[rgba(0,0,0,0.7)] text-center'>Don't compare yourself; instead, strive to become your best self.</p>
      </div>
    </div>
    <div className='flex flex-col items-center justify-center py-5 md:flex-row bg-[white] gap-3 mt-5 w-fit'>
      <Poster />
      <Poster />
      <Poster />
      <Poster />
    </div>
    <div className='flex flex-col items-center justify-center mt-20 gap-5'>
      <h1 className='text-[grey] text-xl md:text-2xl font-bold'>OUR POPULAR PRODUCTS</h1>
      <div className='flex items-center justify-center flex-wrap gap-5 w-screen overflow-hidden'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

      </div>
    </div>
    <Summer />
    </>
  )
}

export default Home
