import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

const Start = () => {
  return (
    <div className='start-container'>
      <div className='home-main-header'>
        <motion.p initial={{x: '200vh'}} animate={{x: '0'}} transition={{type:'spring', bounce:0.5}}>FRESH & ORGANIC</motion.p>
        <motion.h1 initial={{x: '-200vh'}} animate={{x: '0'}} transition={{type:'spring', bounce:0.5}}>Delicious Seasonal Fruits</motion.h1>
        <motion.div className='home-buttons' initial={{y: '200vh'}} animate={{y: '0'}} transition={{type:'spring', bounce:0.5}}>
          <Link href='/shop'>
            <button className='collection-button'>Fruit Collection</button>
          </Link>
          <Link href='/contact'>
            <button className='contact-button'>Contact Us</button>
          </Link>
        </motion.div>
      </div>
    </div>
    
  )
}

export default Start