import React from 'react'
import Error from '../../public/images/error.svg'
const Errorpage = () => {
  return (
    <div className='container'>
    <h1 className='display-1'>
      Errorpage 404 Not Found
    </h1>
    <img src={Error} alt='Error'/>   
    </div>
  )
}

export default Errorpage