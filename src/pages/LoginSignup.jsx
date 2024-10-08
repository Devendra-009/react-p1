import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
      <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder='your name' name="" id="" />
        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='Enter Password' />
      </div>
      <button>Continue</button>
      <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p>By continuing , i agree to the terms and conditions</p>
      </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
