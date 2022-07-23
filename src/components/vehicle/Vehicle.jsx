import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { data } from '../../data';

import {AiFillCar} from "react-icons/ai"
const Vehicle = () => {
  return (
    <div className='flex flex-col w-3/12 h-full relative mx-3  mb-10'>
      <div className='container mx-auto w-full h-auto flex flex-col  shadow-2xl border-black border-[1px]'>
        <div className='w-full h-full'>
            <img src={require("../../assets/images/img1.jpg")} alt="img1" />
        </div>
        <div className='flex flex-col w-full h-full px-3 justify-center items-center'>
          <h3 className='w-full flex flex-row justify-center text-xl mb-3'>TOYOTA PRIUS 3RD GEN 2012</h3>
          <div className=' grid  grid-cols-2 justify-between items-center '>
            <div className='flex flex-col gap-y-1'>
              <div className='flex flex-row '>
                <label className=' text-gray-600'>Type :</label>
                <h3 className=' text-gray-900'>Luxary</h3>
              </div>
              <div className='flex flex-row '>
                <lable className=' text-gray-600'>A/C :</lable>
                <h3 className=' text-gray-900'>Yes</h3>
              </div>
              <div className='flex flex-row'>
                <label className=' text-gray-600'>speed :</label>
                <h3 className=' text-gray-900'>280km/h</h3>
              </div>
              <div className='flex flex-row'>
                <lable className=' text-gray-600'>Fuel type :</lable>
                <h3 className=' text-gray-900'>Disel</h3>
              </div>
            </div>
            <div className='flex flex-col gap-y-1'>
              <div className='flex flex-row '>
                <label className=' text-gray-600'>No Passenger :</label>
                <h3 className=' text-gray-900'>05</h3>
              </div>
              <div className='flex flex-row'>
                <label className=' text-gray-600'>Engine CC :</label>
                <h3 className=' text-gray-900'>1800cc</h3>
              </div>
              <div className='flex flex-row'>
                <label className=' text-gray-600'>No of Door :</label>
                <h3 className=' text-gray-900'>04</h3>
              </div>
              <div className='flex flex-row'>
                <label className=' text-gray-600'>Tranmission :</label>
                <h3 className=' text-gray-900'>Auto</h3>
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