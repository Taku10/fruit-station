import React,{useContext} from 'react'
import { client, urlFor } from '../../lib/client'
import { BsFillCartFill } from 'react-icons/bs'
import { GrFacebookOption } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineGooglePlus } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiOutlineMinus} from 'react-icons/ai'
import { AiOutlinePlus} from 'react-icons/ai'
import Link from 'next/link'
import {Product} from '../../components'
import {Context} from '../../context/StateContext'

const ProductDetails = ({ relatedProducts, products }) => {

    const {name, image, details, category, price } = products;
    const useStateContext = useContext(Context)
    const{qty, decreaseQty, increaseQty, onAdd}= useStateContext;

    return (

        <div className='product-details-container'>
            <div className='product-start-container'>
                <div className='product-start-header'>
                    <p>SEE MORE DETAILS</p>
                    <h1>{name}</h1>
                </div>
            </div>
            <div className='details-container'>
                <div className='details-wrapper'>
                    <div className='product-image'>
                        <img src={urlFor(image && image[0])} />
                    </div>
                    <div className='product-info'>
                        <h1 className='product-name'>{name}</h1>
                        <p className='kg'>Per Kg</p>
                        <h1 className='product-price'>$ {price}</h1>
                        <p className='product-desc'>{details}</p>
                        <div className='enter-qty'>
                            <button className='minus' onClick={decreaseQty}><AiOutlineMinus /></button>
                            <p className='qty-input'>{qty}</p>
                            <button className='plus' onClick={increaseQty}><AiOutlinePlus /></button>
                        </div>
                        <button className='add-to-cart' onClick={()=> onAdd(products, qty)}>
                            <BsFillCartFill />
                            <p>Add to Cart</p>
                        </button>
                        <p className='product-category'>Categories: <span>{category}</span></p>
                        <div className='share'>
                            <h1>Share:</h1>
                            <div className='social-icons'>
                                <Link href='https://www.facebook.com'>
                                    <GrFacebookOption className='icon'/>
                                </Link>
                                <Link href='https://www.twitter.com'>
                                    <AiOutlineTwitter className='icon'/>
                                </Link>
                                <Link href='https://www.google.com'>
                                    <AiOutlineGooglePlus className='icon'/>
                                </Link>
                                <Link href='https://www.linkedin.com'>
                                    <AiFillLinkedin className='icon'/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='related-products-container'>
                <div className='related-products-wrapper'>
                    <div className='related-products-header'>
                        <div className='header-hr'>
                        <h1 className=''><span>Related</span> Products</h1>
                        <hr className='orange-line'/>
                        </div>
                        <p className='related-products-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.
                        </p>

                    </div>
                </div>
                <div className='products-slide track'>
                <div className='fruit-wrapper'>
                        <Link href={`/product/${relatedProducts[5].slug.current}`}>
                            <div className='fruit-image'>
                                <img src={urlFor(relatedProducts[5].image[0])} alt="" />
                            </div>
                        </Link>
                        <div className='fruit-info'>
                            <h2>{relatedProducts[5].name}</h2>
                            <div className='price-kg'>
                                <p>per Kg</p>
                                <h3>$ {relatedProducts[5].price}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='fruit-wrapper'>
                        <Link href={`/product/${relatedProducts[6].slug.current}`}>
                            <div className='fruit-image'>
                                <img src={urlFor(relatedProducts[6].image[0])} alt="" />
                            </div>
                        </Link>
                        <div className='fruit-info'>
                            <h2>{relatedProducts[6].name}</h2>
                            <div className='price-kg'>
                                <p>per Kg</p>
                                <h3>$ {relatedProducts[6].price}</h3>
                            </div>
                        </div>
                    </div>
                    <div className='fruit-wrapper'>
                        <Link href={`/product/${relatedProducts[3].slug.current}`}>
                            <div className='fruit-image'>
                                <img src={urlFor(relatedProducts[3].image[0])} alt="" />
                            </div>
                        </Link>
                        <div className='fruit-info'>
                            <h2>{relatedProducts[3].name}</h2>
                            <div className='price-kg'>
                                <p>per Kg</p>
                                <h3>$ {relatedProducts[3].price}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{
        slug {
            current
        }
    }`

    const products = await client.fetch(query)
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}


export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`
    const relatedQuery = '*[_type == "product"]'
    const products = await client.fetch(query);
    const relatedProducts = await client.fetch(relatedQuery);

    return {
        props: { relatedProducts, products }
    }
}



export default ProductDetails