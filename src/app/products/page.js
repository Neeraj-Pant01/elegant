"use client"
import RegularProduct from '@/components/product/RegularProduct'
import React, { useState } from 'react'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

function page() {
  const [openmenu, setOpenMenu] = useState(false)
  const [sort, setSort] = useState("NEW")
  const router = "hello boy !"
  return (
    <div className='flex min-h-screen flex-col items-center gap-5 bg-[#fbf9f9] bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThIUPx6MYgjzeJgj7Q4-Tdai_yP16ejHzalEY5emgACA&s")]'>
      <div className='flex items-center justify-center gap-5 mt-8'>
        <b className='text-[balck]'>ADD FILTERS</b>
        <input type='number' placeholder='min' className='border outline-none py-2 px-3 rounded-sm' />
        <input type='number' placeholder='max' className='border rounded-sm outline-none py-2 px-3' />
        <b className='flex items-center gap-2'>SORT BY 
        {
          openmenu ?
          <AiOutlineArrowUp className='cursor-pointer' onClick={()=>setOpenMenu(false)}/>
          :
          <AiOutlineArrowDown className='cursor-pointer' onClick={()=>setOpenMenu(true)}/>
        }
        </b>
        <div className='flex flex-col relative border w-[100px] items-center'>
          <b>{sort}</b>
          {
            openmenu &&
            <div className='absolute border w-[100px] flex items-center justify-center cursor-pointer bottom-[-30px]'>
              {
                sort === "NEW"
                ?
                <b className='' onClick={()=>{setSort("SALES")
                setOpenMenu(false)}
              }>SALES</b>
                :
                <b onClick={()=>{setSort("NEW")
                setOpenMenu(false)
              }}>NEW</b>
              }
              </div>
          }
        </div>
      </div>
      <div className='flex rounded-md border items-center w-max  mt-5'>
        <input type='text' className='border-0 outline-none px-3 py-2 w-[300px]' placeholder='enter the product to search' />
        <button className='bg-[green] text-[white] px-3 py-2 rounded-md'>
          search
        </button>
      </div>
      <div className='flex gap-5 md:px-5 mt-5 flex-wrap items-center justify-center'>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
        <RegularProduct router={router}/>
      </div>
    </div>
  )
}

export default page
