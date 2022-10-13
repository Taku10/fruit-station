import React from 'react'
import { Product, Footer, Start, Benefits, OurProducts, DealMonth } from '../components'
import { client } from '../lib/client'
import Link from 'next/link'



const Home = ({ products }) => {

  return (
    <>
      <div className='home-container'>
        <Start />
        <Benefits />
        <OurProducts products={products} />
        <DealMonth />
      </div>
    </>
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

export default Home