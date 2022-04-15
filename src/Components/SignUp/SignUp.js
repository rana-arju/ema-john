import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import "./SignUp.css";
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comfirmPassword, setComfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event => {
        setComfirmPassword(event.target.value)
    };
    if (user) {
        navigate("/");
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== comfirmPassword) {
            setError("Your Both Password not match. try Again")
            return;
        }
        if(password.length < 6){
            setError("You must enter at least 6 charecter")
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    return (
         <div className='form-container'>
            <h2 className='form-title'>Please login</h2>
            <form onSubmit={handleCreateUser}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" id='email' placeholder='Enter Your Email' required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" id='password' placeholder='Enter a Password' required />
            </div>
            <div className="input-group">
                <label htmlFor="password-confirm">Confirm Password</label>
                <input onBlur={handleConfirmPasswordBlur} type="password" id='password-confirm' placeholder='Enter confirm Password' required />
            </div>
            <p style={{color:"red"}}>{error}</p>
            <input className='form-submit' type="submit" value="sign up" />
            </form>
            <p>Already have an account? <Link className='form-link' to="/login">Login</Link></p>
            <h4 className='divide'>or</h4>
            <div className="login-btn">
                <button><FcGoogle /> Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;