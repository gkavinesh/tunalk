import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/header/header'
import ExploreProducts from '../../components/ExploreProducts/ExploreProducts'

const Home = () => {
  const[category,setCategory] = useState("All");

  return (
    <div>
      <Header/>
      <ExploreProducts category={category} setCategory={setCategory}/>
      
    </div>
  )
}

export default Home
