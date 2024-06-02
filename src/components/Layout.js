import React from 'react';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div>
    <HomePage />
    <Navbar />
    <div className="content">{children}</div>
    <Footer/>
  </div>
);

export default Layout;