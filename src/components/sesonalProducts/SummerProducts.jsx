import React from 'react'

const SummerProducts = () => {
  return (
    <div className='flex flex-col w-[90%] md:w-[300px] bg-[white] items-center border py-4 mb-4 px-2 cursor-pointer rounded-md'>
      <img className='w-[90%] rounded-md' src='https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11618206186775.jpg' alt='product-image' />
      <div className='flex items-center flex-col'>
        <div className='flex items-center justify-center gap-4 mt-2'>
        <span className='md:text-lg'>Product Name</span>
        <span className='bg-[yellowgreen] text-[white] outline-none border-none px-4 py-[1px] text-center cursor-pointer rounded-md font-bold'>buy</span>
        </div>
        <div className='flex items-center gap-2'>
            <span className='text-xl text-[yellowgreen]'>₹999</span>
            <span className='text-[grey] line-through'>1299</span>
        </div>
        <div style={{fontFamily: "cursive"}} className='flex items-center justify-center text-center text-[14px] px-2 mt-2 text-[grey]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sunt repellat perferendis accusantium dolorem quis placeat saepe sint hic, nesciunt veniam nulla maiores corporis natus laborum possimus tenetur autem totam?
        </div>
      </div>
    </div>
  )
}

export default SummerProducts
