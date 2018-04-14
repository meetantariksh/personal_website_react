/**
*
* SocialContributionsComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import SCA from '../../../images/homePage/gard1.jpg';
import OTS from '../../../images/homePage/gard2.jpg';

class SocialContributionsComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="services" id="socialContributions">
        <div className="container">
          <h3 className="w3_head w3_head1">Social Contributions</h3>
        </div>
        <div className="agileits_services_grids_bottom">
          <div className="container">
            <div className="col-md-6 agileits_service_grid_btm_left">
              <div className="agileits_service_grid_btm_left1">
                <div className="agileits_service_grid_btm_left2">
                  <i className="fa fa-diamond" aria-hidden="true"></i>
                  <h5>UNICEF</h5>
                  <p>Guardians of Hope.</p>
                </div>
                <img src={SCA} alt=" " className="img-responsive" />
              </div>
            </div>
            <div className="col-md-6 agileits_service_grid_btm_left">
              <div className="agileits_service_grid_btm_left1">
                <div className="agileits_service_grid_btm_left2">
                  <i className="fa fa-diamond" aria-hidden="true"></i>
                  <h5>UNICEF</h5>
                  <p>Contributor.</p>
                </div>
                <img src={OTS} alt=" " className="img-responsive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SocialContributionsComponent.propTypes = {

};

export default SocialContributionsComponent;
