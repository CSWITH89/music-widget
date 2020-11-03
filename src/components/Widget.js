import React from 'react';
import TestImage from '../images/stage.jpg'

const Widget = ({playlistTitle, coverImage, trackCount}) => {
    return (
        <div className="widget">
            <section className="widget__left">
                <div className="widget__left--trackcount">50 TRACKS</div>
                <img alt="cover" className="widget__left--image" src={TestImage}></img>
            </section>
            <section className="widget__right"></section>
        </div>
    );
};

export default Widget;
