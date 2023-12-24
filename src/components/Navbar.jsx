import React from 'react'
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div className='mx-auto flex justify-between items-center p-4 bg-white '>
      <div className='flex items-center'>
      <AiOutlineMenu size={20} />
        <Link to='/' className='text-3xl px-10'>
            Eat <span className='font-bold text-orange-500'>Best Foods</span>
        </Link>
        <div className='flex items-center bg-white rounded-2xl'>
            <Link to='/dining' className='p-2 text-white-300 bg-white rounded-2xl font-bold'>Dining</Link>
            <Link to='/delivery' className='p-2 rounded-2xl font-bold bg-orange-500 text-white'>Delivery</Link>
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