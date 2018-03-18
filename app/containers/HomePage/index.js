/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import BannerComponent from '../../components/HomePage/BannerComponent/Loadable';
import AboutMeComponent from '../../components/HomePage/AboutMeComponent/Loadable';

import '../../styles/homePage/lightbox.css';
import '../../styles/homePage/popuo-box.css';

import { 
  navigationBar,
  cmOverlay,
  magicPop,
  scroolToTop,
  smoothScroll,
  typeAnimation,
  responsiveSlides
} from '../../externalJS/homePage/customJS-smoothScrolling';

import easingMain from '../../externalJS/easing';
import cmOverlayMain from '../../externalJS/jquery.cm-overlay';
import magicPoopupMain from '../../externalJS/jquery.magnific-popup';
import moveToTopMain from '../../externalJS/move-top';
import responseMain from '../../externalJS/responsiveslides.min';
import smoothScroolMain from '../../externalJS/SmoothScroll.min';
import typedMain from '../../externalJS/typed';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    cmOverlayMain();
    responseMain();
    magicPoopupMain();
    typedMain();
    smoothScroolMain();
  }

  render() {
    return (
      <div>
          <BannerComponent />
          <AboutMeComponent />
      </div>
    );
  }
}
