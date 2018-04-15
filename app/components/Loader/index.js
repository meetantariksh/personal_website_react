/**
*
* Loader
*
*/

import React from 'react';
// import styled from 'styled-components';

import loading from '../../images/homePage/loading2.gif';


class Loader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="gallery_wthree" >
        <div className="container">
          <h3 className="w3_head w3_head1"><img src={loading} style={{display: 'initial'}} alt=" " className="img-responsive"/></h3>
        </div>
      </div>
    );
  }
}

Loader.propTypes = {

};

export default Loader;
