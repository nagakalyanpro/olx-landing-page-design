import React from 'react'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import Fresh from '../components/Fresh'
import KidSection from '../components/KidSection'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
   <Categories />
   <KidSection />
   <Fresh />
    </div>
  )
}

export default Home