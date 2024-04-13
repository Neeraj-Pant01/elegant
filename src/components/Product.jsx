"use client"
import React from 'react'
import QuantityBtns from './QuantityBtns'
import { useRouter } from 'next/navigation'

const Product = () => {
  const router = useRouter()
  return (
    <div className='flex flex-col md:w-[20%] w-[45%] flex-wrap mb-8 cursor-pointer border-2 px-2 py-2 border-[black] rounded-md' onClick={()=>router.push(`/products/1`)}>
      <img src='https://etimg.etb2bimg.com/photo/103689045.cms' className='border rounded-md'/>
      <div className='flex flex-col gap-2'>
        <b className='md:mb-5 '>PRODUCT NAME</b>
        <span className='text-[grey]'>with argon oil</span>

        <QuantityBtns />

        <div className='flex items-center gap-2'>
            <span className='md:text-xl'>₹200</span>
            <span className='text-[maroon] line-through '>₹240</span>
            </div>
            <div className='flex bg-[black] text-[white] text-center p-[5px] md:p-[8px] rounded-md items-center justify-center cursor-pointer'>
                Add To Cart
            </div>
      </div>
    </div>
  )
}

export default Product
