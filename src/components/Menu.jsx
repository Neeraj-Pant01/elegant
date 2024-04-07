"use-client"
import React from 'react'
import { AiFillCloseSquare } from "react-icons/ai"
import home from  "../app/home.module.css"

const Menu = ({setOpen, open}) => {
  return (
    <div className={`${home.anime} fixed flex top-0 w-[90%] bg-gradient-to-b from-[rgba(173,216,230)] to-[rgba(255,192,203)] right-0 md:hidden flex-col h-screen transition-all z-50`}>
      <div className='flex'>
        <AiFillCloseSquare className='text-4xl' onClick={()=>setOpen(false)}/>
      </div>
    </div>
  )
}

export default Menu
