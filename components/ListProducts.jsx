import React, { useState, useContext, useEffect, useRef } from 'react'

import { client } from '../lib/client'
import { Product } from '../components';
import { Context } from '../context/StateContext';
import ReactPaginate from 'react-paginate';
import { motion, useScroll } from 'framer-motion';
import { useRouter } from 'next/router';
import Link  from 'next/link';



const ListProducts = ({ products }) => {
  const [search, setSearch] = useState('')
  // const [sort, setSort] = useState(products)
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  const route = useRouter()
  const productOffset = useRef();
  
  useEffect(()=>{
    console.log(productOffset.current.offsetTop)
  },[])




  console.log(currentItems)

  const { scrollYProgress } = useScroll();

  


 
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
        <input type="text" placeholder='Search Fruits' onChange={(e) => setSearch(e.target.value)} ref={productOffset} />
        <motion.div layout className='products-show' id='pag-top' >
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
            onClick={()=> window.scrollTo({top:productOffset.current.offsetTop,left: 0, behavior: 'smooth'})}
          />
      </div>

    </div>
  )
}



export default ListProducts