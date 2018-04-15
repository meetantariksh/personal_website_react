/**
 *
 * TwiterFeedContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTwiterFeedContainer from './selectors';
import reducer from './reducer';
import saga from './saga';

export class TwiterFeedContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

TwiterFeedContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  twiterfeedcontainer: makeSelectTwiterFeedContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'twiterFeedContainer', reducer });
const withSaga = injectSaga({ key: 'twiterFeedContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TwiterFeedContainer);
