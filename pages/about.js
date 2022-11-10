import React, { Component, useEffect } from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import { TiArrowSync } from 'react-icons/ti'
import {BsCash} from 'react-icons/bs'
import {Promo, Team, Testimonials} from '../components'
import Aos from 'aos'

const About = () => {

    useEffect(()=>{
        Aos.init({duration:1500, once: true})
    },[])
    return (
        <div className='about-container'>
            <div className='about-start-container'>
                <div className='about-start-header'>
                    <p  data-aos = 'fade-down' data-aos-delay='300'>WE SELL FRESH FRUITS</p>
                    <h1 data-aos = 'fade-up' data-aos-delay='600'>About Us</h1>
                </div>
            </div>
            <div className='about-wrapper'>
                <div className='about-grid-left'>
                    <h1>Why <span className='orange-text'>FruitKu</span></h1>
                    <div className='about-benefits-wrapper'>
                        <div className='about-benefit'>
                            <div className='about-benefit-icon'>
                                <TbTruckDelivery className='about-icon'/>
                            </div>
                            <div className='about-benefits-desc'>
                                <h2>Home delivery</h2>
                                <p>
                                    sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                                </p>
                            </div>
                        </div>
                        <div className='about-benefit'>
                            <div className='about-benefit-icon'>
                                <BsCash className='about-icon' />
                            </div>
                            <div className='about-benefits-desc'>
                                <h2>Best Price</h2>
                                <p>
                                    sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                                </p>
                            </div>
                        </div>
                        <div className='about-benefit'>
                            <div className='about-benefit-icon'>
                                <BsFillBriefcaseFill className='about-icon'/>
                            </div>
                            <div className='about-benefits-desc'>
                                <h2>Custom Box</h2>
                                <p>
                                    sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                                </p>
                            </div>
                        </div>
                        <div className='about-benefit'>
                            <div className='about-benefit-icon'>
                                <TiArrowSync className='about-icon'/>
                            </div>
                            <div className='about-benefits-desc'>
                                <h2>Quick Refund</h2>
                                <p>
                                    sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-grid-right'></div>
            </div>
        <Promo />
        <Team />
        <Testimonials />
        </div>
    )
}

export default About
