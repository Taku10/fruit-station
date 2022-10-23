import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdDateRange} from 'react-icons/md'



const OurNews = () => {
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
                            <img src="" alt="" />
                        </div>
                        <h3 className = 'article-title'>You will vainly look for fruit on it in autumn.</h3>
                        <div className='article-meta'>
                            <div className='admin'>
                                <BsFillPersonFill/>
                                <p>Admin</p>
                            </div>
                            <div className="published">
                                <MdDateRange />
                                <p>12 August, 2022</p>
                            </div>
                            <p>
                                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.
                            </p>
                        </div>
                    </div>
                    <div className='article'>
                        <div className='article-image'>
                            <img src="" alt="" />
                        </div>
                        <h3 className = 'article-title'>A man's worth has its season, like tomato.</h3>
                        <div className='article-meta'>
                            <div className='admin'>
                                <BsFillPersonFill/>
                                <p>Admin</p>
                            </div>
                            <div className="published">
                                <MdDateRange />
                                <p>12 August, 2022</p>
                            </div>
                            <p>
                                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.
                            </p>
                        </div>
                    </div>
                    <div className='article'>
                        <div className='article-image'>
                            <img src="" alt="" />
                        </div>
                        <h3 className = 'article-title'>Good thoughts bear good fresh juicy fruit.</h3>
                        <div className='article-meta'>
                            <div className='admin'>
                                <BsFillPersonFill/>
                                <p>Admin</p>
                            </div>
                            <div className="published">
                                <MdDateRange />
                                <p>12 August, 2022</p>
                            </div>
                            <p>
                                Vivamus lacus enim, pulvinar vel nulla sed, scelerisque rhoncus nisi. Praesent vitae mattis nunc, egestas viverra eros.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurNews
