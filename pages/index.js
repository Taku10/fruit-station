import React from 'react'
import { Product, Footer } from '../components'
import { client } from '../lib/client'
import Link from 'next/link'

const Home = ({ products }) => {


  console.log(products[0].name)

  return (
    <div className='home-contianer'>
      <Link href=''>
        <h1>{products[0].name}</h1>
      </Link>
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

export default Home