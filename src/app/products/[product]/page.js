import QuantityBtns from '@/components/QuantityBtns'
import Addreview from '@/components/addreview/Addreview'
import Review from '@/components/review/Review'
import React from 'react'

const page = () => {
  return (
    <div className=''>
        <div className='flex flex-col md:flex-row min-h-screen w-screen'>
            <div className='mt-2 flex-1 flex items-center flex-col md:sticky top-[100px] h-[600px]'>
                <img src='https://res.cloudinary.com/purnesh/image/upload/w_540,f_auto,q_auto:eco,c_limit/11618206186775.jpg' alt='product-image' className='w-[80%] h-[400px] rounded-md'/>
                <div className='flex flex-col items-center mt-3 gap-1 md:mb-4'>
                    <div className='flex gap-4 items-center'>
                    <h1 style={{fontFamily:"cursive"}} className='text-[rgba(0,0,0,0.9)]  md:text-xl italic'>PRODUCTNAME</h1>
                        <b className='text-2xl text-[green]'>₹999</b>
                    </div>
                    <p className='text-[grey] italic w-[80%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lorem id libero consectetur efficitur. Vivamus gravida eleifend magna.</p>
                </div>
                <QuantityBtns />
            </div>
            <div className='flex-col flex-1 flex items-center'>
                <h1 className='text-[lightseagreen] md:text-xl my-4'>ENTER DELIVERY DETAILS </h1>
                <form className='flex w-[80%] flex-col gap-3'>
                    <input type='text' className='border outline-none px-4 py-2' placeholder='enter mobile number' />

                    <input type='text' className='border outline-none px-4 py-2' placeholder='enter state' />

                    <input type='text' className='border outline-none px-4 py-2' placeholder='enter city' />

                    <input type='text' className='border outline-none px-4 py-2' placeholder='enter pincode' />

                    <input type='text' className='border outline-none px-4 py-2' placeholder='enter nearest landmark' />
                    <textarea type='text' className='border resize-none h-[100px] outline-none px-4 py-2' placeholder='enter the custom address like home no , street etc' />

                    <button className='bg-[lightblue] py-2 px-2'>PLACE ORDER</button>
                </form>

                <div className='flex flex-col md:mt-20'>
                <h1 style={{fontFamily:"cursive"}} className='text-[black] text-center text-2xl'>CUSTOMER REVIEWS</h1>
                <p className='text-[grey] text-center' style={{fontFamily:"cursive"}}>see what our community says about this product</p>

                <Addreview />

                <div className='flex flex-col items-center mt-14 gap-5'>
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
