import React, {useState} from 'react'
import { Article} from '../components'
import { client } from '../lib/client'

const News = ({news}) => {
    const[article, setArticle]=useState(news)

    return (
        <div className='allNews-container'>
            <div className='allNews-start-container'>
                <div className='allNews-start-header'>
                    <p>ORGANIC INFORMATION</p>
                    <h1>News Articles</h1>
                </div>
            </div>
            <div className='all-articles-list'>
                <div className='all-articles-wrapper'>
                    {article.map((item)=>(
                        <Article key={item._id} news={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}


export const getServerSideProps = async () => {
    const newsQuery = '*[_type == "news"]'
    const news = await client.fetch(newsQuery)
  
    return {
      props: {
        news
      }
    }
  }


export default News
