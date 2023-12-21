import React from 'react'
import image from '../images/logo1.png'
function Home() {
  return (
    <>
    
    <div className='flex flex-col items-center justify-center h-[550px]'>
      <img src={image} alt='logo' className='h-[150px] w-[170px]' />
        <h1 className='font-bold font-serif text-red-500 text-[50px]'>Premium</h1>
        <h1 className='font-serif  text-[35px] text-yellow-700'>quality</h1>
        <h1 className='font-extrabold text-[70px] text-orange-600'>Restaurant & Dishes</h1>
    </div>
    </>
  )
}

export default Home