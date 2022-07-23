import React from 'react'
import Available from '../../components/available/Available'
import Find from '../../components/find/Find'
import Hero from '../../components/hero/Hero'
import NavBar from '../../components/navbar/NavBar'

const Home = () => {
  return (
    <div className='relative'>
        <NavBar/>
        <Hero/>
        <Find/>
        <Available/>
    </div>
  )
}

export default Home