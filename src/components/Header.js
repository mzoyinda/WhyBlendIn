import React from 'react';
import Navbar from './Navbar';
import { FaQuoteLeft } from 'react-icons/fa';

const Header = () => {
    return (
        <div>
            <header>
                <Navbar />
                <div className='banner'>
                   <div className='img-container'> </div>
                    <div className='action-btn'>
                        <a href="#contact" id="btn-invite" className='btn btn-large'>Invite to Speak</a>
                        <a href="#contact" id="btn-coach" className='btn btn-large'>Book for Coaching</a>
                    </div>
                </div>
                <blockquote className='container quote'>
                <FaQuoteLeft/>  We are only limited by the things that we allow to limit us..
                </blockquote>
            </header>
  
        </div>
    );
};

export default Header;
