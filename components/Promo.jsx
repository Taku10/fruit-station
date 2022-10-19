import React from 'react'
import Link from 'next/link'

const Promo = () => {
    return (
        <div className='promo-container'>
            <div className='promo-wrapper'>
                <div className='promo-details'>
                    <div className='promo-heading'>
                        <h1>December sale is on!</h1>
                        <h1>with big <span>Discount...</span></h1>
                    </div>
                    <div className='sale-percent-wrapper'>
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