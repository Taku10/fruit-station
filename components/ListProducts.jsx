import React, { useState, useContext } from 'react'
import { client } from '../lib/client'
import { Product } from '../components';
import { Context } from '../context/StateContext';
const ListProducts = ({ products }) => {
  const [sort, setSort] = useState(products)


  const filterProduct = (e) => {
    let updated = e.target.value; 
    
    if(updated === 'All'){
      setSort(products)
    }else if(updated === 'Berry'){
      const filtered = products.filter(item => item.category === 'Berry')
      setSort(filtered)
    }else if(updated === 'Citrus'){
      const filtered = products.filter(item => item.category === 'Citrus')
      setSort(filtered)
    }else if(updated === 'Tropical'){
      const filtered = products.filter(item => item.category === 'Tropical')
      setSort(filtered)
    }else if(updated === 'Grapes'){
      const filtered = products.filter(item => item.category === 'Grapes')
      setSort(filtered)
    }
  }

  return (
    <div className='list-products-container'>
      <div className='list-products-wrapper'>
        <div className='selectors'>
          <button className='all-selector' value = 'All' onClick = {filterProduct}>All</button>
          <button className='berry-selector' value = 'Berry' onClick = {filterProduct}>Berry</button>
          <button className='citrus-selector' value = 'Citrus' onClick = {filterProduct}>Citrus</button>
          <button className='compound-selector' value = 'Tropical' onClick = {filterProduct}>Tropical</button>
          <button className='Grapes-selector' value = 'Grapes' onClick = {filterProduct}>Grapes</button>
        </div>
        <div className='products-show'>
          {sort.map((item) => (
            <Product key={item._id} products={item} />
          ))}
        </div>

      </div>

    </div>
  )
}



export default ListProducts