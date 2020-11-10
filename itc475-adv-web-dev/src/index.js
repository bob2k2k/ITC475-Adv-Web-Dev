import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import HomeContainer from './Home';
import AboutUs from './aboutUs';
import ContactAgent from './contactAgent';
import Footer from './footer';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <HomeContainer />
    <AboutUs />
    <ContactAgent />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
