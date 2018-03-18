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
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">Menu
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
  
        <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
          <ul>
            <li>
              <a href="index.html" className="active">Home</a>
            </li>
            <li>
              <a href="#about" className="scroll">About Me</a>
            </li>
            <li>
              <a href="#skills" className="scroll">my Skills</a>
            </li>
            <li>
              <a href="#services" className="scroll">my Services</a>
            </li>
            <li>
              <a href="#port" className="scroll">My Work</a>
            </li>
            <li>
              <a href="#contact" className="scroll">Contact me</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

NavigationComponent.propTypes = {

};

export default NavigationComponent;
