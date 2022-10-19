import React, { useState, useContext } from 'react'
import { Context } from '../context/StateContext'
import {AiOutlineClose} from 'react-icons/ai'


const Video = () => {
    const useStateContext = useContext(Context);
    const { video, setVideo } = useStateContext;

    const videoPlayer = (
        <div className='video-wrapper'>
            <AiOutlineClose className='close-video' onClick={()=> setVideo(false)}/>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GFmyOSdVs5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )


    return (
        <div className='history-container'>
            {video && videoPlayer}
            <div className='history-wrapper'>
                <div className='history-left'>
                    <img src="" alt="" />
                    <button onClick={() => setVideo(true)}>play</button>
                </div>
                <div className='history-right'>
                    <p className='since-year'>Since 1971</p>
                    <h1 className='we-are-fruitku'>We are FruitKu</h1>
                    <div className='history-story'>
                        <p>
                            Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum velit. Nam eu molestie lorem.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis illo repellat veritatis minus, et labore minima mollitia qui ducimus.
                        </p>

                    </div>
                    <button className='history-button'>Know More</button>
                </div>
            </div>
        </div>
    )
}

export default Video