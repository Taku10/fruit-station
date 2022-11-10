import React, {useContext, useEffect} from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { urlFor } from '../lib/client'
import Link from 'next/link'
import { Context } from '../context/StateContext'
import Aos from 'aos'

const OurProducts = ({ products }) => {

    const{onAdd, qty}= useContext(Context);

    useEffect(()=>{
        Aos.init({duration:1500, once: false})
    },[])

    return (
        <div className='our-products-container'>
            <div className='our-products-wrapper'>
                <div className='our-products-header'>
                    <div className='header-hr' data-aos = 'fade-down' data-aos-delay='300'>
                        <h1><span>Our</span> Products</h1>
                        <hr className='orange-line' />
                    </div>
                    <p className='our-products-desc' data-aos = 'fade-right' data-aos-delay='300'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.
                    </p>
                </div>
                <div className='home-products-wrapper'>
                    <div className='home-fruit-wrapper' data-aos = 'fade-right' data-aos-delay='300'>
                        <Link href={`/product/${products[0].slug.current}`}>
                            <div className='fruit-image'>
                                <img src={urlFor(products[0].image[0])} alt="" />
                            </div>
                        </Link>
                        <div className='fruit-info'>
                            <h2>{products[0].name}</h2>
                            <div className='price-kg'>
                                <p>per Kg</p>
                                <h3>$ {products[0].price}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='home-fruit-wrapper' data-aos = 'fade-up' data-aos-delay='700' >
                        <Link href={`/product/${products[7].slug.current}`}>
                            <div className='fruit-image'>
                                <img src={urlFor(products[7].image[0])} alt="" />
                            </div>
                        </Link>
                        <div className='fruit-info'>
                            <h2>{products[7].name}</h2>
                            <div className='price-kg'>
                                <p>per Kg</p>
                                <h3>$ {products[7].price}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='home-fruit-wrapper' data-aos = 'fade-left' data-aos-delay='600'>
                        <Link href={`/product/${products[2].slug.current}`}>
                            <div className='fruit-image'>
                                <img src={urlFor(products[2].image[0])} alt="" />
                            </div>
                        </Link>
                        <div className='fruit-info'>
                            <h2>{products[2].name}</h2>
                            <div className='price-kg'>
                                <p>per Kg</p>
                                <h3>$ {products[2].price}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts