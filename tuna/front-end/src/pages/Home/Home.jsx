import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/header'
import ExploreProducts from '../../components/ExploreProducts/ExploreProducts'
import FoodDisplay from '../../fooddisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Phone from '..//../components/phone/Phone'

const Home = () => {
  const[category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreProducts category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Phone/>
      <AppDownload/>
    </div>
  )
}

export default Home
