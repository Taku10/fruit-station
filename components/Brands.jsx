import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { brand_data } from '../images/brandData';

const Brands = () => {
  return (
    <div className='brands-container'>
         <Slider className='brand-slide' slidesToShow={4}  autoplay={true} autoplaySpeed={1000}>

            {brand_data.map((item)=>(
                <div className='brand'>
                    <img src={item.src} alt={item} />
                </div>
            ))
            
            
            
            }

         </Slider>
    </div>
  )
}

export default Brands