import React from 'react'
import { client, urlFor } from '../../lib/client'
const NewsDetails = ({ otherNews, news }) => {

  const { title, date, body, image } = news

  return (
    <div className='news-details-container'>
      <div className='news-start-container'>
        <div className='news-start-header'>
          <p>READ MORE DETAILS</p>
          <h1>Single Article</h1>
        </div>
      </div>
      <div className='news-article-container'>
        <div className='news-article-wrapper'>
            div
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const newsQuery = `*[_type == "news"]{
        slug {
            current
        }
    }`

  const news = await client.fetch(newsQuery)
  const paths = news.map((item) => ({
    params: {
      slug: item.slug.current
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}


export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "news" && slug.current == '${slug}'][0]`
  const relatedQuery = '*[_type == "news"]'
  const news = await client.fetch(query);
  const otherNews = await client.fetch(relatedQuery);

  return {
    props: { otherNews, news }
  }
}

export default NewsDetails
