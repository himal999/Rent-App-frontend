import React from 'react'
import Slider from "react-slick";
import {AiFillSetting,AiFillCar} from "react-icons/ai"
import {GiCutDiamond} from "react-icons/gi"
import {TbGps} from "react-icons/tb"
import {FaPrayingHands} from "react-icons/fa"
import {TbHeadphones} from "react-icons/tb"
//import {MdLocalCarWash} from "react-icons/md"
import "./Hero.css"
const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='w-full h-[90vh]  pt-24'>
       <div className='flex flex-row w-full h-full justify-center items-center'>
           <div className=' flex flex-row w-full h-full justify-center items-center border-y-[1px] border-black  relative'>
              <div className='flex flex-col w-3/5   h-full '>
                  <div className='flex flex-col  w-full h-full justify-center items-start ml-20'>
                    <h2 className=' text-6xl uppercase font-bold  tracking-wide text-orange-500'>Welcome to</h2>
                    <strong className=' text-4xl mt-1 text-gray-800'>Royal Rent (pvt) ltd.</strong>
                    <p className=' text-zinc-600 text-base'>Premier vehicle Rental Services in Sri Lanka</p>
                    <p className='text-zinc-600 mt-12 w-[550px] text-start'>With over 30 years of experience in the industry, we strive to offer the highest levels of customer service and a highly personalised service to all our customers who are on the lookout for Sri Lanka car rental opportunities. With one of the largest and most modern and varied fleets in Sri Lanka, our service is backed by a networked front office, fully-fledged mechanical servicing and valet servicing onsite.</p>
                  </div>
              </div>
              <div className='flex w-2/5 bg-gradient-to-b from-black to-slate-800 h-full  justify-end pr-20 items-center'>
                    <div className=' flex flex-col absolute top-40 left-[850px] w-auto h-auto'>
                       <img src={require("../../assets/images/hero.png")} className='w-[200%]'/>
                    </div>
                    <div className=' text-white flex flex-col justify-center items-start'>
                      <div className='flex flex-row justify-center items-center'>
                        <div className=' text-3xl p-4 bg-slate-800'>
                          <AiFillSetting/>
                        </div>
                        <h5 className=' text-lg ml-4  text-gray-400'>24/7 Break down service</h5>
                      </div>
                      <div className='flex flex-row justify-center items-center mt-4 '>
                        <div className=' text-3xl p-4 bg-slate-800'>
                          <GiCutDiamond/>
                        </div>
                        <h5 className=' text-lg ml-4  text-gray-400'>Comprehensive insurance</h5>
                      </div>
                      <div className='flex flex-row justify-center items-center mt-4  '>
                        <div className=' text-3xl p-4 bg-slate-800'>
                          <AiFillCar/>
                        </div>
                        <h5 className=' text-lg ml-4  text-gray-400'>24/7 PICKUP/DROP</h5>
                      </div>
                      <div className='flex flex-row justify-center items-center mt-4  '>
                        <div className=' text-3xl p-4 bg-slate-800'>
                          <TbGps/>
                        </div>
                        <h5 className=' text-lg ml-4  text-gray-400'>GPS SAT NAV</h5>
                      </div>
                      <div className='flex flex-row justify-center items-center mt-4  '>
                        <div className=' text-3xl p-4 bg-slate-800'>
                          <FaPrayingHands/>
                        </div>
                        <h5 className=' text-xl ml-4 w-[250px]  text-gray-400'>Backup vehicles in case of emergency</h5>
                      </div>
                      <div className='flex flex-row justify-center items-center mt-4  '>
                        <div className=' text-3xl p-4 bg-slate-800'>
                          <TbHeadphones/>
                        </div>
                        <h5 className=' text-xl ml-4  text-gray-400'>24/7 Customer Service</h5>
                      </div>
                      <div className='flex flex-row justify-center items-center mt-4  '>
                        <div className=' text-3xl p-4 bg-slate-800'>
                          {/* <MdLocalCarWash/> */}
                        </div>
                        <h5 className=' text-xl ml-2  w-[250px] text-gray-400'>large fleet with various collection of vehicles</h5>
                      </div>
                    </div>
              </div>
           </div>
       </div>
    </div>
  )
}

export default Hero