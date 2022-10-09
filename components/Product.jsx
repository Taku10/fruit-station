import React from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import { urlFor } from '../lib/client'

const Product = ({products: {name, price, image}}) => {
  return (
   
    <div className='fruit-wrapper'>
      <div className='fruit-image'>
      <img src={urlFor(image && image[0])} alt="" />
      </div>
        <div className='fruit-info'>
            <h2>{name}</h2>
            <div className='price-kg'>
                <p>per Kg</p>
                <h3>R {price}</h3>
            </div>
            <button className='add-to-cart'>
                <BsFillCartFill />
                <p>Add to Cart</p>
            </button>
        </div>
    </div>

  )
}

export default Product