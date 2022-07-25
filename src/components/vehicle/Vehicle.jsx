import React from 'react'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Vehicle = ({vehicle}) => {

  return (
    <div className='flex flex-col w-3/12 h-full relative mx-3  mb-10'>
      <div className='container mx-auto w-full h-auto flex flex-col  shadow-2xl border-black border-[1px]'>
        <div className='w-full h-full'>
            <img src={require("../../assets/images/img1.jpg")} alt="img1" />
        </div>
        <div className='flex flex-col w-full h-full px-3 justify-center items-center'>
          <h3 className='w-full flex flex-row justify-center text-xl mb-3  uppercase'>{vehicle.brand +" "+vehicle.model+" "+vehicle.regYear}</h3>
          <div className=' grid  grid-cols-2 justify-between items-center '>
            <div className='flex flex-col gap-y-1'>
              <div className='flex flex-row '>
                <label className=' text-gray-600'>Type :</label>
                <h3 className=' text-gray-900'>{vehicle.type}</h3>
              </div>
              <div className='flex flex-row '>
                <lable className=' text-gray-600'>A/C :</lable>
                <h3 className=' text-gray-900'>{vehicle.acType}</h3>
              </div>
              <div className='flex flex-row'>
                <label className=' text-gray-600'>speed :</label>
                <h3 className=' text-gray-900'>{vehicle.speed}</h3>
              </div>
              <div className='flex flex-row'>
                <lable className=' text-gray-600'>Fuel type :</lable>
                <h3 className=' text-gray-900'>{vehicle.fuelType}</h3>
              </div>
            </div>
            <div className='flex flex-col gap-y-1'>
              <div className='flex flex-row '>
                <label className=' text-gray-600'>No Passenger :</label>
                <h3 className=' text-gray-900'>{vehicle.passenger}</h3>
              </div>
              <div className='flex flex-row'>
                <label className=' text-gray-600'>Engine CC :</label>
                <h3 className=' text-gray-900'>{vehicle.engCapacity}</h3>
              </div>
              <div className='flex flex-row'>
                <label className=' text-gray-600'>No of Door :</label>
                <h3 className=' text-gray-900'>{vehicle.door}</h3>
              </div>
              <div className='flex flex-row'>
                <label className=' text-gray-600'>Tranmission :</label>
                <h3 className=' text-gray-900'>{vehicle.transmissionType}</h3>
              </div>
            </div>
          </div>
          <div className='flex flex-col my-4 justify-center items-center'>
            <button className='w-auto h-auto px-4 py-2 bg-blue-700 text-white text-base font-bold rounded-full'>Book now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Vehicle;