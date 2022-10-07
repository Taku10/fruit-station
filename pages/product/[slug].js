import React from 'react'
import {client, urlFor} from '../../lib/client'

const ProductDetails = ({products, relatedProducts}) => {

    const{name, image, details, category, price}=products
  return (
    <div className='big'>
        <img src={urlFor(image&& image[0])}  />
        <h1>{name}</h1>
    </div>
  )
}

export const getStaticPaths = async()=>{
    const query = `*[_type == "product"]{
        slug {
            current
        }
    }`

    const products = await client.fetch(query)
    const paths = products.map((product) =>({
        params:{
            slug: product.slug.current
        }
    }))
    
    return{
        paths,
        fallback: 'blocking'
    }
}


export const getStaticProps =async({params:{slug}})=>{
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`
    const relatedQuery = '*[_type == product]'
    const products = await client.fetch(query);
    const relatedProducts = await client.fetch(relatedQuery);
    
    return{
        props:{products, relatedProducts}
    }
}



export default ProductDetails