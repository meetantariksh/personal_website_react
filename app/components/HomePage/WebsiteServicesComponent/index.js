/**
*
* WebsiteServicesComponent
*
*/

import React from 'react';
// import styled from 'styled-components';

import image4 from '../../../images/homePage/4.jpg';
import image5 from '../../../images/homePage/5.jpg';
import image6 from '../../../images/homePage/6.jpg';


class WebsiteServicesComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="services" id="classes">
		<div className="container">
			<h3 className="w3_head w3_head1">Website Services</h3>
		</div>
		<div className="agileits_services_grids_bottom">
			<div className="container">
				<div className="col-md-4 agileits_service_grid_btm_left">
					<div className="agileits_service_grid_btm_left1">
						<div className="agileits_service_grid_btm_left2">
							<i className="fa fa-desktop" aria-hidden="true"></i>
							<h5>Web Development</h5>
							<p>[COMMING SOON]</p>
						</div>
						<img src={image4} alt=" " className="img-responsive" />
					</div>
				</div>
				<div className="col-md-4 agileits_service_grid_btm_left">
					<div className="agileits_service_grid_btm_left1">
						<div className="agileits_service_grid_btm_left2">
							<i className="fa fa-camera-retro" aria-hidden="true"></i>
							<h5>Photography</h5>
							<p>[COMMING SOON]</p>
						</div>
						<img src={image5} alt=" " className="img-responsive" />
					</div>
				</div>
				<div className="col-md-4 agileits_service_grid_btm_left">
					<div className="agileits_service_grid_btm_left1">
						<div className="agileits_service_grid_btm_left2">
							<i className="fa fa-amazon" aria-hidden="true"></i>
							<h5>Amazon Web Services</h5>
							<p>[COMMING SOON]</p>
						</div>
						<img src={image6} alt=" " className="img-responsive" />
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
	</div>
    );
  }
}

WebsiteServicesComponent.propTypes = {

};

export default WebsiteServicesComponent;
