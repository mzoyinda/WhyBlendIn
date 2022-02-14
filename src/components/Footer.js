import React from 'react';
import { FaInstagram, FaLinkedin,  FaTwitter } from 'react-icons/fa';

const Footer = () => {

    return (
       <footer>
    <div className="footer-copyright">
      <div className="container">
       <div className="row">
         <div className="col s12 offset-l2 l4 m6 center-align push-l6 push-m6">
          <span className="social-icons">
            <a href="/" target="_blank" className='instagram'><FaInstagram/></a>
            <a href="/" target="_blank" className='linkedin'><FaLinkedin/></a>
            <a href="/" target="_blank" className='twitter'><FaTwitter/></a>
          </span>
         </div>
         <div className="col s12 m6 l6 copyright-text pull-l6 pull-m6">
          <p className="center-align c-copyright">©Copyright <span id="showYear">{(new Date().getFullYear())}</span>- All rights reserved</p>
        </div>
       </div> 
      </div>
    </div>
  </footer>
    )
}
export default Footer;