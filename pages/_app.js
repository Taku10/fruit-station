import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/home.css'
import '../styles/benefits.css'
import '../styles/ourproducts.css'
import '../styles/dealmonth.css'
import '../styles/shop.css'
import '../styles/productdetails.css'
import '../styles/cart.css'
import React from 'react'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext'
import {Toaster} from 'react-hot-toast';

function MyApp({ Component, pageProps }) {

  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>

  )
}

export default MyApp
