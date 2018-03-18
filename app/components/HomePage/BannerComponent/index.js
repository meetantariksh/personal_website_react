/**
*
* BannerComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import NavigationComponent from '../NavigationComponent';

class BannerComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header-agileinfo">
        <div className="header-banner text-center">
          <div className="container">
            <div className="header-bottom">
              <div className="col-md-4 col-sm-4 header-left">
                <span className="fa fa-envelope-o icon" aria-hidden="true"></span>
                <a href="mailto:info@example.com">info@example.com</a>
              </div>
              <div className="col-md-4 col-sm-4 logo">
                <h1 className="main-title">
                  <a href="index.html">Explore</a>
    
                </h1>
              </div>
              <div className="col-md-4 col-sm-4 header-right">
                <span className="fa fa-phone icon" aria-hidden="true"></span>
                <p>123 456 789</p>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="banner-text">
              <h4>welcome to my site!</h4>
              <h3>i'm canyon</h3>
              <div className="banner-slide">
                <h2 className="bnrtext">I'm a</h2>
                <b>
                  <span className="span1">
                    web developer
                    <br /> web designer
                    <br /> UI developer
                    <br /> web blogger
                    <br />
                  </span>
                </b>
    
                <div className="clearfix"></div>
              </div>
            </div>
          </div>
    
        </div>
    
        <div className="clear"></div>
        
        <NavigationComponent />
      </div>
    );
  }
}

BannerComponent.propTypes = {

};

export default BannerComponent;
