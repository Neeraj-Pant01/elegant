import React from 'react'

const Poster = () => {
  return (
    <div className='flex relative z-0 flex-col w-[90%] md:w-[22%] rounded-md'>
      <img className='w-full' src='https://img.forestessentialsindia.com/pub/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/h/a/hair_serum.jpg' />
      <div className='absolute w-full h-full bg-gradient-to-r from-[rgba(0,0,0,0.6)] to-[rgba(255,0,0,0.4)] flex flex-col items-center justify-center rounded-md'>
        <h1 className='text-[black] text-2xl md:text-4xl font-bold'>BUY NOW</h1>
        <h1 className='text-[lightgrey] text-2xl md:text-4xl font-bold'>AT 999/</h1>
      </div>
    </div>
  )
}

export default Poster
