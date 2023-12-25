import React from 'react'
import { GrLocation } from "react-icons/gr";
import restoimg from "../images/restoimg.jpg";

const DeliveryDetails=(resto)=>{
    return(
        <div className='bg-[#f7f7ff] rounded-2xl drop-shadow-xl m-5 p-5'>
            <div className='px-[50px] pt-5 flex flex-col justify-center items-center'>
                <img src={restoimg} alt='restoimg' width={250}/>
                <div className='py-2 items-center flex flex-row'> 
                    <GrLocation size={20} />
                    <h1 className='pl-1 font-serif'>{resto.location}</h1>
                </div>
            </div>
                <div className='flex flex-col items-center text-orange-700'>
                    <h1 className='font-bold text-[25px]'>{resto.name}</h1>
                    <h1 className='text-lg'>Ratings: {resto.ratings}</h1>
                    <h1 className='text-gray-400'>View more</h1>
                    <button type='submit' className='flex items-start justify-center bg-orange-400 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded h-10 w-[120px]'>
                        Order now
                    </button>
                </div>
        </div>
    )
    }
function Deliverycard() {
  return (
    <div className='grid grid-cols-3 px-10'>
        <DeliveryDetails location="Trichy" name="Dominos" ratings="4.7"/>
        <DeliveryDetails location="Pondicherry" name="KFC" ratings="4.5"/>
        <DeliveryDetails location="Salem" name="Burger King" ratings="4.2"/>
        <DeliveryDetails location="Madurai" name="Mangalam" ratings="3.4"/>
        <DeliveryDetails location="Dindigul" name="Thalapakatti" ratings="4.9"/>
    </div>
  )
}

export default Deliverycard