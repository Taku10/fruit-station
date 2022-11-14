import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { urlFor } from '../lib/client'
import Link from 'next/link'
import { motion } from 'framer-motion'


const Product = ({ sort, products: { name, price, image, slug } }) => {


  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} layout className='motion-fruit-div'>

      <Link href={`/product/${slug.current}`}>
        <div className='fruit-wrapper'>
         { name === 'Oranges' && <div className='item-discount'>
            <p>50%</p>
          </div>}
          <div className='fruit-image'>
            <img src={urlFor(image && image[0])} alt="" />
          </div>
          <div className='fruit-info'>
            <h2>{name}</h2>
            <div className='price-kg'>
              <p>per Kg</p>
             {name === "Oranges" ? 
             <div className='discount-before'> 
              <p>$ {price} </p>
              <h3 className='now-price'> ${(price / 2).toFixed()}</h3>
             </div>:
             
             <h3>$ {price}</h3>}
            </div>

          </div>
        </div>
      </Link>
    </motion.div>


  )
}

export default Product