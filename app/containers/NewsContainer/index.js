/**
 *
 * NewsContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectNewsContainer, {
  makeSelectLoadingNews,
  makeSelectLoadingNewsComplete,
  makeSelectLoadingNewsError,
  makeSelectNewsData
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import ErrorBoundary from '../../components/ErrorBoundary';
import Loader from '../../components/Loader';
import NewsComponent from '../../components/NewsComponent/Loadable';

import {
  loadNews,
  resetLoadNews
} from './actions';

export class NewsContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.renderThisComponent = this.renderThisComponent.bind(this);
  }

  componentWillMount(){
    this.props.dispatch(loadNews());
  }

  renderThisComponent() {
    if(this.props.loadingNews) {
      return (
        <Loader />
      )
    }else if(this.props.loadingNewsComplete){
      return (
        <ErrorBoundary errorMessage='Something went wrong while trying to render the news. Please try after some time.'>
          <NewsComponent indiaNews={JSON.parse(this.props.newsData.newsHeadLinesIndia).articles} 
            worldNews={JSON.parse(this.props.newsData.newsHeadLinesWorld).articles} />
        </ErrorBoundary>
      )
    }else {
      return (
        <ErrorBoundary hasError={true} errorMessage='Something went wrong while trying to fetch the news. Please try after some time.' />
      )
    }
  }

  render() {
    return (
      <ErrorBoundary>
        {this.renderThisComponent()}
      </ErrorBoundary>
    );
  }
}

NewsContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  newscontainer: makeSelectNewsContainer(),
  loadingNews: makeSelectLoadingNews(),
  loadingNewsComplete: makeSelectLoadingNewsComplete(),
  loadingNewsError: makeSelectLoadingNewsError(),
  newsData: makeSelectNewsData()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'newsContainer', reducer });
const withSaga = injectSaga({ key: 'newsContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(NewsContainer);
