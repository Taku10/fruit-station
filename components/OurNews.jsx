import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdDateRange } from 'react-icons/md'
import { urlFor } from '../lib/client'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Link from 'next/link'



const OurNews = ({ news }) => {
    return (
        <div className='our-news-container'>
            <div className='our-news-wrapper'>
                <div className='our-news-header'>
                    <div className='header-hr'>
                        <h1><span>Our</span> News</h1>
                        <hr className='orange-line' />
                    </div>
                    <p className='our-news-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.
                    </p>
                </div>
                <div className='news-articles'>
                    <div className='article'>
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
                        <p className='article-body'>
                            Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.
                        </p>
                        <Link href={`/news/${news[0].slug.current}`}>
                        <div className='article-read-more'>
                            <p>read more</p>
                            <MdOutlineKeyboardArrowRight className='article-arrow-icon'/>
                        </div>
                        </Link>
                    </div>
                    <div className='article'>
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
                        <p className='article-body'>
                            Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.
                        </p>
                        <Link href={`/news/${news[1].slug.current}`}>
                        <div className='article-read-more'>
                            <p>read more</p>
                            <MdOutlineKeyboardArrowRight className='article-arrow-icon'/>
                        </div>
                        </Link>
                        
                    </div>
                    <div className='article'>
                        <div className='article-image'>
                            <img src={urlFor(news[2].image[0])} alt="" />
                        </div>
                        <h3 className='article-title'>Good thoughts bear good fresh juicy fruit.</h3>
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
                        <p className='article-body'>
                            Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.
                        </p>
                        <Link href={`/news/${news[2].slug.current}`}>
                        <div className='article-read-more'>
                            <p>read more</p>
                            <MdOutlineKeyboardArrowRight className='article-arrow-icon'/>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurNews
