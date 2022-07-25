import React from 'react'
import { useLocation } from 'react-router-dom'


import Filter from '../../components/filter/Filter'
import NavBar from "../../components/navbar/NavBar"
import Vehicle from '../../components/vehicle/Vehicle'
import ViewDetail from '../../components/view_details/ViewDetail'

const Expo = () => {
    const locaton = useLocation();

  return (
    <div className='w-full h-full relative'>
        <NavBar/>
        <div className='container mx-auto w-full flex flex-row pt-44'>
            <Filter/>
            <div className='w-11/12 flex flex-col relative'>
                <div className='flex flex-row'>
                    <Vehicle vehicle={locaton.state.vehicles[0]}/>
                    {/* <ViewDetail/> */}
                    <Vehicle vehicle={locaton.state.vehicles[1]}/>
                    <Vehicle vehicle={locaton.state.vehicles[2]}/>
                    {/* <Vehicle vehicle={data[0]}/> */}
                </div>
                <div className='flex flex-row'>
                    {/* <Vehicle/>
                    <Vehicle/>
                    <Vehicle/>
                    <Vehicle/> */}
                </div>
                <div className='flex flex-row'>
                    {/* <Vehicle/>
                    <Vehicle/>
                    <Vehicle/>
                    <Vehicle/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Expo