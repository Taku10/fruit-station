import React,{useEffect} from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import orange_splash from '../images/orange-splash.png'
import Aos from 'aos'

const DealMonth = () => {


    return (
        <div className='deal-month-container'>
            <div className='deal-month-wrapper'>
                <div className='deal-image' data-aos = 'fade-right' data-aos-delay='300'>
                    <img src={orange_splash} alt="" />
                    <div className='disc-circle'>
                        <p className='disc'>50%</p>
                        <p className='off-per-kg'>off per kg</p>
                    </div>
                </div>
                <div className='deal-desc' data-aos = 'fade-left' data-aos-delay='300'>
                    <div className='deal-header'>
                        <h1><span>Deal</span> of the month</h1>
                        <p>HIKAN ORANGE</p>
                    </div>
                    <p className='deal-text'>
                        Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam similique! Beatae, minima quisquam molestias facere ea. Perspiciatis unde omnis iste natus error sit voluptatem accusant
                    </p>
                    <div className='timer'>
                        <div className='days'>
                            <p className='number'>00</p>
                            <p className='time-type'>Days</p>
                        </div>
                        <div className='hours'>
                            <p className='number'>00</p>
                            <p className='time-type'>Hours</p>
                        </div>
                        <div className='mins'>
                            <p className='number'>00</p>
                            <p className='time-type'>Mins</p>
                        </div>
                        <div className='secs'>
                            <p className='number'>00</p>
                            <p className='time-type'>Secs</p>
                        </div>
                    </div>
                    <button className='add-to-cart'>
                        <BsFillCartFill />
                        <p>Add to Cart</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DealMonth