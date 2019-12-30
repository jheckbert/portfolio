import React from 'react';
// import { BrowserRouter, Link } from 'react-router-dom';

// middleware

// styling
import './Header.scss';

// images
import myPic from '../images/MyPicture.png';

//
export default class Header extends React.Component {

    render() {
        return (
          <>
              <header className="header__container">
                <p className="header__blink-white">*</p>
                <p className="header__blink-red">*</p>
              </header>
              <div className="header__banner">
                  <h2 className="header__title">My name is John Heckbert, and my passion is designing and developing easy to use technology that teaches true financial literacy so families can achieve their dreams sooner.</h2>
                  <img className="header__myPic" src={myPic} alt="just me" height='300' />
              </div>
              <div className="header__skill">
                  <h2 className="header__skill-mortgage">Financial Services</h2>
                  <h2 className="header__skill-web-dev">Web Development</h2>
              </div>
          </>
        )
    }
}