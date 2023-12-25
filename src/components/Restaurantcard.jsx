import React from 'react'
import { GrLocation } from "react-icons/gr";
import restoimg from "../images/restoimg.jpg";

const Details=(resto)=>{
    return(
        <div className='bg-gray-100 m-5 p-5'>
            <div className='px-[50px] pt-5 flex flex-col justify-center items-center'>
                <img src={restoimg} alt='restoimg' width={250}/>
                <div className='py-2 flex flex-row items-center'> 
                    <GrLocation size={20} />
                    <h1 className='pl-1 font-serif'>{resto.location}</h1>
                </div>
            </div>
                <div className='flex flex-col items-center text-orange-700'>
                    <h1 className='font-bold text-[25px]'>{resto.name}</h1>
                    <h1 className='text-lg'>Ratings: {resto.ratings}</h1>
                    <h1 className='text-gray-400'>View more</h1>
                    <button type='submit' className='flex items-start justify-center bg-orange-400 hover:bg-orange-900 text-white font-bold py-2 px-4 rounded h-10 w-[120px]'>
                        Book now
                    </button>
                </div>
        </div>
    )
}
function Restaurantcard() {
  return (
    <div className='grid grid-cols-3 px-10'>
      <Details location="Banglore" name="Alberto Cafe" ratings="4.5"/>  
      <Details location="Chennai" name="Sunset Grill" ratings="4.0"/>  
      <Details location="Salem" name="AM Briyani" ratings="4.7"/> 
      <Details location="Trichy" name="Meridian" ratings="4.9"/>  
      <Details location="Coimbatore" name="Radisson" ratings="4.2"/>   

    </div>
  )
}

export default Restaurantcard