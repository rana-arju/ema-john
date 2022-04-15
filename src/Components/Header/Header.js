import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = event => {
        signOut(auth);
    }
    return (
        <nav className='header-nav'>
          <img src={logo} alt="" />
          <div className="nav-menu">
              <Link to="/">Shop</Link>
              <Link to="/order">Orders</Link>
              <Link to="/shipping">Shipping</Link>
              <Link to="/about">About</Link>
              <Link to="/inventory">Inventory</Link>
            {
                user ? <button onClick={handleSignOut} className="enter-btn">Sign out</button> :
                <Link to="/login" className='enter-btn'>Login/signup</Link>
                  
            }

          </div>
        </nav>
    );
};

export default Header;