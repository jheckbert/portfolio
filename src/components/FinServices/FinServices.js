import React, { Component } from 'react';

// middleware

// styling
import './FinServices.scss';


class FinServices extends Component {
    render() {
        return (
            <>  
              <div className="finsrvcs__container">
              </div>
                <div className="finsrvcs__banner">
                    <h2 className="finsrvcs__box-title">Financial Services</h2>
                </div>
                <div className="finsrvcs__box-container">
                </div>
                    <div className="finsrvcs__box box1">
                        <h3 className="finsrvcs__title">Residential Mortgages</h3>
                        <p className="finscrvcs__box-content">Achieve your home ownership dreams. Apply today to see how the Angel Mortgage team can help your family.</p>
                    </div>
                    <div className="finsrvcs__box box2">
                        <h2 className="finsrvcs__title">Commercial Mortgage</h2>
                        <p className="finscrvcs__box-content">Helping entrepreneurs realize their business goals. Start now to find out how the team at Angel Mortgage can help today.</p>
                    </div>
                    <div className="finsrvcs__box box3">
                        <h2 className="finsrvcs__title">Cash-back Credit Card</h2>
                        <p className="finscrvcs__box-content">If you are looking for a credit card with cash back privileges that can help you accomplish your home ownership goals sooner, click here today to apply.</p>
                    </div>
                    <div className="finsrvcs__box box4">
                        <h2 className="finsrvcs__title">Credit Coaching</h2>
                        <p className="finscrvcs__box-content">Looking for solutions to your credit issues? Debt collectors calling you every day? Now might be the time to learn more about how the team at Angel Mortgage can help.</p>
                    </div>
                
          </>  
        );
    }
}

export default FinServices;