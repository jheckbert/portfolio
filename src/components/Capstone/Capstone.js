import React, { Component } from 'react';

// import styling
import './Capstone.scss';

// import images
import capstoneIntro from '../images/capstone-opening.png';
import capstoneResults from '../images/capstone-results.png';


class Capstone extends Component {
    render() {
        return (
            <>
            <div className="capstone">
                <h2 className="capstone__title">Capstone project - Mortgage Interest Rate Estimator</h2>
                <div className="capstone__scr">
                    <div className="capstone__scr-intro">
                        <p>
                            My project seeks to answer the second question every mortgage broker is asked - What rate will I pay on my mortgage?
                            The self-employed, the credit challenged and those with minimal down payments are not well served by the major lending
                            institutions.
                        </p>
                        <p>
                            By asking six to eight questions, I am able to provide a rough estimate to the user about what rate they
                            can expect to pay on their mortgage.
                        </p>
                        <img className="capstone__scr-image" src={capstoneIntro} alt="the opening screen from the capstone" />
                    </div>
                    <div className="capstone__scr-result">
                        <img className="capstone__scr-image" src={capstoneResults} alt="the results screen from the capstone" />
                        <p>
                            The information provided by the user is then processed through a set of business rules on an Express Node server
                            and an estimated rate range and three recommendations unique to their situation are offered to help them maximize their
                            opportunity. I also offer them access to a mobile tool they can use to monitor their credit history, and the opportunity to
                            apply for credit - either a mortgage or a credit card - if they are ready to proceed.
                        </p>
                        <p>
                            I complete the processing by sending them an email reminding them of this information so they can take action on the recommendations.
                        </p>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Capstone;

