import React,{useEffect} from 'react'
import Aos from 'aos'


const ShopStart = () => {

  useEffect(()=>{
    Aos.init({duration:1500, once: true})
},[])

  return (
    <div className='shop-start-container'>
        <div className='shop-start-header'>
            <p  data-aos = 'fade-down' data-aos-delay='300'>FEEL THE FRESHNESS</p>
            <h1 data-aos = 'fade-up' data-aos-delay='600'>Shop</h1>
        </div>
    </div>
  )
}

export default ShopStart