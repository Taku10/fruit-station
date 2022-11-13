import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Context } from '../context/StateContext'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { fireWorks } from '../lib/confetti'

const Success = () => {

    const useStateContext = useContext(Context);

    const{setCartItems, setTotalPrice, setTotalQuantities}=useStateContext
    const[order, seOrder]=useState(null);



    //on page load
    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0)
        fireWorks()
    },[])


    return (
        <div className="success-container">
            <div className='success-wrapper'>
                <BsFillBagCheckFill className='success-icon' />
                <div className='thank'>
                    <h1>Thank You For Your Purchase</h1>
                    <p>Check your email inbox for the receipt.</p>
                </div>
                <p className='questions'> If you have any questions. Please email <span>orders@fruitku.com</span></p>
                <Link href='/shop'>
                    <button type='button' className='continue-shopping-button'  > Continue Shopping</button>
                </Link>
            </div>
        </div>
    )
}

export default Success