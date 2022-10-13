import React, { useState, useRef, useContext, useEffect } from 'react'
import { Context } from '../context/StateContext'
import { BsArrowLeft } from 'react-icons/bs'
import { BsBasket } from 'react-icons/bs'
import Link from 'next/link'
import { interpolateAs } from 'next/dist/shared/lib/router/router'
import { urlFor } from '../lib/client'
import { AiOutlineMinus } from 'react-icons/ai'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'

const Cart = () => {
  const useStateContext = useContext(Context)
  const { showCart, setShowCart, cartItems, totalQuantities, totalPrice } = useStateContext;
  const [nav, setNav] = useState(false)

  useEffect(() => {
    const changeNav = () => {
      console.log(window.scrollY)
      if (window.scrollY >= 1) {
        setNav(true)
      } else {
        setNav(false)
      }
    }
    window.addEventListener('scroll', changeNav);
  })




  return (
    <div className={`${nav ? 'cart-container active' : 'cart-container'}`}>
      <div className='cart-wrapper'>
        <button className='cart-back-button' onClick={() => setShowCart(false)}>
          <BsArrowLeft />
          <p>Your Cart </p>
          <p>({totalQuantities} items)</p>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <h3>Your Basket is Empty!!</h3>
            <BsBasket className='empty-basket-icon' />
            <Link href='/shop'>
              <button type='button' className='continue-shopping-button' onClick={() => setShowCart(false)} > Continue Shopping</button>
            </Link>
          </div>
        )}


        <div className='cart-product-container'>
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className='cart-product' key={index}>
              <div className='cart-left'>
                <div className='cart-image'>
                  <img src={urlFor(item?.image[0])} alt="" />
                </div>
                <div className='name-qty'>
                  <h1>{item.name}</h1>
                  <div className='enter-qty'>
                    <button className='minus' onClick=''><AiOutlineMinus /></button>
                    <p className='qty-input'>0</p>
                    <button className='plus' onClick=''><AiOutlinePlus /></button>
                  </div>
                </div>


              </div>
              <div className='cart-right'>
                <p className='cart-price'>R {item.price}</p>
                <BsTrash className='delete-product' />
              </div>
            </div>
          ))}

          {cartItems.length >= 1 && (
            <div className='cart-bottom'>
              <div className='total'>
                <h3>Subtotal:</h3>
                <h3>R {totalPrice}</h3>
              </div>
            </div>
          )}
        </div>


      </div>
    </div>
  )
}

export default Cart
