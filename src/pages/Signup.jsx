import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='font-fourth text-[30px]'>Signup Details</h1>
            <div className='flex flex-col h-[450px] w-[400px] bg-slate-100 justify-center p-8  rounded-2xl drop-shadow-xl'>
            <label className='font-bold'>User Name: </label>
            <input type='text' placeholder='Enter name' required></input>
            <label className='font-bold'>Age: </label>
            <input type='text' placeholder='Enter Age' required></input>
            <label className='font-bold'>Contact: </label>
            <input type='text' placeholder='Enter Contact' required></input>
            <label className='font-bold'>Password: </label>
            <input type='password' placeholder='Enter Password' required></input>
            <label className='font-bold'>District: </label>
            <input type='text' placeholder='Enter Distric' required></input>
            <label className='font-bold'>State: </label>
            <input type='text' placeholder='Enter State' required></input>
            <label className='font-bold'>Pincode: </label>
            <input type='text' placeholder='Enter Pincode' required></input>
            <Link to="/" type='submit' className='flex items-center justify-center mx-auto bg-orange-400 hover:bg-orange-900 text-white font-bold my-4 p-3 rounded-2xl h-8 w-[90px]'>
                Submit
            </Link>
        </div>
        
    </div>
  )
}

export default Signup