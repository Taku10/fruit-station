import React, { useContext, useState } from 'react'
import { Context } from '../context/StateContext'
import { AiOutlineSearch } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import { urlFor } from '../lib/client'

const Search = ({productSearch}) => {
    const [search, setSearch] = useState('')
    const useStateContext = useContext(Context)
    const { showSearch, setShowSearch } = useStateContext

   

    console.log(productSearch)


    return (
        <div className=' search-container'>
            <GrClose className='close-search' onClick={() => setShowSearch(false)} />
            <div className='search-wrapper'>
                <h2>SEARCH FOR:</h2>
                <form className='search-form'>
                    <input type="text" placeholder='Key words' onChange={(e)=>setSearch(e.target.value)}/>
                    <button className='search-button-search'>
                        <p>Search</p>
                        <AiOutlineSearch className='search-icon' />
                    </button>
                </form>
            </div>
            {/* {productSearch.filter((item)=>item.name.toLowerCase().includes(search)).map((item)=>(
                <h1>{item.name}</h1>
            ))} */}
        </div>
    )
}

export default Search
