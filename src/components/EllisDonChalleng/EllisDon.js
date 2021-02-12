import React, { Component } from 'react';

// import styling
import './EllisDon.scss';

// import images
import presentation from '../images/EllisDonAlumniChallenge.pdf';
import slide from '../images/EllisDonSlide.png';

export default class EllisDon extends Component {
    
    render() {
        return (
            <div className="ellis-don">
                <h2 className="ellis-don__title">EllisDon Web-based BPM Project</h2>
                    <div className="ellis-don__container">  
                        <div className="ellis-don__slide">
                            <img className="ellis-don__slide-shot" src = {slide} alt = "slide shot of the EllisDon challenge" />
                        </div>
                        <div className="ellis-don__intro">
                            <p>
                                Our team was tasked with creating a web-based presentation layer for a Camunda Modeler and BPM engine in less than a week, complete with Drag and Drop capability. 
                            </p>
                            <p>
                                The presentation deck showing our findings, recommendations and completed project is available for download <a className="ellis-don__present" href={presentation} download target="blank">here.</a>
                            </p>
                        </div>
                    </div>     
            </div>
        );
    }
}
