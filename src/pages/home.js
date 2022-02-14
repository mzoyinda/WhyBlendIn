import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Events from '../components/Events';
import Featured from '../components/Featured';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const home = () => {
    return (
        <>
            <Header />
            <main>
                <About />
                <Events />
                <Featured />
                <Contact/>
           </main>
           <Footer/>
        </>
    );
};

export default home;
