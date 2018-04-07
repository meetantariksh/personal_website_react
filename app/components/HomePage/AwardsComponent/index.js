/**
*
* AwardsComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import SCA from '../../../images/homePage/Service_Commitment_Award.jpg';
import OTS from '../../../images/homePage/On_The_Spot_Award.jpg';
import STA from '../../../images/homePage/Star_Team_Award.jpg';


class AwardsComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="services" id="awards">
        <div className="container">
          <h3 className="w3_head w3_head1">Awards <span>My recognitions</span></h3>
        </div>
        <div className="agileits_services_grids_bottom">
          <div className="container">
            <div className="col-md-4 agileits_service_grid_btm_left">
              <div className="agileits_service_grid_btm_left1">
                <div className="agileits_service_grid_btm_left2">
                  <i className="fa fa-diamond" aria-hidden="true"></i>
                  <h5>On The Spot Award</h5>
                  <p>Awarded in recognition of outstanding contribution to the organization.</p>
                </div>
                <img src={OTS} alt=" " className="img-responsive" />
              </div>
            </div>
            <div className="col-md-4 agileits_service_grid_btm_left">
              <div className="agileits_service_grid_btm_left1">
                <div className="agileits_service_grid_btm_left2">
                  <i className="fa fa-certificate" aria-hidden="true"></i>
                  <h5>Service and Commitment Award</h5>
                  <p>Awarded in recognition of 3 years of dedicated service</p>
                </div>
                <img src={SCA} alt=" " className="img-responsive" />
              </div>
            </div>
            <div className="col-md-4 agileits_service_grid_btm_left">
              <div className="agileits_service_grid_btm_left1">
                <div className="agileits_service_grid_btm_left2">
                  <i className="fa fa-diamond" aria-hidden="true"></i>
                  <h5>Star Team Award</h5>
                  <p>Awarded in recognition of outstanding contribution as a team.</p>
                </div>
                <img src={STA} alt=" " className="img-responsive" />
              </div>
            </div>
            <div className="clearfix"> </div>
          </div>
        </div>
      </div>
    );
  }
}

AwardsComponent.propTypes = {

};

export default AwardsComponent;
