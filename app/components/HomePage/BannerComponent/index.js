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
            <nav className="mobile-menu">
              <ul>
                <li><a href="#home" className="active scroll" >Home</a></li>
                <li><a href="#about" className="scroll" >About</a></li>
                <li><a href="#skills" className="scroll" >Skills</a></li>
                <li><a href="#awards" className="scroll" >Awards</a></li>
                <li><a href="#work" className="scroll" >Education</a></li>
                <li><a href="#classes" className="scroll" >Services</a></li>
                <li><a href="#socialContributions" className="scroll" >Social Contributions</a></li>
                <li><a href="#contact" className="scroll" >Contact</a></li>
              </ul>
              <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="antariksh-roy-60953360"><a class="LI-simple-link" href='https://in.linkedin.com/in/antariksh-roy-60953360?trk=profile-badge'>Antariksh Roy</a></div>
                <div className="clearfix"></div>
            </nav>
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
