import React, {useContext} from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import Brands from './Brands'
import { Context } from '../context/StateContext'

const Layout = ({ children }) => {

  const useStateContext = useContext(Context);
  const{video, setVideo}=useStateContext;

  return (
    <div className='layout'>
      <div className={`${video ?'dim active': 'dim'}`} onClick={() => setVideo(false)}></div>
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