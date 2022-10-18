import React from 'react'
import Link from 'next/link'

const Start = () => {
  return (
    <div className='start-container'>
      <div className='home-main-header'>
        <p>FRESH & ORGANIC</p>
        <h1>Delicious Seasonal Fruits</h1>
        <div className='home-buttons'>
          <Link href='/shop'>
            <button className='collection-button'>Fruit Collection</button>
          </Link>
          <Link href='/contact'>
            <button className='contact-button'>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Start