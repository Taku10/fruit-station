import React from 'react'
import { Product, Footer, Start, Benefits, OurProducts, DealMonth, Testimonials, Video } from '../components'
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
        <Testimonials />
        <Video />
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