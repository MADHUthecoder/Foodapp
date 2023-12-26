import React from 'react'

function Login() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='font-fourth text-[40px]'>Login Details</h1>
        <div className='flex flex-col h-[400px] w-[400px] bg-slate-100 justify-center p-8 m-8 rounded-2xl drop-shadow-xl'>
            <label className='font-bold'>User Name: </label>
            <input type='text' placeholder='Enter name' value='' required></input>
            <label className='font-bold'>Age: </label>
            <input type='text' placeholder='Enter Age' value='' required></input>
            <label className='font-bold'>Contact: </label>
            <input type='text' placeholder='Enter Contact' value='' required></input>
            <label className='font-bold'>Door no: </label>
            <input type='text' placeholder='Enter Address' value='' required></input>
            <label className='font-bold'>Street name: </label>
            <input type='text' placeholder='Enter Street name' value='' required></input>
            <label className='font-bold'>District: </label>
            <input type='text' placeholder='Enter District' value='' required></input>
            <label className='font-bold'>State: </label>
            <input type='text' placeholder='Enter State' value='' required></input>
            <label className='font-bold'>Pincode: </label>
            <input type='text' placeholder='Enter Pincode' value='' required></input>
        </div>
    </div>
  )
}

export default Login