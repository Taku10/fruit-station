import React, { useState, useContext } from 'react'
import { Context } from '../context/StateContext'
import { AiOutlineClose } from 'react-icons/ai'
import { FaPlay } from 'react-icons/fa'
import fruit_basket from '../images/fruit-basket.jpg';
import Link from 'next/link';


const Video = () => {
    const useStateContext = useContext(Context);
    const { video, setVideo } = useStateContext;

    const videoPlayer = (
        <div className='video-wrapper' role='button' >
            <AiOutlineClose className='close-video' onClick={() => setVideo(false)}/>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GFmyOSdVs5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )


    return (
        <div className='history-container'>
            {video && videoPlayer}
            <div className='history-wrapper'>
                <div className='history-left'>
                    <div className='play-icon-wrapper' onClick={() => setVideo(true)}>
                        < FaPlay className='play-icon'/>
                    </div>
                </div>
                <div className='history-right'>
                    <p className='since-year'>Since Year 1998</p>
                    <h1 className='we-are-fruitku'>We are <span>FruitKu</span> </h1>
                    <div className='history-story'>
                        <p>
                            Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.
                        </p>

                    </div>
                    <Link href='/about'>
                    <button className='history-button'>Know More</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Video