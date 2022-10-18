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
import getStripe from '../lib/getStripe'
import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils'
import toast from 'react-hot-toast'

const Cart = () => {
  const useStateContext = useContext(Context)
  const { showCart, setShowCart, cartItems, totalQuantities, totalPrice, toggleCartItemQuantity, onRemove } = useStateContext;
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

  const handleCheckout =async()=>{
    const stripe = await getStripe();

// make api request
    const response = await fetch('/api/stripe', {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify(cartItems),
    });
    
 
    if(response.statusCode === 500) return;

    const data = await response.json();
    console.log(data.id)

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({sessionId: data.id});
  }



  return (
    <div className={`${showCart ? 'cart-container anim' : 'cart-container'}`}>
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
                  <BsTrash className='delete-product' onClick={()=> onRemove(item)} />
                  <div className='enter-qty'>
                    <button className='minus' onClick={()=>toggleCartItemQuantity(item._id, 'dec')}><AiOutlineMinus /></button>
                    <p className='qty-input'>{item.quantity}</p>
                    <button className='plus' onClick={()=>toggleCartItemQuantity(item._id, 'inc')}><AiOutlinePlus /></button>
                  </div>
                </div>


              </div>
              <div className='cart-right'>
                <p className='cart-price'>$ {item.price}</p>
                
              </div>
            </div>
          ))}

          {cartItems.length >= 1 && (
            <div className='cart-bottom'>
              <div className='total'>
                <h3>Subtotal:</h3>
                <h3>$ {totalPrice}</h3>
              </div>
              <div className='proceed-checkout'>
                <button onClick={handleCheckout}>Proceed to Checkout</button>
              </div>
            </div>
          )}
        </div>


      </div>
    </div>
  )
}

export default Cart
