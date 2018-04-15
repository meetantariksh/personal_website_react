/**
*
* ErrorBoundary
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      if(this.props.errorMessage && this.props.errorMessage !== '') {
      return (
        <div className="gallery_wthree" >
          <div className="container">
            <h3 className="w3_head w3_head1">{this.props.errorMessage}</h3>
          </div>
        </div>
      );
      }else {
        return (
          <div className="gallery_wthree" >
            <div className="container">
              <h3 className="w3_head w3_head1">Something went wrong while loading this section.</h3>
            </div>
          </div>
        );
      }
    } else if(this.props.hasError) {
      if(this.props.errorMessage && this.props.errorMessage !== '') {
        return (
          <div className="gallery_wthree" >
            <div className="container">
              <h3 className="w3_head w3_head1">{this.props.errorMessage}</h3>
            </div>
          </div>
        );
      }else {
        return (
          <div className="gallery_wthree" >
            <div className="container">
              <h3 className="w3_head w3_head1">Something went wrong while loading this section.</h3>
            </div>
          </div>
        );
      }
    }
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

ErrorBoundary.propTypes = {
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string
};

export default ErrorBoundary;
