import React from 'react'
import { GrLocation } from "react-icons/gr";
import restoimg from "../images/restoimg.jpg";

const DeliveryDetails=(resto)=>{
    return(
        <div>
            <div className='px-[50px] pt-5'>
                <img src={restoimg} alt='restoimg' width={240}/>
                <div className='py-2 px-16 flex flex-row '> 
                    <GrLocation size={20} />
                    <h1 className='pl-1 font-serif'>{resto.location}</h1>
                </div>
            </div>
                <div className='flex flex-col px-16 text-orange-700'>
                    <h1 className='font-bold text-[20px]'>{resto.name}</h1>
                    <h1 className='text-md'>Ratings: {resto.ratings}</h1>
                    <h1 className='text-gray-400'>View more</h1>
                    <button type='submit' className=''>Book now</button>
                </div>
        </div>
    )
}
function Deliverycard() {
  return (
    <div>
        <DeliveryDetails location="Trichy" name="Meridian" ratings="4.9"/>
    </div>
  )
}

export default Deliverycard