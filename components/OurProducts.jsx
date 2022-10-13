import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import { urlFor } from '../lib/client'
import Link from 'next/link'

const OurProducts = ({ products }) => {

    return (
        <div className='our-products-container'>
            <div className='our-products-wrapper'>
                <div className='our-products-header'>
                    <div className='header-hr'>
                        <h1><span>Our</span> Products</h1>
                        <hr className='orange-line' />
                    </div>
                    <p className='our-products-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.
                    </p>
                </div>
                <div className='home-products-wrapper'>
                    <div className='fruit-wrapper'>
                        <Link href={`/product/${products[0].slug.current}`}>
                            <div className='fruit-image'>
                                <img src={urlFor(products[0].image[0])} alt="" />
                            </div>
                        </Link>
                        <div className='fruit-info'>
                            <h2>{products[0].name}</h2>
                            <div className='price-kg'>
                                <p>per Kg</p>
                                <h3>R {products[0].price}</h3>
                            </div>
                            <button className='add-to-cart'>
                                <BsFillCartFill />
                                <p>Add to Cart</p>
                            </button>
                        </div>
                    </div>
                    <div className='fruit-wrapper'>
                        <Link href={`/product/${products[1].slug.current}`}>
                            <div className='fruit-image'>
                                <img src={urlFor(products[1].image[0])} alt="" />
                            </div>
                        </Link>
                        <div className='fruit-info'>
                            <h2>{products[1].name}</h2>
                            <div className='price-kg'>
                                <p>per Kg</p>
                                <h3>R {products[1].price}</h3>
                            </div>
                            <button className='add-to-cart'>
                                <BsFillCartFill />
                                <p>Add to Cart</p>
                            </button>
                        </div>
                    </div>
                    <div className='fruit-wrapper'>
                        <Link href={`/product/${products[2].slug.current}`}>
                            <div className='fruit-image'>
                                <img src={urlFor(products[2].image[0])} alt="" />
                            </div>
                        </Link>
                        <div className='fruit-info'>
                            <h2>{products[2].name}</h2>
                            <div className='price-kg'>
                                <p>per Kg</p>
                                <h3>R {products[2].price}</h3>
                            </div>
                            <button className='add-to-cart'>
                                <BsFillCartFill />
                                <p>Add to Cart</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProducts