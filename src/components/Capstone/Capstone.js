import React, { Component } from 'react';

// import styling
import './Capstone.scss'; 

// import images 
import capstoneIntro from '../images/capstone-opening.png';
import capstoneResults from '../images/capstone-results.png';


class Capstone extends Component {
    render() {
        return (
            <div className="capstone">

                <p> 
                    Images captured from my Capstone project - Mortgage Interest Rate Estimator
                </p>
                <div>
                    <img src={capstoneIntro} alt="the opening screen from the capstone" width="550" />
                    <img src={capstoneResults} alt="the results screen from the capstone" width="550" />
                </div>
            </div>
        );
    }
}

export default Capstone;