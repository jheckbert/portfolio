import React, { Component } from 'react';

// import styling 
import './Footer.scss';

class Footer extends Component {
    render() {
        return (
            <div className="footer__container">
                <div className="footer__sm-links">
                    <a className="footer__sm-linkedin" href="https://linkedin.com/in/jheckbert"></a>
                    <a className="footer__sm-twitter" href="https://twitter.com/jheckbert"></a>
                    <a className="footer__sm-github" href="https://github.com/jheckbert"></a>
                    <a className="footer__sm-instagram" href="https://instagram.com/jheckbert"></a>
                </div>
                <div className="footer__copywrite">
                    <p>@ John Heckbert, 2019</p>
                </div>
                <div className="footer__contact">
                    <p>Contact Info here</p>
                </div>
            </div>
        );
    }
}

export default Footer;