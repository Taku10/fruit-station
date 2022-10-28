import React from 'react'
import { FaPaperPlane, FaFacebookF } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

const Team = () => {
    return (
        <div className='team-container'>
            <div className='team-wrapper'>
                <div className='team-header'>
                    <div className='header-hr'>
                        <h1><span>Our</span> Team</h1>
                        <hr className='orange-line' />
                    </div>
                    <p className='team-desc'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.
                    </p>
                </div>
                <div className='team-members'>
                    <div className='member'>
                        <div className='member-image-1'>
                            <div className='member-icon-wrapper'>
                                <FaFacebookF className='member-icon' />
                            </div>
                            <div className='member-icon-wrapper'>
                                <BsTwitter className='member-icon' />
                            </div>
                            <div className='member-icon-wrapper'>
                                <AiOutlineInstagram className='member-icon' />
                            </div>
                        </div>
                        <div className='member-details'>
                            <h2>Aaron Richards</h2>
                            <p>Farmer</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='member-image-2'>
                            <div className='member-icon-wrapper'>
                                <FaFacebookF className='member-icon' />
                            </div>
                            <div className='member-icon-wrapper'>
                                <BsTwitter className='member-icon' />
                            </div>
                            <div className='member-icon-wrapper'>
                                <AiOutlineInstagram className='member-icon' />
                            </div>
                        </div>
                        <div className='member-details'>
                            <h2>Sindey Wilmar</h2>
                            <p>Head of Sales</p>
                        </div>
                    </div>
                    <div className='member'>
                        <div className='member-image-3'>
                            <div className='member-icon-wrapper'>
                                <FaFacebookF className='member-icon' />
                            </div>
                            <div className='member-icon-wrapper'>
                                <BsTwitter className='member-icon' />
                            </div>
                            <div className='member-icon-wrapper'>
                                <AiOutlineInstagram className='member-icon' />
                            </div>
                        </div>
                        <div className='member-details'>
                            <h2>Tina Brown</h2>
                            <p>Farmer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
