import React, { Component } from 'react';
import Menu from './Menu';
import Banner from './Banner';
import HomePage from './HomePage/HomePage';
export default class Layout extends Component {
  render() {
    return (
      <div className="container">
        {/* <div className="header">
          <Menu />
        </div> */}
        <div className="content">
          <Banner />
          <HomePage />
        </div>
        <div className="footer">
          
        </div>
      </div>
    )
  }
};
