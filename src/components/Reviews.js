import React from 'react';
import { Carousel } from 'react-materialize';
import Card from './Card';
import keynote from '../images/keynote.jpg';

const Reviews = () => {
    return (
        <section className='reviews' id="reviews">
            <div className="container">
                <div className="row">
                    <h3 className="center-align">Reviews</h3>
                    <div className="row">
                            <div className="col m12 l12 s12" >
                            <Carousel
                                className="carousel"
                                options={{
                                    dist: -100,
                                    duration: 200,
                                    fullWidth: true,
                                    indicators: false,
                                    noWrap:false,
                                    numVisible: 5,
                                    onCycleTo: null,
                                    padding: 20,
                                    shift: 10
                                  }}
                            >
                                <a className="carousel-item" href="#one!">
                                    <Card
                            link="learn more"
                            image={keynote}
                            caption="Here is the standard card with an image thumbnail."
                        /></a>
                                <a className="carousel-item" href="#two!"><img src= 'https://picsum.photos/200/300?image=1' alt="1"/></a>
                                <a className="carousel-item" href="#three!"><img src= 'https://picsum.photos/200/300?image=2' alt="1"/></a>
                                <a className="carousel-item" href="#four!"><img src= 'https://picsum.photos/200/300?image=3' alt="1"/></a>
                                <a className="carousel-item" href="#five!"><img src= 'https://picsum.photos/200/300?image=4' alt="1"/></a>
  </Carousel>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;
