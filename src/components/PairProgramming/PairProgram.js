import React, { Component } from 'react';

// import images
import slide from '../images/PairProgrammingProject.png';

export default class PairProgram extends Component {
    render() {
        return (
            <div>
                <p>From the Paired Programming Challenge</p>
                <img src = {slide} alt = "slide shot of our paired programming challenge" width = "550" />
            </div>
        );
    }
}
