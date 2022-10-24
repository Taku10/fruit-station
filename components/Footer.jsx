import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FaPaperPlane, FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <div className="footer-content">
          <div className='footer-about-container footer-header'>
            <h2>About us</h2>
            <hr className='footer-line' />
            <p>
              Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div className='footer-contact-container footer-header'>
            <h2>Get in Touch</h2>
            <hr className='footer-line' />
            <div className='footer-contact-info'>
              <p>23 West Street</p>
              <p>support@fruitku.com</p>
              <p>+27 27 123 4568</p>
            </div>
          </div>
          <div className='footer-pages-container footer-header'>
            <h2>Pages</h2>
            <hr className='footer-line' />
            <div className='footer-pages-list'>
              <div className='page-link'>
                <MdOutlineKeyboardArrowRight />
                <p>Home</p>
              </div>
              <div className='page-link'>
                <MdOutlineKeyboardArrowRight />
                <Link>
                  <p>About</p>
                </Link>
              </div>
              <div className='page-link'>
                <MdOutlineKeyboardArrowRight />
                <Link>
                  <p>Shop</p>
                </Link>
              </div>
              <div className='page-link'>
                <MdOutlineKeyboardArrowRight />
                <Link>
                  <p>News</p>
                </Link>
              </div>
              <div className='page-link'>
                <MdOutlineKeyboardArrowRight />
                <Link>
                  <p>Contact</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='footer-subscribe-container'>
          <hr className='footer-line'/>
          <p>Subscribe to our mailing list to get the latest updates.</p>
          <div className='email-container'>
          <input type="text" placeholder='Email' />
          <div className='email-icon'>
            <FaPaperPlane/>
          </div>
          </div>
          </div>
        </div>
        <div className='footer-bottom-container'>
            <div className='trademark'>
              <p>Copyrights © 2019 - All Rights Reserved</p>
              <p>Distributed By - <span>Themewagon</span> </p>
            </div>
            <div className='footer-socials'>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer