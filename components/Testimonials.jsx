import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import {FaQuoteRight} from 'react-icons/fa';
import sarah from '../images/sarah-smith.jpg'

const Testimonials = () => {

    
       
    return (
        <div className='testimonials-container'>
            <div className='testimonials-wrapper'>
                <Carousel className='carousel'  autoPlay={true} swipeable={true} interval={5000} infiniteLoop={true} showIndicators={false}  showArrows={false} showStatus={false}>
                    <div className='customer'>
                        <h2 className='customer-name'>Lance Bolton</h2>
                        <h3 className='customer-job'>Local Shop Owner</h3>
                        <p className='customer-message'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero fugiat sequi cupiditate, recusandae debitis dolorum quod, sunt accusamus, accusantium similique asperiores fugit iure sit non autem aliquid quas modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, 
                        </p>
                        <FaQuoteRight className='quote'/>
                    </div>
                    <div className='customer'>
                        <h2 className='customer-name'>Sarah Smith</h2>
                        <h3 className='customer-job'>Local Shop Owner</h3>
                        <p className='customer-message'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero fugiat sequi cupiditate, recusandae debitis dolorum quod, sunt accusamus, accusantium similique asperiores fugit iure sit non autem aliquid quas modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, 
                        </p>
                        <FaQuoteRight className='quote'/>
                    </div>
                    <div className='customer'>
                        <h2 className='customer-name'>Vince Minter</h2>
                        <h3 className='customer-job'>Local Shop Owner</h3>
                        <p className='customer-message'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus libero fugiat sequi cupiditate, recusandae debitis dolorum quod, sunt accusamus, accusantium similique asperiores fugit iure sit non autem aliquid quas modi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, 
                        </p>
                        <FaQuoteRight className='quote'/>
                    </div>
                </Carousel>
            </div>
        </div>

    )
}

export default Testimonials