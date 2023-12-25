import React from 'react'
import Restaurantcard from '../components/Restaurantcard'

function Dining() {
  return (
    <div>
        <h1 className='font-title text-[40px] flex items-center justify-center text-[#79021c]'>List of Restaurants for you!</h1>
        <Restaurantcard />
    </div>
  )
}

export default Dining