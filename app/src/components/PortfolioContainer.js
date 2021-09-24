import React, { useState } from 'react';
import Header from './pages/Header';
import NavTabs from './NavTabs';
import About from './pages/About';
import Footer from './pages/Footer';
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
        return <Resume />;
    }
    return <Contact />;
  };

  


}