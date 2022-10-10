import React from 'react'
import { client, urlFor } from '../../lib/client'
import {BsFillCartFill} from 'react-icons/bs'

const ProductDetails = ({ products, relatedProducts }) => {

    const { name, image, details, category, price} = products


    return (

        <div className='product-details-container'>
            <div className='product-start-container'>
                <div className='product-start-header'>
                    <p>SEE MORE DETAILS</p>
                    <h1>Single Product</h1>
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
                        <h1 className='product-price'>R {price}</h1>
                        <p className='product-desc'>{details}</p>
                        <form className='product-form'>
                            <input type="number" className='input-qty' />
                        </form>
                        <button className='add-to-cart'>
                            <BsFillCartFill />
                            <p>Add to Cart</p>
                        </button>
                        <p className='product-category'>Categories: {category}</p>
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
    const relatedQuery = '*[_type == product]'
    const products = await client.fetch(query);
    const relatedProducts = await client.fetch(relatedQuery);

    return {
        props: { products, relatedProducts }
    }
}



export default ProductDetails