import React from 'react'
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <>
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-yellow-200'>
      <div className='flex items-center'>
      <AiOutlineMenu size={20} />
        <h1 className='text-3xl px-10'>
            Eat <span className='font-bold'>Best Foods</span>
        </h1>
        <div className='flex items-center bg-yellow-900 rounded-2xl'>
            <p className='p-2 text-yellow-300 bg-yellow-900 rounded-2xl font-bold'>Pickup</p>
            <p className='p-2 rounded-2xl font-bold bg-yellow-500 text-yellow-900'>Delivery</p>
        </div>
      </div>
      <div className='flex w-[300px] justify-evenly'>
        <input type='text' placeholder='Enter food' className='bg-gray-100 rounded-xl drop-shadow-md px-2'></input>
        <AiOutlineSearch size={30} className='justify-center'/>
        <CgProfile size={30}/>
       </div>
    </div>
    
    </>
  )
}

export default Navbar