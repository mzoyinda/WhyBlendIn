import React from 'react';
import data from "../data/featured-data";

const Featured = () => {
    return (
        <section className='featured' id="featured">
            <div className="container">
                <div className="row">
                    <h3 className="center-align">Featured</h3>
                    <div className="row">
                        {data.map(({ id, title, img, link }) => (
                            <div className="col m4 l4 s6" key={id}>
                                <a href={link} className="img-container" target="_blank" rel="noreferrer">
                                    <img src={img} alt={title}></img>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
