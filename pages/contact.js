import React, { useState, useEffect } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { AiFillContacts } from 'react-icons/ai'
import Map from '../components/index'
import Aos from 'aos'
import { toast } from 'react-hot-toast'
import { useForm } from "react-hook-form";



const Contact = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);





  useEffect(() => {
    Aos.init({ duration: 1500, once: true })
  }, [])






  return (
    <div className='contact-container'>
      <div className='contact-start-container'>
        <div className='contact-start-header'>
          <p data-aos='fade-down' data-aos-delay='300'>GET 24/7 SUPPORT</p>
          <h1 data-aos='fade-up' data-aos-delay='600'>Contact Us</h1>
        </div>
      </div>
      <div className='contact-wrapper'>
        <div className='contact-grid-left' data-aos='fade-right' data-aos-delay='1'>
          <h2 className='contact-question'>Have any questions?</h2>
          <p className='contact-desc'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore, esse natus!
          </p>
          <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='contact-fullName'>
              <div className='input-wrapper'>
                <label> Name:</label>
                <input {...register("name", { required: true, maxLength: 20 })} />
                {errors.name?.type === 'required' && <p role="alert" className='input-errors'>Name is required!</p>}
              </div>
              <div className='input-wrapper'>
                <label> Email:</label>
                <input type='email' {...register("email", { required: true, maxLength: 30 })} />
                {errors.email?.type === 'required' && <p role="alert" className='input-errors'>Email is required!</p>}
              </div>
            </div>
            <div className='contact-phone-subject'>
              <div className='input-wrapper'>
                <label>Phone:</label>
                <input   {...register("phone", { required: true, maxLength: 10 })} />
                {errors.phone?.type === 'required' && <p role="alert" className='input-errors'>Phone number is required!</p>}
              </div>
              <div className='input-wrapper'>
                <label>Subject:</label>
                <input  {...register("subject", { required: true, maxLength: 50 })} />
                {errors.subject?.type === 'required' && <p role="alert" className='input-errors'>Subject is required!</p>}
              </div>
            </div>
            <textarea cols="30" rows="10" placeholder='Message'{...register("message", { required: true, maxLength: 200 })}></textarea>
            {errors.message?.type === 'required' && <p role="alert" className='input-errors'>Message is required!</p>}
            <button className='contact-submit' type='submit'>Submit</button>

          </form>
        </div>
        <div className='contact-grid-right' data-aos='fade-left' data-aos-delay='300'>
          <div className='contact-shop-address'>
            <div className='header-icon'>
              <HiLocationMarker className='contact-icon' />
              <h2>Shop Address</h2>
            </div>
            <p>34/8, Verkeer Street</p>
            <p>Cape Point, Cape Town</p>
            <p>South Africa</p>
          </div>
          <div className='contact-shop-hours'>
            <div className='header-icon'>
              <AiOutlineClockCircle className='contact-icon' />
              <h2>Shop Hours</h2>
            </div>
            <p>MON- FRIDAY: 8 to 9 PM</p>
            <p>SAT- SUN: 10 to 8 PM</p>
          </div>
          <div className='contact-shop-contact'>
            <div className='header-icon'>
              <HiLocationMarker className='contact-icon' />
              <h2>Shop Contact</h2>
            </div>
            <p>Phone: +27 27 412 4545</p>
            <p>Email: support@fruitku.com</p>
          </div>
        </div>
      </div>
      <Map />
    </div>
  )
}

export default Contact
