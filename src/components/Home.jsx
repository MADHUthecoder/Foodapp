import React from 'react'
import image from '../images/logo1.png'
function Home() {
  return (
    <>
    <div className='flex flex-col items-center justify-center h-[565px] bg-[#fff0d4]'>
      <img src={image} alt='logo' className='h-[170px] w-[180px]' />
        <h1 className='font-bold text-grey-800 text-[50px] font-primary'>Premium</h1>
        <h1 className='text-[50px] text-[#007f4e] font-secondary'>quality</h1>
        <h1 className='text-[70px] text-[#79021c] font-tertiary'>Restaurant & Dishes</h1>
    </div>
    </>
  )
}

export default Home