import React from 'react';
// import { HashRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
// import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

const App = () => {
    return (
        <div>
            <Header/>
            <About/>
            <Contact/>
            <Portfolio/>
            <Resume/>
            <Footer/>
        </div>
    )
}

export default App;



