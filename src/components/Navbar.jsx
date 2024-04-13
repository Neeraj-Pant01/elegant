"use client"
import React, { useState } from 'react'
import NavIcon from "@/components/sub-components/NavIcon";
import Menu from './Menu';
import Link from 'next/link';

const Navbar = () => {
    const [open, setOpen] = useState(false)

  return (
    <div className="flex bg-[white] sticky relative top-0 text-[black] py-8 px-10 items-center justify-between z-50">
    <div className="flex items-center">
      <Link href={'/'}>LOGO</Link>
    </div>

    <div className="flex items-center gap-5">
      <Link href={'/products'}>
      PRODUCTS
      </Link>
      <Link href={'/allorders'}>MY ORDERS</Link>
    </div>

    <div className='flex items-center'>
      <Link href={`/usercart`}>CART</Link>
    </div>

    <div className="flex items-center">PROFILE
    <NavIcon setOpen={setOpen} open={open}/>
    </div>
    {
        open && 
        <Menu setOpen={setOpen}/>
    }
  </div>
  )
}

export default Navbar
