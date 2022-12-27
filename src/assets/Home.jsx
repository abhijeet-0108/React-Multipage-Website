import React from 'react'
import Herosection from '../Components/Herosection'

const Home = () => {
  const data = {
    name:'Your Website',
    image:"./images/hero.svg"
  }
  return (
   <Herosection {...data}/>
  )
}

export default Home