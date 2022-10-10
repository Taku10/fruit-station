import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import fruit_logo from '../images/fruit-logo.png'
import Image from 'next/image'
import { BsFillCartFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { GiFruitBowl } from 'react-icons/gi'

const Navbar = ({ logo }) => {
  const [nav, setNav] = useState(false)



  useEffect(()=>{
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
        <li><Link href='shop'>Shop</Link></li>
        <li><Link href='/'>News</Link></li>
        <li><Link href='/'>About</Link></li>
        <li><Link href='/'>Contact</Link></li>
      </ul>
      <div className='cart-search-nav'>
        <button className='cart-button'>
          <BsFillCartFill className='cart-nav' />
          <span className='cart-item-qty'>2</span>
        </button>
        <button className='search-button'>
        <AiOutlineSearch className='search-nav' />
        </button>
        
      </div>
    </nav>
  )
}



export default Navbar