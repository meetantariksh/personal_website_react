/**
*
* AboutMeComponent
*
*/

import React from 'react';
import YouTube from 'react-youtube';
// import styled from 'styled-components';

const opts = {
  height: '390',
  width: '640',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

class AboutMeComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      showPlayer: false,
    }

    this.togglePlayer = this.togglePlayer.bind(this);
  }

  togglePlayer() {
    this.setState({
      showPlayer: !this.state.showPlayer,
    });
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    return (
      <div>
        <div className="about" id="about">
          <div className="col-md-6 about-left-w3ls">
            
          </div>
            <div className="col-md-6 person-info-agileits-w3layouts">
            <h3 className="w3_head w3_head1">About Me <span>I am Antariksh Roy</span></h3>
            <p><span>Hi!, I am Antariksh Roy </span>Nam arcu mauris, tincidunt sed convallis non, egestas ut lacus. Cras sapien urna, malesuada ut varius consequat, hendrerit nisl. Aliquam vestibulum, odio non ullamcorper malesuada.Nam arcu mauris, tincidunt sed convallis non, egestas ut lacus.</p>
              <ul>
                <li><span>Name</span>: Antariksh Roy</li>
                <li><span>Age</span>: 25 Years</li>
                <li><span>Experience</span>: 4 Years</li>
                <li><span>Primary Email</span>: <a href="mailto:meetantariksh@gmail.com">meetantariksh@gmail.com</a></li>
                <li><span>Primary Phone</span>: (+91) 896 145 2831</li>
                <li><span>Alternate Phone</span>: (+91) 987 484 2035</li>
                <li><span>Website</span>: <a href="http://meetantariksh.co.in" target='_blank'>meetantariksh.co.in</a></li>
                <li><span>Address</span>: 6/1 A, N.P. Lane, Kolkata (700031), WB, India</li>
                <li><a href="#" className="botton-w3ls">Download CV</a>
                  <a style={{cursor: 'pointer'}} onClick={this.togglePlayer} className="play-icon popup-with-zoom-anim botton-w3ls">Watch my video</a>
                </li>
              </ul>
            </div>
          <div className="clearfix"></div>
        </div>
        {
          !this.state.showPlayer && 
          <div className="mfp-container mfp-inline-holder"><div className="mfp-content"><div id="small-dialog" className="ww3ls_small_dialog wthree_pop mfp-hide">		
					<div className="agileits_modal_body">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Qmx5NLHrZqA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
					</div>
				<button title="Close (Esc)" type="button" className="mfp-close">×</button></div></div></div>
          
        }
        {
          this.state.showPlayer &&
          <div>
            <div className="mfp-bg my-mfp-zoom-in mfp-ready"></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor my-mfp-zoom-in mfp-ready" tabIndex="-1" style={{top: '725px', position: 'absolute', height: '874px'}}><div className="mfp-container mfp-inline-holder"><div className="mfp-content"><div id="small-dialog" className="w3ls_small_dialog wthree_pop">		
            <div className="agileits_modal_body">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Qmx5NLHrZqA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
          <button title="Close (Esc)" type="button" className="mfp-close" onClick={this.togglePlayer}>×</button></div></div></div></div>
        </div>
        }
      </div>
    );
  }
}

AboutMeComponent.propTypes = {

};

export default AboutMeComponent;
