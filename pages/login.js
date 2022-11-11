import React from 'react'
import { GiFruitBowl } from 'react-icons/gi'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from 'react-icons/fa'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import {auth} from '../utils/firebase'

const Login = () => {

const googleProvider = new GoogleAuthProvider();

const GoogleLogin = async()=>{
  try{
      const result = await signInWithPopup(auth, googleProvider)
  }catch(error){
    console.log(error)
  }
}




  return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <div className='login-left'></div>
        <div className='login-right'>
          <div className='login-logo'>
            <GiFruitBowl className='login-logo-icon' />
            <h1 className='login-logo-text'>FruitKu</h1>
          </div>
          <div className='login-welcome'>

            <h1>Welcome to <span>FruitKu</span> </h1>
          </div>
          <div className='login-buttons'>
            <button className='google-button' onClick={GoogleLogin}>
              <FcGoogle className='google-icon' />
              <p>Sign with Google</p>
            </button>
            <button className='facebook-button'>
              <FaFacebookSquare className='facebook-icon' />
              <p>Sign with Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
