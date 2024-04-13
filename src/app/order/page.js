import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen px-10'>
        <div className='flex'>
      <div className='flex flex-col mt-4 flex-1 items-center justify-center'>
        <img src='https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11618206186775.jpg' className='h-[300px]' />

        <div className='flex flex-col mt-6 gap-3'>
            <b className='mb-5 text-[grey]'>CHECKOUT DETAILS</b>
            <div className='flex items-center gap-4  justify-between'>
                <b>PRODUCT PRICE :</b>
                <b className='text-[grey]'>999</b>
            </div>
            <div className='flex items-center gap-4  justify-between'>
                <b>DELIVERY CHARGE :</b>
                <b className='text-[grey]'>0.00</b>
            </div>
            <div className='flex items-center gap-4  justify-between'>
                <b>TOTAL AMOUNT :</b>
                <b className='text-[grey]'>999</b>
            </div>
            <button className='py-2 px-4 border border-[black] rounded-md mt-4'>CONFIRM ORDER</button>
        </div>
      </div>
      <div className='flex flex-1 flex-col gap-4 mt-4'>
        <input type='text' className='border outline-none px-4 py-2 w-[50%]' value={'prev value'} />
        <input type='text' className='border outline-none px-4 py-2 w-[50%]' value={'prev value'} />
        <input type='text' className='border outline-none px-4 py-2 w-[50%]' value={'prev value'} />
        <input type='text' className='border outline-none px-4 py-2 w-[50%]' value={'prev value'} />
        <input type='text' className='border outline-none px-4 py-2 w-[50%]' value={'prev value'} />
        <textarea className='border resize-none h-[100px] outline-none px-4 py-2 w-[50%]'/>
        <button className='py-2 px-4 w-[50%] bg-[lightseagreen]'>UPDATE DELIVERY ADDRESS</button>
    </div>
    </div>
    </div>
  )
}

export default page
