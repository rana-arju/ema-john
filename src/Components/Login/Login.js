import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import "./Login.css";
const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please login</h2>
            <form>
            <div className="input-group">
                <label htmlFor="email">Enter Your Email</label>
                <input type="email" id='email' placeholder='Enter Your Email' required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" id='password' placeholder='Enter Your Password' required/>
            </div>
            <input className='form-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema-john? <Link className='form-link' to="/signup">Create an Account</Link></p>
            <h4 className='divide'>or</h4>
            <div className="login-btn">
                <button><FcGoogle /> Continue with Google</button>
            </div>
        </div>
       
    );
};

export default Login;