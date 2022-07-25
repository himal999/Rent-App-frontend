
import React, { useEffect, useState } from 'react'
import { version } from 'react-dom';
import {useNavigate} from "react-router-dom"


const Find = () => {

    const navigate = useNavigate();
    const [pickupDate,setPickupDate]=useState('')
    const [returnDate,setReturnDate]=useState('')
    const [branch,setBranch]=useState('')
    const [vType,setVType]=useState('')
    const [lType,setLType]=useState('')
    const [pickupTime,setpickupTime] = useState('')

    const [location,setLocation] = useState([]);
   
    
    useEffect(()=>{

        fetch("http://localhost:8080/rentApp/branch/allBranch",{
                method:'get',
                mode:'cors',
                headers: {"Content-type":"application/json;charset=utf-8"}
            }).then((res) => res.json())
                .then((json) => {
                   
                    if(json.code === 200){

                        setLocation(json.data);    
                        
                    }else{
                        alert("Sorry,We are busy")
                    }
                  
                })
        
    })
  

    const findAvailableVehicles =  ()=>{

        var searchData = {
            "pickupBranch":branch,
            "pickupDate":pickupDate,
            "returnDate":returnDate,
            "type":lType,
            "vehicleType":vType,
            "pickupTime":pickupTime
        }
        
        if(checkVaildate(lType,vType,pickupTime,pickupDate,returnDate,branch)){
            fetch("http://localhost:8080/rentApp/find/pp",{
                method:'post',
                mode:'cors',
                body:JSON.stringify(searchData),
                headers: {"Content-type":"application/json;charset=utf-8"}
            }).then((res) => res.json())
                .then((json) => {
                   
                    if(json.code === 200){
                        navigate("/expo",{state:{vehicles:json.data}})
                    }else{
                        alert("Sorry,We are busy")
                    }
                  
                })
        }

   
        
    }

  return (
    <div className='flex flex-col w-full h-full absolute top-[800px]'>
        <div className='container mx-auto w-full h-auto flex flex-row bg-lime-100 py-10 px-8 border-[1px] border-black shadow-black  shadow-2xl'>
                <div className='flex flex-row  justify-center items-center mr-4'>
                    <label className=' text-base text-zinc-700 mr-5'>Type</label>
                    <select className=' bg-gray-300 p-3 w-[100%]' onChange={(e)=>{setLType(e.target.value)}} value={lType}>
                        <option value="" disabled selected hidden >select here...</option>
                        <option>Luxary</option>
                        <option>Premier</option>
                    </select>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Pickup Branch</label>
                    <select className='bg-gray-300 p-3 w-[100%]'onChange={(e)=>{setBranch(e.target.value)}} value={branch} id='branch'>
                        <option value="" disabled selected hidden>select here...</option>
                        {
                            location.map((branch)=>{
                               
                                return(<option>{branch.location}</option>)
                            })
                        }
                    </select>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Pickup Date</label>
                    <input  className='bg-gray-300 p-3 w-[100%]' type="date"  onChange={(e)=>{setPickupDate(e.target.value)}} value={pickupDate}/>
                </div>
                <div className='flex flex-row justify-center items-center mr-4'>
                    <label className='text-base text-zinc-700 mr-5'>Pickup Time</label>
                    <input className='bg-gray-300 p-3 w-[100%]' type="time" onChange={(e)=>{setpickupTime(e.target.value)}} value={pickupTime}/>
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

function checkVaildate(lType,vType,pickupTime,pickupDate,returnDate,branch){


    if(lType.trim().length === 0 && branch.trim().length ===0 && pickupDate.trim().length ===0 && pickupTime.trim().length === 0 && returnDate.trim().length === 0 && vType.trim().length ===0){
            alert("Please Fill All Field and Find Vehicles !!!")
            return false;
    }else{
        if(lType.trim().length !== 0){
            if(branch.trim().length !==0 ){
                 if(pickupDate.trim().length !==0 ){
                     if(pickupTime.trim().length !==0 ){
                         if(returnDate.trim().length !== 0){
                             if(vType.trim().length !==0 ){
                                 if(checkReturnDate(pickupDate,returnDate)){
                                    return true;
                                 }else{
                                    alert(`Please select vaild date ${pickupDate} before`);
                                    return false;
                                 }
                               
                             }else{
                                 alert("Please Select Vehicle Type")
                                 return false;
                             }
                         }else{
                             alert("Please Select Return Date")
                             return false;
                         }
                     }else{
                         alert("Please Select Pickup time")
                         return false;
                     }
                 }else{
                     alert("Please Select Pickup Date")
                     return false;
                 }
            }else{
             alert("Please Select Pickup Branch")
             return false;
            }
        }else{
            alert("Please Select Confirtobal Type")
            return false;
        }
    }

   
}

function checkReturnDate(pickDate,retuDate){
    var pDate = new Date(pickDate);
    var rDate = new Date(retuDate);

    if(pDate<rDate){
        return true;
    }else{
       
        return false;
    }
}

export default Find