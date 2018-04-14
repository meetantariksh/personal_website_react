/**
*
* ContactMeComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import { 
  navigationBar,
  cmOverlay,
  magicPop,
  scroolToTop,
  smoothScroll,
  responsiveSlides
} from '../../../externalJS/homePage/customJS-smoothScrolling';

class ContactMeComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    navigationBar();
    cmOverlay();
    magicPop();
    scroolToTop();
    smoothScroll();
    responsiveSlides();
  }

  render() {
    return (
      <div className="contact-info" id='contact'>
        <div className="container">
          <div className="col-md-4 contact-grids">
            <h5>Find me</h5>
            <div className="w3_agileits_social_media-footer">
              <ul>
                <li><a target="_blank" href="https://github.com/meetantariksh" className="wthree_twitter"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                <li><a target="_blank" href="https://www.facebook.com/meetantariksh" className="wthree_facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a target="_blank" href="https://www.instagram.com/meetantariksh" className="wthree_facebook"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                <li><a target="_blank" href="https://twitter.com/Antariksh007" className="wthree_twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 contact-grids contact-mid">
            <h5>Contact Info</h5>
            <ul>
              <li><i className="fa fa-phone" aria-hidden="true"></i>+91 9874842035</li>
              <li><i className="fa fa-phone" aria-hidden="true"></i>+91 8961452831</li>
              <li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:meetantariksh@gmail.com">meetantariksh@gmail.com</a></li>
              <li><i className="fa fa-envelope-o" aria-hidden="true"></i><a href="mailto:meetantariksh@hotmail.com">meetantariksh@hotmail.com</a></li>
            </ul>
          </div>

          <div className="col-md-4 contact-grids contact-mid">
          <br/><br/>
          <ul>
              <li> <i className="fa fa-map-marker" aria-hidden="true"></i> 6/1 A,</li>
              <li>{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} Naskar Para Lane,</li>
              <li> {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} Selimpur Road,</li>
              <li> {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} Kolkata (700031),</li>
              <li> {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'} India</li>
            </ul>
          </div> 
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

ContactMeComponent.propTypes = {

};

export default ContactMeComponent;
