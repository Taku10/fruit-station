import React from 'react'
import { GiCancel } from 'react-icons/gi'
import Link from 'next/link'

const Cancel = () => {
  return (
    <div className='cancel-container'>
      <div className='cancel-wrapper'>
        <div className='oops'>
        <GiCancel className='cancel-icon' />
          <h1>Order Cancelled</h1>
        </div>
        <p className='cancel-message'>
          We've got some bad news. Your order has been cancelled. We couldn't process your online payment
        </p>
        <p className='questions'> If you have any questions. Please email <span>orders@fruitku.com</span></p>
        <Link href='/shop'>
          <button type='button' className='cancel-back-shopping-button'  > Back To Shopping</button>
        </Link>
      </div>
    </div >
  )
}

export default Cancel