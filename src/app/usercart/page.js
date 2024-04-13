import Cartcomponent from '@/components/cartComponent/Cartcomponent'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center relative min-h-screen bg-[#f0eded] gap-4'>
      <h2 className='md:text-2xl text-[grey] py-4'>CART ITEMS(10)</h2>
      <Cartcomponent />
      <Cartcomponent />
      <Cartcomponent />
      <Cartcomponent />
      <Cartcomponent />
      <Cartcomponent />
      <Cartcomponent />
      <div className='flex fixed items-center justify-center bottom-4 w-[80%]'>
        <button className='py-3 px-4 bg-[black] text-[white] rounded-md md:w-[50%]'>TOTAL CHECKOUT</button>
      </div>
    </div>
  )
}

export default page
