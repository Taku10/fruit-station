import React from 'react'
import Link from 'next/link'

const RequiredLogin = () => {
  return (
    <div className='required-login-container'>
        <p>Sign In to Continue</p>
        <Link href='/login'>
            <button>Sign In</button>
        </Link>
    </div>
  )
}

export default RequiredLogin