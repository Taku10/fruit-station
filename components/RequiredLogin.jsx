import React,{useContext} from 'react'
import Link from 'next/link'
import { Context } from '../context/StateContext'

const RequiredLogin = () => {

  const useStateContext = useContext(Context)

  const{log, setLog} = useStateContext;
  return (
    <div className='required-login-container'>
        <p>Sign In to Continue</p>
        <Link href='/login'>
            <button onClick={()=>setLog(false)}>Sign In</button>
        </Link>
    </div>
  )
}

export default RequiredLogin