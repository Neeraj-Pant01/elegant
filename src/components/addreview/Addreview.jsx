"use client"
import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const Addreview = () => {
    const [index, setIndex] = useState(0)

    const handleStarClick = (i)=>{
        setIndex(i)
    }

  return (
    <div className='flex flex-col items-center mt-10 gap-2'>
      <h1 className='text-[grey] text-2xl'>ADD A REVIEW</h1>
      <textarea placeholder='enter your review' className='border-2 rounded-md px-4 outline-none w-[70%] h-[100px] resize-none' />
      <div className='flex items-center gap-2'>
      {
        Array.from({length:5}).map((_,i)=><AiFillStar key={i} style={{color: `${i <= index ? "goldenrod" : "grey"}`}} onClick={() => handleStarClick(i)} 
        className={`cursor-pointer text-xl`} />)
      }
      </div>
      <button className='px-4 py-2 bg-[#459b45] text-[white] rounded-md hover:bg-[#77b577]'>ADD REVIEW</button>
    </div>
  )
}

export default Addreview
