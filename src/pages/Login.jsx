import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='font-fourth text-[40px]'>Login Details</h1>
        <div className='flex flex-col h-[250px] w-[300px] bg-slate-100 justify-center p-8 mt-8 rounded-2xl drop-shadow-xl'>
            <label className='font-bold'>User Name: </label>
            <input type='text' placeholder='Enter name' required></input>
            <label className='font-bold'>Password: </label>
            <input type='password' placeholder='Enter Password' required></input>
            <Link to="/" type='submit' className='flex items-center justify-center mx-auto bg-orange-400 hover:bg-orange-900 text-white font-bold my-4 rounded-2xl h-8 w-[90px]'>
                Submit
            </Link>
        </div>
    </div>
  )
}

export default Login