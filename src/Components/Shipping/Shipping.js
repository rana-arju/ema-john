import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
    const [user] = useAuthState(auth);
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    // const [error, setError] = useState("");
    // const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const handleFullNameBlur = (event) => {
        setName(event.target.value);
    };
  
    const handleAddressBlur = event => {
        setAddress(event.target.value)
    }
    const handlePhoneNumberBlur = event => {
        setPhone(event.target.value)
    };
       const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, address, phone};
        console.log(shipping);
        console.log(user.email);
        
       
    }
    return (
       <div className='form-container'>
            <h2 className='form-title'>Shipping Information</h2>
            <form onSubmit={handleCreateUser}>
            <div className="input-group">
                <label htmlFor="fullName">Full Name</label>
                <input onBlur={handleFullNameBlur} type="text" id='fullName' placeholder='Enter Full Name' required />
            </div> 
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input value={user?.email} readOnly type="email" id='email' placeholder='Enter Your Email' required />
            </div>
            <div className="input-group">
                <label htmlFor="address">Address</label>
                <input onBlur={handleAddressBlur} type="text" id='address' placeholder='Enter a Address' required />
            </div>
            <div className="input-group">
                <label htmlFor="number">Phone Number</label>
                <input onBlur={handlePhoneNumberBlur} type="text" id='number' placeholder='Enter Phone Number' required />
            </div>
            <input className='form-submit' type="submit" value="Add Shipping" />
            </form>
           
           
        </div>
    );
};

export default Shipping;