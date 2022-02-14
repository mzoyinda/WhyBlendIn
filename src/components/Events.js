import React from 'react';
import Card from './Card';
import keynote from '../images/keynote.jpg';
import podcast from '../images/podcast.jpeg';
import workshop from '../images/workshop.jpg';
import group from '../images/group.jpeg';

const Events = () => {
    return (
        <section id="events">
            <div className="container events">
                <h3 className='center-align'>Events</h3>
                <div className="row card-row">
                    <div className="col s12 l6 m6">
                        <h5 className='center-align'>Keynote Speaking</h5>
                        <Card
                            // link="learn more"
                            image={keynote}
                            caption="Are you looking for that unforgettable speech to make sure your audience and teams are going back with rejuvenated energy and motivation? I can bring new life and connection to your next event. "
                        />
                    </div>
                    <div className="col s12 l6 m6">
                        <h5 className='center-align'>Podcasts</h5>
                        <Card
                            // link="learn more"    
                            image={podcast}
                            caption="Happy to be a guest on your podcast where I can share my experiences in tech world, embracing the future, standing out, career branding, navigating from rejections and diversity amidst others."
                        />
                    </div>
                   
                </div>
                <div className="row card-row">
                <div className="col s12 l6 m6">
                        <h5 className='center-align'>Workshops</h5>
                        <Card
                            // link="learn more"
                            image={workshop}
                            caption="I help break through the boundaries that are limiting your team and get them ready to shape the future. I can help your team to deep dive into themes of your choice with mind boggling and fun exercises and interactive tools. "
                        />
                    </div>
                <div className="col s12 l6 m6">
                        <h5 className='center-align'>Group Coaching</h5>
                        <Card
                            // link="learn more"
                            image={group}
                            caption="Do you want to tell the world you are enough and bring your whole self to this world. You are a challenger and learner mindset who is ready to shine bright. I am happy to be part of your journey to help you be yourself and develop you into the next best leaders."
                        />
                    </div>
                </div>
            </div>
        </section>
        );
};

export default Events;
