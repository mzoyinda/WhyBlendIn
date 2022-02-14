import React from 'react';
import harpreet1 from '../images/harpreet3.png';
import harpreet2 from '../images/harpreet2.jpg';

const About = () => {
    return (
        <section id="about">
             <div className='container'>
            <div className="row">
                <div className="col s12 l6 m6">
                    <img src={harpreet1} alt="harpreet kaur"  />
                </div>
                <div className="col s12 l6 m6">
                    <p>Harpreet Kaur is a 1st generation tech leader at Microsoft with ~20 yrs of proven track record of leading global teams and shipping high quality products/solutions</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l6 m6 push-m6 push-l6">
                    <img src={harpreet2} alt="harpreet kaur" className='image2' />
                </div>
                <div className="col s12 l6 m6 pull-m6 pull-l6">
                    <p> She is a certified Leadership and Career Coach and award winning motivational and TEDx Speaker who gives unforgettable keynote speeches while sharing her experiences from tech, career branding, navigating from rejections and change, to championing diversity and inclusion. </p>
                    <p>Harpreet Kaur has been able to influence people through Podcasts, Workshops and Group Coaching. She also enjoys painting Abstract art during her free time.</p>
                </div>
            </div>
        </div>
       </section>
    );
}

export default About;
