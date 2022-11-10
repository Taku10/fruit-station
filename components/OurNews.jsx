import React,{useEffect} from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdDateRange } from 'react-icons/md'
import { urlFor } from '../lib/client'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'
import Aos from 'aos'


const OurNews = ({ news }) => {

    useEffect(()=>{
        Aos.init({duration:1500, once: true})
    },[])

    return (
        <div className='our-news-container'>
            <div className='our-news-wrapper'>
                <div className='our-news-header'>
                    <div className='header-hr'  data-aos="fade-down">
                        <h1><span>Our</span> News</h1>
                        <hr className='orange-line' />
                    </div>
                    <p className='our-news-desc' data-aos="fade-left" data-aos-delay='200'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.
                    </p>
                </div>
                <div className='news-articles'>
                    <div className='article' data-aos="flip-left" data-aos-easing="ease-out-cubic">
                        <div className='article-image'>
                            <img src={urlFor(news[0].image[0])} alt="" />
                        </div>
                        <h3 className='article-title'>{news[0].title}</h3>
                        <div className='article-meta'>
                            <div className='admin'>
                                <BsFillPersonFill />
                                <p>Admin</p>
                            </div>
                            <div className="published-date">
                                <MdDateRange />
                                <p>{news[0].date}</p>
                            </div>
                        </div>
                        <p className='article-body'>{news[0].body1.substring(0, 117)}...</p>
                        <Link href={`/news/${news[0].slug.current}`}>
                            <div className='article-read-more'>
                                <p>read more</p>
                                <MdOutlineKeyboardArrowRight className='article-arrow-icon' />
                            </div>
                        </Link>
                    </div>
                    <div className='article' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-delay='200'>
                        <div className='article-image'>
                            <img src={urlFor(news[1].image[0])} alt="" />
                        </div>
                        <h3 className='article-title'>{news[1].title}</h3>
                        <div className='article-meta'>
                            <div className='admin'>
                                <BsFillPersonFill />
                                <p>Admin</p>
                            </div>
                            <div className="published-date">
                                <MdDateRange />
                                <p>{news[1].date}</p>
                            </div>

                        </div>
                        <p className='article-body'>{news[1].body1.substring(0, 117)}...</p>
                        <Link href={`/news/${news[1].slug.current}`}>
                            <div className='article-read-more'>
                                <p>read more</p>
                                <MdOutlineKeyboardArrowRight className='article-arrow-icon' />
                            </div>
                        </Link>

                    </div>
                    <div className='article' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-delay='400'>
                        <div className='article-image'>
                            <img src={urlFor(news[2].image[0])} alt="" />
                        </div>
                        <h3 className='article-title'>{news[2].title}</h3>
                        <div className='article-meta'>
                            <div className='admin'>
                                <BsFillPersonFill />
                                <p>Admin</p>
                            </div>
                            <div className="published-date">
                                <MdDateRange />
                                <p>{news[2].date}</p>
                            </div>
                        </div>
                        <p className='article-body'>{news[2].body1.substring(0, 117)}...</p>
                        <Link href={`/news/${news[2].slug.current}`}>
                            <div className='article-read-more'>
                                <p>read more</p>
                                <MdOutlineKeyboardArrowRight className='article-arrow-icon' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurNews
