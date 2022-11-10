import React,{useEffect, useState, useRef} from 'react'
import {BsFillCartFill} from 'react-icons/bs'
import orange_splash from '../images/orange-splash.png'
import Aos from 'aos'

const DealMonth = () => {
    const [days, setDays]= useState('00')
    const [hours, setHours]= useState('00')
    const [minutes, setMinutes]= useState('00')
    const [seconds, setSeconds]= useState('00')

    let interval = useRef()

    const startTimer = ()=>{
        const deadline = new Date('December 03, 2022 00:00:00:00').getTime();

        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance = deadline - now;

            const timerDays = Math.floor(distance / (1000 * 60 * 60 * 24));
            const timerHours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const timerMinutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60));
            const timerSeconds = Math.floor((distance % (1000 * 60 )) / 1000 );
            
            if(distance < 0){
                clearInterval(interval.current);
            }else{
                setDays(timerDays)
                setHours(timerHours)
                setMinutes(timerMinutes)
                setSeconds(timerSeconds)
            }




        }, 1000)
    }

    useEffect(()=>{
        startTimer();

        return()=>{
            clearInterval(interval.current)
        };
    });

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
                            <p className='number'>{days}</p>
                            <p className='time-type'>Days</p>
                        </div>
                        <div className='hours'>
                            <p className='number'>{hours}</p>
                            <p className='time-type'>Hours</p>
                        </div>
                        <div className='mins'>
                            <p className='number'>{minutes}</p>
                            <p className='time-type'>Mins</p>
                        </div>
                        <div className='secs'>
                            <p className='number'>{seconds}</p>
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