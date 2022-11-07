import React, { useState, useEffect } from 'react'
import { Article, Search } from '../components'
import { client } from '../lib/client'
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion';

const News = ({ news }) => {
    const [search, setSearch] = useState('')
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(news.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(news.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % news.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    }

    return (
        <>
            <div className='allNews-container'>
                <div className='allNews-start-container'>
                    <div className='allNews-start-header'>
                        <p>ORGANIC INFORMATION</p>
                        <h1>News Articles</h1>
                    </div>
                </div>
                <div className='all-articles-list'>
                    <input type="text" placeholder='Search News' onChange={(e) => setSearch(e.target.value)} />
                    <motion.div layout className='all-articles-wrapper'>
                        {currentItems.filter((item) => item.title.toLowerCase().includes(search)).map((item) => (
                            <Article key={item._id} news={item} />
                        ))}
                    </motion.div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="Next"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="Prev"
                        renderOnZeroPageCount={null}
                        containerClassName='pagination'
                        pageLinkClassName='page-num'
                        previousLinkClassName='page-num'
                        nextLinkClassName='page-num'
                        activeLinkClassName='active'

                    />
                </div>
            </div>
        </>
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
