import React, { useState, useContext, useEffect } from 'react'

import { client } from '../lib/client'
import { Product } from '../components';
import { Context } from '../context/StateContext';
import ReactPaginate from 'react-paginate';
import { motion, useScroll } from 'framer-motion';



const ListProducts = ({ products }) => {
  const [search, setSearch] = useState('')
  // const [sort, setSort] = useState(products)
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;


  console.log(currentItems)

  const { scrollYProgress } = useScroll();




  // const filterProduct = (e) => {
  //   let updated = e.target.value;

  //   if (updated === 'All') {
  //     setCurrentItems(products)
  //   } else if (updated === 'Apples') {
  //     const filtered = products.filter(item => item.category === 'Apples')
  //     setCurrentItems(filtered)
  //   }else if (updated === 'Berry') {
  //     const filtered = products.filter(item => item.category === 'Berry')
  //     setCurrentItems(filtered)
  //   } else if (updated === 'Citrus') {
  //     const filtered = products.filter(item => item.category === 'Citrus')
  //     setCurrentItems(filtered)
  //   } else if (updated === 'Tropical') {
  //     const filtered = products.filter(item => item.category === 'Tropical')
  //     setCurrentItems(filtered)
  //   } else if (updated === 'Grapes') {
  //     const filtered = products.filter(item => item.category === 'Grapes')
  //     setCurrentItems(filtered)
  //   }
  //   else if (updated === 'Stone-Fruit') {
  //     const filtered = products.filter(item => item.category === 'Stone Fruit')
  //     setCurrentItems(filtered)
  //   }
  // }





  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  return (

    <div className='list-products-container'>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <div className='list-products-wrapper'>
        <input type="text" placeholder='Search Fruits' onChange={(e) => setSearch(e.target.value)} />
        <motion.div layout className='products-show'>
          {currentItems.filter((item) => item.name.toLowerCase().includes(search)).map((item) => (
            <Product key={item._id} products={item} />
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
  )
}



export default ListProducts