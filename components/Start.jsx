import React from 'react'
import { Link } from 'react-scroll'
import {motion} from 'framer-motion'

const Start = () => {
  return (
    <div className='start-container' id='home'>
      <div className='home-main-header'>
        <motion.p initial={{x: '200vh'}} animate={{x: '0'}} transition={{type:'spring', bounce:0.2}}>FRESH & ORGANIC</motion.p>
        <motion.h1 initial={{x: '-200vh'}} animate={{x: '0'}} transition={{type:'spring', bounce:0.2}}>Delicious Seasonal Fruits</motion.h1>
        <motion.div className='home-buttons' initial={{y: '200vh'}} animate={{y: '0'}} transition={{type:'spring', bounce:0.3}}>
          <Link href='/shop'>
            <button className='collection-button'>Fruit Collection</button>
          </Link>
          <Link to='/contact'>
            <button className='contact-button'>Contact Us</button>
          </Link>
        </motion.div>
      </div>
    </div>
    
  )
}

export default Start