import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Find = () => {

    const navigate = useNavigate();
    const [vehicles,setVehicls]=useState('')
    const findAvailableVehicles = ()=>{
       fetch(
        "https://jsonplaceholder.typicode.com/posts"
       ).then((res)=>res.json()).then((json)=>{
           setVehicls(json);
           navigate("/expo");
       })
    }

  return (
    <div className='flex flex-col w-full h-full absolute top-[800px]'>
        <div className='container mx-auto w-full h-auto flex flex-row bg-lime-100 py-10 px-8 border-[1px] border-black shadow-black  shadow-2xl'>
                <div className='flex flex-row  justify-center items-center mr-4'>
                    <label className=' text-base text-zinc-700 mr-5'>Driving Type</label>
                    <select className=' bg-gray-300 p-3 w-[100%]'>
                        <option value="" disabled selected hidden >select here...</option>
                        <option>Self Drive</option>
                        <option>with Driver</option>
                    </select>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Pickup Branch</label>
                    <select className='bg-gray-300 p-3 w-[100%]'>
                        <option value="" disabled selected hidden>select here...</option>
                        <option>Colombo</option>
                        <option>Galle</option>
                        <option>Kandy</option>
                    </select>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Pickup Date</label>
                    <input  className='bg-gray-300 p-3 w-[100%]' type="date"/>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Pickup Time</label>
                    <input className='bg-gray-300 p-3 w-[100%]' type="date"/>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Return Date</label>
                    <input className='bg-gray-300 p-3 w-[100%]' type="date"/>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Vehicle Type</label>
                    <select className='bg-gray-300 p-3 w-[100%]'>
                        <option value="" disabled selected hidden>select here...</option>
                        <option>Car</option>
                        <option>Van</option>
                        <option>Bus</option>
                    </select>
                </div>
                <div className='flex flex-row justify-center items-center w-auto h-auto'>
                    <button className=' bg-orange-500 px-8 py-2' onClick={findAvailableVehicles}>Find</button>
                </div>
        </div>
    </div>
  )
}

export default Find