"use client"
import React from 'react'
import style from "./style.module.css"

const Button = ({i,q,selected, setSelected}) => {

    const handleQuantity = () =>{
        setSelected(i)
    }
  return (
    <div className={selected===i ? style.bg : style.bb} key={i} onClick={handleQuantity}>{q}ml</div>
  )
}

export default Button
