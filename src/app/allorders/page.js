import Order from '@/components/order/Order'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-[#f0eded] py-5'>
      <div className='flex flex-col items-center justify-center gap-[20px]'>
        <span className='md:text-3xl text-[grey]'>YOUR ORDERS</span>
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
      </div>
    </div>
  )
}

export default page
