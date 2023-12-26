import React from 'react'

function Signup() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='font-fourth text-[30px]'>Signup Details</h1>
            <div className='flex flex-col h-[500px] w-[400px] bg-slate-100 justify-center p-8  rounded-2xl drop-shadow-xl'>
            <label className='font-bold'>User Name: </label>
            <input type='text' placeholder='Enter name' value='' required></input>
            <label className='font-bold'>Age: </label>
            <input type='text' placeholder='Enter Age' value='' required></input>
            <label className='font-bold'>Contact: </label>
            <input type='text' placeholder='Enter Contact' value='' required></input>
            <label className='font-bold'>Password: </label>
            <input type='password' placeholder='Enter Password' value='' required></input>
            <label className='font-bold'>District: </label>
            <input type='text' placeholder='Enter District' value='' required></input>
            <label className='font-bold'>State: </label>
            <input type='text' placeholder='Enter State' value='' required></input>
            <label className='font-bold'>Pincode: </label>
            <input type='text' placeholder='Enter Pincode' value='' required></input>
            <button type='submit' className='flex items-center justify-center bg-orange-400 hover:bg-orange-900 text-white font-bold py-2 px-2 rounded h-8 w-[90px]'>
                Submit
            </button>
        </div>
        
    </div>
  )
}

export default Signup