import React from 'react'
import Deliverycard from '../components/Deliverycard'

function Delivery() {
  return (
    <div>
        <h1 className='font-title text-[40px] flex justify-center items-center text-[#79021c]'>Fastest delivery</h1>
        <h1 className='font-primary text-[15px] flex justify-center items-center text-[#f27b50] pb-2'>from your favourite restaurants</h1>
        <Deliverycard />
    </div>
  )
}

export default Delivery