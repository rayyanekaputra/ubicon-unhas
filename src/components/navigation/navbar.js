import React from 'react';
import Link from 'next/link';
import '@styles/navigation/navbar.css'

// https://medium.com/@a.pirus/how-to-create-a-responsive-navigation-bar-in-next-js-13-e5540789a017

//penamaan import ikuti peraturan tsx
import navbar_logo from '@assets/navbar/navbar-logo.png';

const Navbar = () => {
return (
	<div className='navbar-container'>
        <div className='navbar-logo'>
            {/* panggil import */}
            <img src={navbar_logo} alt=''></img>
        </div>
        <div className='navbar-menu'>
            <Link href="/">
                Home
            </Link>
            {/* TODO: buatkan pagenya dan router di App.js */}
            <Link href="/blog">
                Blog
            </Link>
            <Link href="/about">
                About Us
            </Link>
        </div> 
        <div className='navbar-logo'>
            {/* panggil import navbar logo */}
            <img src={navbar_logo} alt='' style={{
                display: 'none'
            }}>

            </img>
        </div>
    </div>
        
);
};

export default Navbar;