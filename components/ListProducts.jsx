import React from 'react'
import { client } from '../lib/client'
import { Product } from '../components';

const ListProducts = ({ products }) => {
  return (
    <div className='list-products-container'>
      <div className='list-products-wrapper'>
        <div className='selectors'>
          <button className='all-selector'>All</button>
          <button className='berry-selector'>Berry</button>
          <button className='citrus-selector'>Citrus</button>
          <button className='compound-selector'>Tropical</button>
        </div>
        <div className='products-show'>
          {products.map((item) => (
            <Product key ={item. _id} products={item} />
          ))}
        </div>

      </div>

    </div>
  )
}



export default ListProducts