import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch} from "react-icons/ai"
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { TbFilterStar } from "react-icons/tb";


function Navbar() {
  const [filterPop, setFilterPop] = useState(false);
  const [profilePop, setProfilePop] = useState(false);
  return (
    <>
    {
      filterPop &&
      <div className='bg-slate-200 w-full h-full fixed top-0 left-0 flex items-center justify-center'>
        <div className='w-[200px] h-[200px] bg-slate-400 flex flex-col items-center justify-center'>
          <h1 className='cursor-pointer' onClick={() => setFilterPop(false)}>Close</h1>
        <div className='flex flex-col'>
        <label className='text-white' htmlFor="">Location</label>
        <select name="location" placeholder="Location" id="">
          <option value="">Banglore</option>
          <option value="">Chennai</option>
          <option value="">Coimbatore</option>
          <option value="">Dindigul</option>
          <option value="">Salem</option>
          <option value="">Pondicherry</option>
          <option value="">Trichy</option>
          <option value="">Madurai</option>
        </select>
        </div>
        </div>
        
      </div>
    }

    
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
  
      <div className='flex w-[350px] justify-evenly'>
        <div onClick={() => setFilterPop(true)}><TbFilterStar size={30}/></div>
        <input type='text' placeholder='Enter food' className='bg-gray-100 rounded-xl drop-shadow-md px-2'></input>
        <AiOutlineSearch size={30} className='justify-center'/>
        <CgProfile onClick={() => setProfilePop(true)} size={30}/>
        {
      profilePop &&
      <div className='bg-slate-400 absolute right-0 mt-8 h-[300px] w-[200px]'>
        <div className='flex flex-col items-center justify-center h-full'>
        <button>Login</button>
        <p>OR</p>
        <button>Signup</button>
        </div>
      </div>
    }
       </div>
    </div>
    
    </>
  )
}

export default Navbar