/**
*
* BannerComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import NavigationComponent from '../NavigationComponent';

import menImage from '../../../images/homePage/men.png';

import { 
  typeAnimation
} from '../../../externalJS/homePage/customJS-smoothScrolling';

class BannerComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    typeAnimation();
  }

  render() {
    return (
      <div className="banner" id="home" >
        <div className="header">
          <div className="w3_agile_logo">
            <h1><a href="index.html">My Info<span>WHO AM I?</span></a></h1>
          </div>
          <div className="w3_menu">
            <div className="mobile-nav-button">
              <div className="mobile-nav-button__line"></div>
              <div className="mobile-nav-button__line"></div>
              <div className="mobile-nav-button__line"></div>
            </div>
          </div>
          <div className="clearfix"> </div>
        </div>
        <div className="agile_banner_info">
        <h2><span>HI! I'm</span> Antariksh Roy</h2>
          <div id="typed-strings" className="agileits_w3layouts_strings">
              <p><i>FRONTEND DEVELOPER.</i></p>
              <p><i>BACKEND DEVELOPER.</i></p>
              <p><i>FULL STACK DEVELOPER.</i></p>
              <p><i>WEB DEVELOPER.</i></p>
            </div>
          <span id="typed" style={{whiteSpace: 'pre'}}></span>
          <p className="banner-p-w3ls">Excellence is not an act, it's a habbit.</p>
        </div>
        <div className="w3_agileits_social_media">
          <ul>
            <li><a href="#" className="wthree_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
            <li><a href="#" className="wthree_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
            <li><a href="#" className="wthree_dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
            <li><a href="#" className="wthree_behance"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
          </ul>
        </div>
        <div className="banner-image-w3layouts">
          <img src={menImage} alt=" " className="img-responsive" />
        </div>
    </div>
    );
  }
}

BannerComponent.propTypes = {

};

export default BannerComponent;
