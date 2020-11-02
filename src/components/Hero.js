import React from 'react';
import heroImage from '../images/stage.jpg'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__container">
                <div className="hero__container--left">
                    <h1>Coming Soon</h1>
                    <h2>Prep</h2>
                    <p>Sign up now</p>
                    <button className="hero__container--btn">
                        <a href="#">Sign Up</a>
                    </button>
                </div>
                <div className="hero__container--right">
                    <img src={heroImage} alt="stage" className="hero__container--img"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
