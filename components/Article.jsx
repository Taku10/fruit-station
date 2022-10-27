import React from 'react'
import Link from 'next/link'
import  { client, urlFor } from '../lib/client'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdDateRange } from 'react-icons/md'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Article = ({news}) => {

    const{title, image, body1, date, slug}=news
    return (
        <div className='article'>
            <div className='article-image'>
            <img src={urlFor(image && image[0])} alt="" />
            </div>
            <h3 className='article-title'>{title}</h3>
            <div className='article-meta'>
                <div className='admin'>
                    <BsFillPersonFill />
                    <p>Admin</p>
                </div>
                <div className="published-date">
                    <MdDateRange />
                    <p>{date}</p>
                </div>
            </div>
            <p className='article-body'>{body1.substring(0, 117)}...</p>
            <Link href={`/news/${slug.current}`}>
                <div className='article-read-more'>
                    <p>read more</p>
                    <MdOutlineKeyboardArrowRight className='article-arrow-icon' />
                </div>
            </Link>
        </div>
    )
}

export default Article
