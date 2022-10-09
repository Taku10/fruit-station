import React from 'react'
import { ShopStart, ListProducts, Footer} from '../components'
import { client } from '../lib/client'
import { Product } from '../components';


const shop = ({products}) => {
  return (
    <div className='shop-container'>
      <ShopStart />
      <ListProducts products={products}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  return {
    props: {
      products
    }
  }
}

export default shop