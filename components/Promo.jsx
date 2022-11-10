import React,{useEffect} from 'react'
import Link from 'next/link'
import Aos from 'aos'

const Promo = () => {

    useEffect(()=>{
        Aos.init({duration:1500, once: false})
    },[])

    return (
        <div className='promo-container'>
            <div className='promo-wrapper'>
                <div className='promo-details'>
                    <div className='promo-heading' data-aos = 'fade-right' data-aos-delay='100'  data-aos-anchor-placement="right-center">
                        <h1>December sale is on!</h1>
                        <h1>with big <span>Discount...</span></h1>
                    </div>
                    <div className='sale-percent-wrapper' data-aos = 'fade-right' data-aos-delay='400'>
                        <div className='sale-upto'>
                            <p>Sale!</p>
                            <p>Upto</p>
                        </div>
                        <p className='sale-percent'><span>50%</span> off</p>
                    </div>
                    <Link href='/shop'>
                        <button className='shop-now'>Shop Now</button>
                    </Link>
                </div>
                <div className='promo-image'>

                </div>
            </div>
        </div>
    )
}

export default Promo