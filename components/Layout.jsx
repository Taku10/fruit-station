import React, { useContext } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import Brands from './Brands'
import { Context } from '../context/StateContext'
import Search from './Search'

const Layout = ({ children, products}) => {

  const useStateContext = useContext(Context);
  const { video, setVideo, showSearch } = useStateContext;

  return (
    <div className='layout'>
      {/* dim background on video click */}
      <div className={`${video ? 'dim active' : 'dim'}`} onClick={() => setVideo(false)}></div>
      {showSearch && <Search productSearch={products}/>}
      <Head>
        <title>FruitKu </title>
        <link rel="shortcut icon" href="/site-logo.png" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Brands />
        <Footer />
      </footer>
    </div>
  )
}

export default Layout