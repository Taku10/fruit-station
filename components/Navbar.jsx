import React, {useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import fruit_logo from '../images/fruit-logo.png'
import Image from 'next/image'
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiFruitBowl } from 'react-icons/gi'
import {Cart, Search} from './'
import { Context } from '../context/StateContext'


const Navbar = ({ logo }) => {
  const [nav, setNav] = useState(false)
  const useStateContext = useContext(Context)
  const{showCart, setShowCart, totalQuantities, showSearch, setShowSearch }= useStateContext;


  useEffect(()=>{
    const changeNav = () => {
      if (window.scrollY >= 1) {
        setNav(true)
      } else {
        setNav(false)
      }
    }
    window.addEventListener('scroll', changeNav);
  })
  //navbar color change on scroll
 

  

 

  return (
    <nav className={`${ nav ? 'navbar-container active': 'navbar-container'}`}>
      <Link href='/'>
        <div className='logo'>
          <GiFruitBowl className='logo-icon' />
          <h1 className='logo-text'>FruitKu</h1>
        </div>

      </Link>
      <ul className='nav-items'>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/shop'>Shop</Link></li>
        <li><Link href='/news'>News</Link></li>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>
      <div className='cart-search-nav'>
        <button className='cart-button' onClick={()=> setShowCart(true)}>
          <BsFillCartFill className='cart-nav' />
        <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
        <button className='search-button'>
        <AiOutlineSearch className='search-nav' onClick={()=> setShowSearch(true)} />
        </button>
        
      </div>
      {showCart && <Cart />} 
     
    </nav>
  )
}



export default Navbar