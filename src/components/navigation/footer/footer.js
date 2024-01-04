'use client'

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "@styles/navigation/footer/footer.scss";

// Icons dari MaterialUI
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


function Footer() {
  return (
    <div className="footer-container">
      <div className="row-1">
        {/* <h2>ROW 1</h2> */}
        <div className="col-1">
        <h1 style={{
          color: 'white'
        }}>UBICON</h1>
        </div>
        <div className="col-2">
          {/* https://refine.dev/blog/next-js-link-component/ */}
          <Link href='/'><p>Home</p></Link>
          <Link href='/news'><p>News</p></Link>
          <Link href='/publication'><p>Publication</p></Link>
          <Link href='/people'><p>People</p></Link>
        </div>
        <div className="col-3">
          <p>
            Punya pertanyaan lainnya? <br />
            Hubungi kami di
          </p>
          <div className="socmed-icon-label-wrapper">
            <WhatsAppIcon className="icon-linkedin"/>
            <p>+62 882 0034 91816</p>
          </div>
          <div className="socmed-icon-label-wrapper">
          <MailOutlineIcon className="icon-linkedin"/>
            <p>informatika@unhas.ac.id</p>
          </div>
        </div>
        <div className="col-4">
          <div className="socmed-icon-label-wrapper">
            <InstagramIcon className="icon-linkedin"/>
            <p>Instagram</p>
          </div>
          <div className="socmed-icon-label-wrapper">
            <LinkedInIcon className="icon-linkedin"/>
            <p>Linked-in</p>
          </div>
          <div className="socmed-icon-label-wrapper">
            <FacebookIcon className="icon-linkedin"/>
            <p>Facebook</p>
          </div>
        </div>
      </div>
      <div className="row-2">
        <p>Jln. Poros Jalan Poros Malino Km. 6, Bontomarannu. Gowa, Sulawesi Selatan. 92171 Km.6, Gowa</p>
      </div>
      <div className="row-3">
        
        <p>© 2023 INFORMATICS OF HASANUDDIN</p>
      </div>
    </div>
  );
}

export default Footer;
