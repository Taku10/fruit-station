import React from 'react'
import { GiFruitBowl } from 'react-icons/gi'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare } from 'react-icons/fa'
import { FacebookAuthProvider, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import { async } from '@firebase/util'
import Swal from 'sweetalert2'


const Login = () => {
  const [user, loading] = useAuthState(auth);

  const googleProvider = new GoogleAuthProvider();
  const route = useRouter()


  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      if (result) {
        route.push('/')
      }
    } catch (error) {
      console.log(error.code)
      if (error.code === 'auth/account-exists-with-different-credential') {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Email already exists with Facebook Account!',
        })
      } if (error.code === 'auth/user-disabled') {
        Swal.fire({
          icon: 'warning',
          title: 'Your account is banned!',
        })
      } else {
        console.log('success')
      }
    }
  }


  const fbProvider = new FacebookAuthProvider()
  const FacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, fbProvider)
      route.push('/')
      console.log(result)

    } catch (error) {
      console.log(error.code)
      if (error.code === 'auth/account-exists-with-different-credential') {
        toast.error(<p className='email-login-error'>Email exists with Google Account</p>, { position: "bottom-center" })
      } if (error.code === 'auth/user-disabled') {
        toast.error(<p className='email-login-error'>Your account is banned</p>, { position: "top" })
      } else {
        console.log('success')
      }
    }
  }



  return (
    <div className='login-container'>
      <div className='login-wrapper'>
        <div className='login-left'></div>
        <div className='login-right'>
          <div className='login-logo' onClick={() => route.push('/')}>
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
            <button className='facebook-button' onClick={FacebookLogin}>
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
