import React, { Component } from 'react';

// import styling
import './PairProgramming.scss';

// import images
import slide from '../images/PairProgrammingProject.png';

export default class PairProgram extends Component {
    
    render() {
        return (
            <div className="team-prog">
                <h2 className="team-prog__title">Paired Programming Challenge - Corporate Lingo Bingo</h2>
                    <div className="team-prog__container">  
                        <div className="team-prog__intro">
                            <p>
                                My partner - <a className="team-prog__jtang" href="https://github.com/jtang257">Jonathan Tang</a> - and I chose to build a corporate lingo bingo game for our paired programming challenge. 
                                We sourced our background data from 'https://corporatebs-generator.sameerkumar.website/'. 
                            </p>
                            <p>
                                Our first choice for a project was the number of incorrect statements and falsehoods shared by a certain US president - but the list was too large.  
                            </p>
                        </div>
                        <div className="team-prog__slide">
                            <img className="team-prog__slide-shot" src = {slide} alt = "slide shot of our paired programming challenge" />
                        </div>
                    </div>     
            </div>
        );
    }
}
