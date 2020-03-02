import React, { Component } from 'react';
  
// import logos
import github from '../images/github_logo.jpeg';
import instagram from '../images/instagram_logo.jpeg';
import linkedin from '../images/linkedin.png';
import stackover from '../images/stackover_logo.jpeg';
import twitter from '../images/twitter_logo.jpeg';
import download from '../images/download-icon.jpg';
import resume from '../images/Heckbert-John-Resume-RV1.pdf';

// import styling
import './Footer.scss';

class Footer extends Component {
    
    render() {
        return (
            <div className="footer__container">
                <div className="footer__sm-links">
                    <a className="footer__sm-stackover" href="https://stackoverflow.com/users/12573035/jheckbert" target="blank"><img src={stackover} alt="stackoverflow logo" width="25" /></a>
                    <a className="footer__sm-github" href="https://github.com/jheckbert" target="blank"><img src={github} alt="github logo" width="25" /></a>
                    <a className="footer__sm-twitter" href="https://twitter.com/jheckbert" target="blank"><img src={twitter} alt="twitter logo" width="25" /></a>
                    <a className="footer__sm-instagram" href="https://instagram.com/johnheckbert" target="blank"><img src={instagram} alt="instagram logo" width="25" /></a>
                    <a className="footer__sm-linkedin" href="https://linkedin.com/in/johnheckbert" target="blank"><img src={linkedin} alt="linkedin logo" width="25" /></a>
                    <a className="footer__sm-resume" href={resume} download target="blank"><img src={download} alt="download icon" width="25"></img></a>
                </div>
                <div className="footer__copywrite">
                    <p>@ John Heckbert, 2019</p>
                </div>
                <div className="footer__contact">
                    <a className="footer__contact-phone" href="tel:+1(416)918.6715">Cell: 416.918.6715</a>
                    <a className="footer__contact-email" href="mailto:john@johnheckbert.com" target="blank">Email: john@johnheckbert.com</a>
                </div>
            </div>
        );
    }
}

export default Footer;