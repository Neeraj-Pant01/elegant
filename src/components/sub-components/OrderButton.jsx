"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const OrderButton = () => {

    const router = useRouter()

    const handleOrder = (e) =>{
        e.preventDefault();
        router.push(`/order`)
    }

  return (
    <button className='bg-[lightblue] py-2 px-2' onClick={handleOrder}>PLACE ORDER</button>
  )
}

export default OrderButton
