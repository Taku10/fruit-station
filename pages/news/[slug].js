import React from 'react'

const NewsDetails = ({otherNews, news}) => {
  return (
    <div className='news-details-container'>
      <div className='news-details-wrapper'>
        s
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
