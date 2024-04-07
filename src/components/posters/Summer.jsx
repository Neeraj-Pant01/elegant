import React from 'react'
import SummerProducts from '../sesonalProducts/SummerProducts'

const Summer = () => {
  return (
    <div className='border mt-20 md:px-48 min-h-screen bg-gradient-to-b from-[rgba(255,240,0,0.5)] to-[rgba(154,205,50,0.7)] md:py-10'>
        <div className='flex flex-col items-center justify-center gap-2'>
        <h1 style={{fontFamily:"cursive"}} className='text-2xl md:text-4xl font-bold italic'>BEST OF THE SUMMERS</h1>
            <p style={{fontFamily:"cursive"}} className='text-center'>Transform your summer skincare routine with our products — harnessing the power to give you a radiant glow like never before. Don't just protect your skin; elevate its beauty</p>
        </div>
        <div className='flex h-[400px] flex-col md:flex-row items-center'>
            <img src='/lemon.png' className='h-[100%]' alt='' />
            <div style={{fontFamily:"cursive"}} className='text-xl italic hidden md:block'>
            "Embrace the natural freshness of lemon for your summer skincare. Rich in antioxidants and vitamin C, our lemon-infused products are your ticket to rejuvenated and healthy skin during the sun-soaked months. Elevate your glow with the goodness of lemon!"
            </div>
        </div>
        <h1 style={{fontFamily:"cursive"}} className='text-center text-2xl md:text-4xl font-bold text-[black] md:mb-10 md:mt-10'>EXPLORE SUMMER FRESHNESS</h1>
        <div className='flex flex-wrap items-center justify-center gap-8'>
            <SummerProducts />
            <SummerProducts />
            <SummerProducts />
            <SummerProducts />
            <SummerProducts />
            <SummerProducts />
        </div>
    </div>
  )
}

export default Summer
