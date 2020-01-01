import React from 'react';
import {Helmet} from 'react-helmet';
// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


// import styling
import './App.scss';

// import application components
import Capstone from './components/Capstone/Capstone';
import Header from './components/Header/Header';
import PairProgram from './components/PairProgramming/PairProgram';
import FinServices from './components/FinServices/FinServices';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';



export default function App() {

  return (
    <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="keywords" content="'web development', 'web developer', 'York Region', GTA, 'mortgage broker', mortgage'" />
          <title>John Heckbert - Exciting New Web Developer in York Region</title>
      </Helmet>
      <Header />
      <Capstone />
      <PairProgram />
      <FinServices />
      <ContactForm />
      <Footer />
    </div>
  );
}