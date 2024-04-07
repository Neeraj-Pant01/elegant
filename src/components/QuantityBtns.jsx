"use client"
import React, { useState } from 'react'
import Button from './sub-components/Button'

const quantity = [50, 100, 150, 200]

const QuantityBtns = () => {
    const [selected, setSelected] = useState(0)

  return (
    <div className='flex items-center gap-2 mt-2 flex-wrap'>
    {
        quantity.map((q,i)=><Button setSelected={setSelected} selected={selected} key={i} i={i} q={q} onclick={()=>alert("ram ram")}/>)
    }
</div>
  )
}

export default QuantityBtns
