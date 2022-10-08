import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/home.css'
import '../styles/benefits.css'
import '../styles/ourproducts.css'
import React from 'react'
import {Layout}  from '../components'

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>

  )
}

export default MyApp
