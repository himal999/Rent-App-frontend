import React from 'react'
import Find from '../../components/find/Find'
import Hero from '../../components/hero/Hero'
import NavBar from '../../components/navbar/NavBar'

const Home = () => {
  return (
    <div className='relative'>
        <NavBar/>
        <Hero/>
        <Find/>
    </div>
  )
}

export default Home