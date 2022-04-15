import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import "./Login.css";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [
    signInWithEmailAndPassword,
    user,
    error,
    loading
    ] = useSignInWithEmailAndPassword(auth);
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    if (error) {
        return error;
    }
    if (user) {
        navigate("/");
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please login</h2>
            <form onSubmit={handleUserSignIn}>
            <div className="input-group">
                <label htmlFor="email">Enter Your Email</label>
                <input onBlur={handleEmailBlur} type="email" id='email' placeholder='Enter Your Email' required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Enter Your Password</label>
                <input onBlur={handlePasswordBlur} type="password" id='password' placeholder='Enter Your Password' required/>
            </div>
            <p style={{color: "red"}}>{error?.message}</p>
            {
                loading && <p>Loading......</p>
            }
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