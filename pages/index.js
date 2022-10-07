import React from 'react'
import { Product, Footer, Start, Benefits } from '../components'
import { client } from '../lib/client'
import Link from 'next/link'



const Home = ({ products}) => {


  console.log(products[0].name)

  return (
    <>
    <div className='home-container'>
      <Start />
      <Benefits />
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