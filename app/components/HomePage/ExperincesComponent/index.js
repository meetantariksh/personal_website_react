/**
*
* ExperincesComponent
*
*/

import React from 'react';
// import styled from 'styled-components';


class ExperincesComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="work" id="work">
        <div className="container">
          <h3 className="w3_head w3_head1">Experience & Education <span>More about my past</span></h3>
          <h5>Work experience</h5>
          <div className="work-info-agileits">
            <div className="col-md-4 work-left-agileits-w3layouts">
              <h6><i className="fa fa-calendar-check-o" aria-hidden="true"></i> 2017-Present</h6>
            </div>
            <div className="col-md-8 work-right-w3-agileits">
              <h3>Tata Consultancy Services/<span> Web Development (J2EE)</span></h3>
              <p>Worked on development, enhancement and maintainence of enterprice level application with Struts framework. Also worked on migrating applications from Struts to Springs boot.</p>
            </div>
            <div className="clearfix"> </div>	
          </div>
          <div className="work-info-agileits">
            <div className="col-md-4 work-left-agileits-w3layouts">
              <h6><i className="fa fa-calendar-check-o" aria-hidden="true"></i> 2014-2017</h6>
            </div>
            <div className="col-md-8 work-right-w3-agileits">
              <h3>Tata Consultancy Services/<span> Frontend Web Development (React & Angular)</span></h3>
              <p>Worked on development of an enteprice level application in React (Microsite - React; Microservices - Springs Boot). Also worked on small scale internal stand alone applications in Angular.</p>
            </div>
            <div className="clearfix"> </div>	
          </div>
          <h5 className="work2">Education</h5>
          <div className="work-info-agileits">
            <div className="col-md-4 work-left-agileits-w3layouts">
              <h6><i className="fa fa-calendar-check-o" aria-hidden="true"></i> 2010-2014</h6>
            </div>
            <div className="col-md-8 work-right-w3-agileits">
              <h3>Netaji Subhash Engineering College</h3>
              <p>Compeleted Bachelors Degree in Electronics and Communication Engineering.</p>
            </div>
            <div className="clearfix"> </div>	
          </div>
          </div>
      </div>	
    );
  }
}

ExperincesComponent.propTypes = {

};

export default ExperincesComponent;
