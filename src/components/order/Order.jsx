"use client"
import React, { useState } from 'react'

const Order = () => {
    const [orderStatus, setOrderStatus] = useState("pending")
  return (
    <div className=' rounded-md flex items-center justify-center py-3 px-4 bg-[white] cursor-pointer'>
      <div className='flex flex-1 items-center justify-center'>
        <img src='https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11618206186775.jpg' className='w-[100px]'/>
      </div>
      <div className='flex flex-1 flex-col gap-2'>
        <span>ProductName</span>
        <p className='text-[grey]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam impedit delectus similique eligendi praesentium tempore nam eos esse soluta consectetur!</p>
        <span className='text-[green]'>PRICE : 999</span>
      </div>
      <div className='flex flex-1 gap-2'>
      <b>STATUS</b>
      <span style={{color:`${orderStatus==="pending" ? "goldenrod" : "red"}`}}>PENDING</span>
      </div>
    </div>
  )
}

export default Order
