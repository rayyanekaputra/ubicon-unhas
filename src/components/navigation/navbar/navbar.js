'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import '@styles/navigation/navbar/navbar.scss'
import Image from 'next/image';

// https://medium.com/@a.pirus/how-to-create-a-responsive-navigation-bar-in-next-js-13-e5540789a017

//penamaan import ikuti peraturan tsx
import navbar_logo from '@assets/navbar/navbar-logo.png';

const Navbar = () => {

    //TO DO: cari supaya bagaimana onscroll berubah background navbarnya
    //https://www.geeksforgeeks.org/how-to-change-the-navbar-color-when-you-scroll-in-reactjs/
    const [checkScroll, setCheckScroll] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const navbarScroll = () => {
        // ERROR FIX 27 Agustus: Kenapa undefined type ki 'window' di react? pake typeof https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97
        // https://stackoverflow.com/questions/69473259/how-to-show-or-hide-navbar-when-scroll-use-react-js
        
        if (typeof window !== 'undefined') { 
            if (window.scrollY >= 80){
                setCheckScroll(false);
            } else {
                setCheckScroll(true);
            }
      
            // remember current page location to use in the next move
            setLastScrollY(window.scrollY); 
          }
      
    }

    useEffect(()=> {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', navbarScroll);
      
            // cleanup function
            return () => {
              window.removeEventListener('scroll', navbarScroll);
        };
        }
    },[lastScrollY])
    

return (
	<div className={checkScroll? 'navbar-container-trans':'navbar-container-white'}>
        <div className='navbar-logo'>
            {/* panggil import */}
            <Link href="/">
            <Image src={navbar_logo} alt='logo ubicon'/>
            </Link>
           
        </div>
        <div className='navbar-menu'>
            <Link href="/">
              <p>Home</p>  
            </Link>
            {/* TODO: buatkan pagenya dan router di App.js */}
            <Link href="/blog">
                <p>Blog</p>  
            </Link>
            <Link href="/about">
                <p>About Us</p>  
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