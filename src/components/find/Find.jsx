import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"


const Find = () => {

    const navigate = useNavigate();
    const [pickupDate,setPickupDate]=useState('')
    const [returnDate,setReturnDate]=useState('')
    const [branch,setBranch]=useState('')
    const [vType,setVType]=useState('')
    const [type,setType]=useState('')

  

    const findAvailableVehicles =  ()=>{

        var searchData = {
            "pickupBranch":branch,
           "pickupDate":pickupDate,
           "returnDate":returnDate,
            "type":type,
            "vehicleType":vType
        }
        console.log(pickupDate)
        console.log(returnDate)
        console.log(branch)
        console.log(vType)
        console.log(type)
        
        fetch("http://localhost:8080/rentApp/find/pp",{
                method:'post',
                mode:'cors',
                body:JSON.stringify(searchData),
                headers: {"Content-type":"application/json;charset=utf-8"}
            }).then((res) => res.json())
                .then((json) => {
                    alert("hi");
                    navigate("/expo",json)
                })
        
    }

  return (
    <div className='flex flex-col w-full h-full absolute top-[800px]'>
        <div className='container mx-auto w-full h-auto flex flex-row bg-lime-100 py-10 px-8 border-[1px] border-black shadow-black  shadow-2xl'>
                <div className='flex flex-row  justify-center items-center mr-4'>
                    <label className=' text-base text-zinc-700 mr-5'>Type</label>
                    <select className=' bg-gray-300 p-3 w-[100%]' onChange={(e)=>{setType(e.target.value)}} value={type}>
                        <option value="" disabled selected hidden >select here...</option>
                        <option>Luxary</option>
                        <option>Premier</option>
                    </select>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Pickup Branch</label>
                    <select className='bg-gray-300 p-3 w-[100%]'onChange={(e)=>{setBranch(e.target.value)}} value={branch}>
                        <option value="" disabled selected hidden>select here...</option>
                        <option>Colombo</option>
                        <option>Galle</option>
                        <option>Kandy</option>
                    </select>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Pickup Date</label>
                    <input  className='bg-gray-300 p-3 w-[100%]' type="date"  onChange={(e)=>{setPickupDate(e.target.value)}} value={pickupDate}/>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Pickup Time</label>
                    <input className='bg-gray-300 p-3 w-[100%]' type="date"/>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Return Date</label>
                    <input className='bg-gray-300 p-3 w-[100%]' type="date" onChange={(e)=>{setReturnDate(e.target.value)}} value={returnDate}/>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Vehicle Type</label>
                    <select className='bg-gray-300 p-3 w-[100%]' onChange={(e)=>{setVType(e.target.value)}} value={vType}>
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