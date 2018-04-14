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
import SkillsComponent from '../../components/HomePage/SkillsComponent/Loadable';
import ExperiencesComponent from '../../components/HomePage/ExperincesComponent/Loadable';
import AwardsComponent from '../../components/HomePage/AwardsComponent/Loadable';
import WebsiteServicesComponent from '../../components/HomePage/WebsiteServicesComponent/Loadable';
import ContactMeComponent from '../../components/HomePage/ContactMeComponent/Loadable';
import SocialContributionsComponent from '../../components/HomePage/SocialContributionsComponent/Loadable';

import '../../styles/homePage/lightbox.css';
import '../../styles/homePage/popuo-box.css';

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
    easingMain();
    moveToTopMain();
    responseMain();
  }

  render() {
    return (
      <div>
          <BannerComponent />
          <AboutMeComponent />
          <section className="mid-w3layouts">
            <div className="container">
              <h3>Let's <span>work</span> together!</h3>
            </div>
          </section>
          <SkillsComponent />
          <AwardsComponent />
          <ExperiencesComponent />
          <WebsiteServicesComponent />
          <section className="mid-w3layouts">
            <div className="container">
              <h3>It's not how much we give but how much love we put into giving.<span>― Mother Teresa</span></h3>
            </div>
          </section>
          <SocialContributionsComponent />
          <ContactMeComponent />
      </div>
    );
  }
}
