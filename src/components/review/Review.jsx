import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Review = () => {
  return (
    <div className='flex flex-col md:w-[70%] '>
        <div className='flex items-center gap-4'>
        <img src='https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11618206186775.jpg' className='border-2 w-[40px] h-[40px] rounded-full' />
      <p style={{fontFamily:"cursive"}} className='text-[grey] italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis ab id, cupiditate nobis tenetur. Porro mollitia sunt quo voluptatibus!</p>
        </div>
        <div className='flex md:px-4 items-end justify-end'>
            <AiFillStar style={{color:"goldenrod"}}/>
            <AiFillStar style={{color:"goldenrod"}}/>
            <AiFillStar style={{color:"goldenrod"}}/>
            <AiFillStar style={{color:"goldenrod"}}/>
            <AiFillStar style={{color:"goldenrod"}}/>
        </div>
    </div>
  )
}

export default Review
