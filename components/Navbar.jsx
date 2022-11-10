import React, {useState, useEffect, useContext} from 'react'
import Link from 'next/link'
import fruit_logo from '../images/fruit-logo.png'
import Image from 'next/image'
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu} from 'react-icons/gi'
import { GiFruitBowl } from 'react-icons/gi'
import {Cart, Search} from './'
import { Context } from '../context/StateContext'


const Navbar = ({ logo }) => {
  const [nav, setNav] = useState(false)
  const useStateContext = useContext(Context)
  const{showCart, setShowCart, totalQuantities, showSearch, setShowSearch ,menu, setMenu}= useStateContext;

 //navbar background color change on scroll
  useEffect(()=>{
    const changeNav = () => {
      if (window.scrollY >= 1) {
        setNav(true)
      } else {
        setNav(false)
      } if(window.innerWidth <= 992){
        setNav(false)
      }
    }
    window.addEventListener('scroll', changeNav);
  })
 
 

  //close mobile navbar after clicked link
  const linkClose= ()=>{
    setMenu(false)
  }

 

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

      { menu && <ul className='nav-items-mobile'>
        <li onClick={linkClose}><Link href='/' >Home</Link></li>
        <li onClick={linkClose}><Link href='/shop'>Shop</Link></li>
        <li onClick={linkClose}><Link href='/news'>News</Link></li>
        <li onClick={linkClose}><Link href='/about'>About</Link></li>
        <li onClick={linkClose}><Link href='/contact'>Contact</Link></li>
      </ul>
      }
      <div className='cart-search-nav'>
        <button className='cart-button' onClick={()=> setShowCart(true)}>
          <BsFillCartFill className='cart-nav' />
        <span className='cart-item-qty'>{totalQuantities}</span>
        </button>
       {!menu ? <GiHamburgerMenu className='hamburger-menu' onClick={()=>setMenu(true)}/>: <AiOutlineClose className='close-menu' onClick={()=>setMenu(false)} />}
      
      </div>
   
     
    </nav>
  )
}



export default Navbar