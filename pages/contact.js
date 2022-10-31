import React from 'react'
import {HiLocationMarker} from 'react-icons/hi'
import {AiOutlineClockCircle} from 'react-icons/ai'
import {AiFillContacts} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='contact-start-container'>
        <div className='contact-start-header'>
          <p>GET 24/7 SUPPORT</p>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className='contact-wrapper'>
        <div className='contact-grid-left'>
          <h2 className='contact-question'>Have any questions?</h2>
          <p className='contact-desc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!
          </p>
          <form className='contact-form'>
            <div className='contact-fullName'>
              <input type="text" placeholder='Name' value='' />
              <input type="email" placeholder='Email' value='' />
            </div>
            <div className='contact-phone-subject'>
              <input type="text" placeholder='Phone' value='' />
              <input type="text" placeholder='Subject' value='' />
            </div>
            <textarea cols="30" rows="10" placeholder='Message'></textarea>
            <button className='contact-submit'>Submit</button>
          </form>
        </div>
        <div className='contact-grid-right'>
            <div className='contact-shop-address'>
                <div className='header-icon'>
                  <HiLocationMarker className='contact-icon'/>
                    <h2>Shop Address</h2>
                </div>
                <p>34/8, Verkeer Street</p>
                <p>Cape Point, Cape Town</p>
                <p>South Africa</p>
            </div>
            <div className='contact-shop-hours'>
                <div className='header-icon'>
                  <AiOutlineClockCircle className='contact-icon'/>
                    <h2>Shop Hours</h2>
                </div>
                <p>MON- FRIDAY: 8 to 9 PM</p>
                <p>SAT- SUN: 10 to 8 PM</p>
            </div>
            <div className='contact-shop-contact'>
                <div className='header-icon'>
                  <HiLocationMarker className='contact-icon'/>
                    <h2>Shop Contact</h2>
                </div>
                <p>Phone: +27 27 412 4545</p>
                <p>Email: support@fruitku.com</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
