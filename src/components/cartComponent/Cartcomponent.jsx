"use client"
import React, { useState } from 'react'

const Cartcomponent = () => {
    const options = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div className='flex items-center border justify-between bg-[white] px-6 py-4 rounded-md'>
      <img src='https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11618206186775.jpg' className='w-[100px]'/>
      <div className='flex flex-col flex-1 md:ml-14 gap-2'>
        <span>productName</span>
        <p className='text-[grey]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quos tenetur rem dolorum voluptatem illum exercitationem enim laudantium obcaecati qui.</p>
        <select className='border outline-none w-max cursor-pointer'>
            <option disabled selected hidden>select quantity</option>
            {
                options.map((o,i)=>{
                    return (
                        <option key={i} value={o}>{o}</option>
                    )
                })
            }
        </select>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex items-center justify-center gap-3'>
            <b>QUANTITY</b>
            <span>2</span>
        </div>
        <div className='flex items-center justify-center gap-3'>
            <b>TOTAL</b>
            <span>1999</span>
        </div>
        <button className='px-4 py-2 border rounded-md cursor-pointer w-max self-center mt-2 text-[grey]'>ORDER NOW</button>
      </div>
    </div>
  )
}

export default Cartcomponent
