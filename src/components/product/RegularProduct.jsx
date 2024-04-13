import React from 'react'

const RegularProduct = ({router}) => {

  const navigate = () =>{
    router.push('products/1')
  }

  return (
    <div className='bg-[white] rounded-md flex items-center justify-center flex-col py-3 md:mb-4 md:w-[370px] w-[90%] cursor-pointer' onClick={navigate}>
      <img src='https://media.istockphoto.com/id/1458639401/photo/red-lipstick-close-up-on-pink-background.webp?b=1&s=170667a&w=0&k=20&c=2CZDdGuByThDbpm1a1iKWOAPOevBd31Mucv8dRL0JtI=' className='w-[80%] rounded-md'/>
      <div className='flex items-center gap-2'>
        <b className='text-[green] md:text-xl'>₹999</b>
        <b className='text-[grey] line-through'>1299</b>
      </div>
      <div className='flex items-center gap-3'>
        <span className='text-lg text-[grey]'>ProductName</span>
        <button className='px-2 py-1 rounded-md bg-[brown] text-[white] mt-2'>BUY NOW</button>
      </div>
      <div style={{fontFamily:"cursive"}} className='flex items-center italic w-[80%] text-center mt-4 text-[grey]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugit asperiores hic porro facilis ullam, ut, libero ea iure, repellat aliquam nisi? Dicta in maxime illum nemo, blanditiis facere. Animi!
      </div>
    </div>
  )
}

export default RegularProduct
