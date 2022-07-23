import React from 'react'

const Filter = () => {
  return (
    <div className='flex flex-col w-2/12'>
        <div className=' container mx-auto w-full border-[1px] border-black p-4'>
            <div className='flex flex-col'>
                <lable className=" text-gray-600">brand</lable>
                <select className='mt-4 w-[200px] h-[35px]'>
                    <option>All Brand</option>
                    <option>Nissan</option>
                    <option>Audi</option>
                    <option>BMW</option>
                    <option>Toyota</option>
                    <option>Benz</option>
                </select>
            </div>
            <div className='flex flex-col mt-4'>
                <label className=' text-gray-600'>vehicle type</label>
                <select className='mt-4 w-[200px] h-[35px]'>
                    <option>All Type</option>
                    <option>Car</option>
                    <option>Van</option>
                    <option>Bus</option>
                    <option>Lorry</option>
                    <option>Scamel</option>
                </select>
            </div>
            <div className='flex flex-col mt-4'>
                <label className=' text-gray-600'>type</label>
                <select className='mt-4 w-[200px] h-[35px]'>
                    <option>All Type</option>
                    <option>Low</option>
                    <option>Intermediedd</option>
                    <option>Luxary</option>
                </select>
            </div>
            <div className='flex flex-col mt-4'>
                <label className=' text-gray-600'>branch</label>
                <select className='mt-4 w-[200px] h-[35px]'>
                    <option>All Branch</option>
                    <option>Colombo</option>
                    <option>Kandy</option>
                    <option>Galle</option>
                </select>
            </div>
            <div className='flex flex-col mt-4'>
                <label className=' text-gray-600'>Pickup Date</label>
                <input className='mt-4 w-[200px] h-[35px]' type={"date"}></input>
            </div>
            <div className='flex flex-col mt-4'>
                <label className=' text-gray-600'>Return Date</label>
                <input className='mt-4 w-[200px] h-[35px]' type={"date"}></input>
            </div>
            <lable className="flex flex-col mt-3 underline text-blue-700 cursor-pointer text-sm">clear all</lable>
        </div>
    </div>
  )
}

export default Filter