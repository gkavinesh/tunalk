import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/header'
import FoodDisplay from '../../fooddisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Facts from '..//..//components/facts/facts'
import About from '..//..//components/about/about'
import Poll from '..//..//components/poll/poll'
import Step from '..//..//components/steps/step'

const Home = () => {
  const[category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <Facts/>
      <FoodDisplay category={category}/>
      <About/>
      <Poll/> 
      <Step/>
      <AppDownload/>
      

    </div>
  )
}

export default Home
