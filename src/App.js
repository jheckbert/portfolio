import React from 'react';
import {Helmet} from 'react-helmet';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


// import styling
import './App.scss';

// import application components
import Capstone from './components/Capstone/Capstone';
import Header from './components/Header/Header';
import PairProgram from './components/PairProgramming/PairProgram';


function App() {
  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>John Heckbert - Hot New Web Developer in York Region</title>
      </Helmet>
      <Header />
      <Capstone />
      <PairProgram />
    </div>
  );
}

export default App;
