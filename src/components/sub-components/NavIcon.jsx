"use client"
import React  from 'react'
import Image from "next/image";

const NavIcon = ({setOpen, open}) => {
  return (
    <div>
                <Image className="flex md:hidden" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVlrM_gPuWI1eV2W8gV053gI9fl_rFe9Tb5x1hMf08rA&s"} width={20} height={20} alt="" onClick={()=>{
                    setOpen(true)
                }}/>
    </div>
  )
}

export default NavIcon
