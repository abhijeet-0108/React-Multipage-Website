import React from 'react'
import Herosection from '../Components/Herosection'

const About = () => {
 const data = {
  name:"Your Name",
  image:"./images/about1.svg"
 } 
  return (
    <div>
      <Herosection {...data}/>
    </div>
  )
}

export default About