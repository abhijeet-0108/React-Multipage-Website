import React from 'react'
import { Button } from '../Components/Styles/Button'
export const Contact = () => {
  return (
    <div className='container'>
      <h2 className='display-1 mb-4 mt-4'>Feel Free To Contact Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5772431140276!2d75.89196131530962!3d22.743949532390246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd53fe53001f%3A0xee8cf979c94deb2f!2sC21%20Mall%2C%20263%2C%20AB%20Rd%2C%20near%20Malhar%20Mega%20Mall%2C%20LIG%20Colony%2C%20Indore%2C%20Madhya%20Pradesh%20452011!5e0!3m2!1sen!2sin!4v1672054608419!5m2!1sen!2sin" width='100%' height='450' style={{border: 0}} allowFullScreen='' loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='mb-4' />
      <div className='container'>
        <div className='contact-form'>
          <form action='#' method='POST' className='contact-input'>
            <input type='text' name='username' placeholder='Name' autoComplete='off' required/>
            <input type='email' name='username' placeholder='Email' autoComplete='off' required/>
            <textarea name='message' cols='30' rows='6' autoComplete='off' placeholder='Write Your Mail' required></textarea>
          <Button style={{width:'100px' , textAlign:'center',display:'flex',alignSelf:'center',justifyContent:'center'}} className='mt-4'>Send</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
