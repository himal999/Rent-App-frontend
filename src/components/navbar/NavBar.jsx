import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {AiOutlineShoppingCart} from "react-icons/ai"

const NavBar = () => {
  const [scroll,setScroll] = useState(false)
  window.onscroll = ()=>{
    setScroll(window.pageYOffset>0?true:false);
    return ()=> window.onscroll = null;
  }

  return (
    <div className={`${scroll ? " bg-gradient-to-b from-white bg-transparent":""} w-full  fixed  top-o left-0 z-[999]`}>
       <div className='w-full  h-full container mx-auto flex flex-row flex-wrap justify-between items-center'>
         <div className='flex flex-col flex-wrap w-[110px] justify-center items-center '>
           <img src={require("../../assets/images/logo.png")} alt='logo'/>
         </div>
         <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col flex-wrap justify-center text-xl items-center mr-20'>
                <ul className='flex flex-row'>
                  <li className='mx-8'><Link to="/">Home</Link></li>
                  <li className='mx-8'><Link to="/expo">Explore</Link></li>
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