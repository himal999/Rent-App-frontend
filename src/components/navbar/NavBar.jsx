import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
const NavBar = () => {
  return (
    <div className=' w-full  fixed '>
       <div className='w-full  h-full container mx-auto flex flex-row flex-wrap justify-between items-center'>
         <div className='flex flex-col flex-wrap w-[110px] justify-center items-center '>
           <img src={require("../../assets/images/logo.png")} alt='logo'/>
         </div>
         <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col flex-wrap justify-center text-xl items-center mr-20'>
                <ul className='flex flex-row'>
                  <li className='mx-8'><a href='/'>Home</a></li>
                  <li className='mx-8'><a href='/'>Explore</a></li>
                  <li className='mx-8'><a href='/'>Services</a></li>
                  <li className='mx-8'><a href='/'>Contact us</a></li>
                  <li className='mx-8'><a href='/'>About us</a></li>
                </ul>
            </div>
            <div className='flex flex-row  justify-between items-center relative'>
                <div className='flex flex-col  text-2xl mx-8'>
                  <div className=' w-[35px] h-[35px] absolute bg-red-500 rounded-full flex flex-col text-base justify-center items-center flex-wrap -top-4 left-10'>
                    +99
                  </div>
                    <AiOutlineShoppingCart/>
                </div>
                <button className=' border-[1px] border-black px-5 py-2 rounded-sm'>SignIn</button>
            </div>
         </div>
       </div>
    </div>
  )
}

export default NavBar