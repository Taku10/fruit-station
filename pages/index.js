import React, { useState, useEffect } from 'react'
import { Product, Footer, Start, Benefits, OurProducts, DealMonth, Testimonials, Video, Promo, OurNews, Brands } from '../components'
import { client } from '../lib/client'
import Link from 'next/link'
import { AiOutlineArrowUp } from 'react-icons/ai'
import Aos from 'aos'





const Home = ({ products, news }) => {
  console.log(products)

  useEffect(() => {
    Aos.init({ duration: 1000 })
}, [])

  return (
    <>
      <div className='home-container'>
        <Start />
        <Benefits />
        <OurProducts products={products} />
        <DealMonth />
        <Testimonials />
        <Video />
        <Promo />
        <OurNews news={news} />
        <Link href='/'>
          <div className='back-to-top'data-aos='fade-up' >
            <AiOutlineArrowUp className='arrow-up' />
          </div>
        </Link>


      </div>
    </>
  )
}


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const newsQuery = '*[_type == "news"]'
  const news = await client.fetch(newsQuery)
  const products = await client.fetch(query)

  return {
    props: {
      products, news
    }
  }
}

export default Home