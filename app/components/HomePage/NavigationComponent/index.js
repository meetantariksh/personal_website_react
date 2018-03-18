/**
*
* NavigationComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

class NavigationComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <nav className="mobile-menu">
        <ul>
          <li><a href="#home" className="active scroll" >Home</a></li>
          <li><a href="#about" className="scroll" >About</a></li>
          <li><a href="#skills" className="scroll" >Skills</a></li>
          <li><a href="#work" className="scroll" >Education</a></li>
          <li><a href="#gallery" className="scroll" >Gallery</a></li>
          <li><a href="#contact" className="scroll" >Contact</a></li>
        </ul>
      </nav>
    );
  }
}

NavigationComponent.propTypes = {

};

export default NavigationComponent;
