/**
*
* NewsComponent
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import missingImage from '../../images/homePage/missingImage.gif';


class NewsComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    console.log(this.props.indiaNews);
    console.log(this.props.worldNews);
  }

  render() {
    return (
      <div>
        <section className="mid-w3layouts">
          <div className="container">
            <h3>In the case of news, we should always wait for the sacrament of confirmation. <span>- Voltaire</span></h3>
          </div>
        </section>
        {
          this.props.indiaNews && this.props.indiaNews.length > 0 && 
          <div className="gallery_wthree" id="news">
            <div className="container">
                <h3 className="w3_head w3_head1">News <span>(India)</span></h3>
              <div className="gallery_grid agileits_w3layouts">
              {
                this.props.indiaNews.map((news, index) => {
                  return (
                    <div className="col-md-6  col-sm-6 col-xs-6 grid_w3" key={'__indiaNews__' + index}>
                    <div className="grid-1">
                      <a className="cm-overlay" target="_blank"  href={news.url}>
                        <img style={{height: '370px'}} src={(news.urlToImage && news.urlToImage!=='') ? news.urlToImage : missingImage} alt=" " className="img-responsive" />
                        <div className="w3agile-text w3agile-text-smal1">
                          <h5 style={{fontSize: '1.2em'}}>{news.title}</h5>
                        </div>
                      </a>
                    </div>
                <div className="clearfix"></div>
                    
                  </div>
                  )
                })
              }

              

              </div>

              </div>	
            </div>
        }
        {
          this.props.worldNews && this.props.worldNews.length > 0 && 
          <div className="gallery_wthree" id="news">
            <div className="container">
                <h3 className="w3_head w3_head1">News <span>(World)</span></h3>
              <div className="gallery_grid agileits_w3layouts">
              {
                this.props.worldNews.map((news, index) => {
                  return (
                    <div className="col-md-6  col-sm-6 col-xs-6 grid_w3" key={'__indiaNews__' + index}>
                    <div className="grid-1">
                      <a className="cm-overlay" target="_blank"  href={news.url}>
                        <img style={{height: '370px'}} src={(news.urlToImage && news.urlToImage!=='') ? news.urlToImage : missingImage} alt=" " className="img-responsive" />
                        <div className="w3agile-text w3agile-text-smal1">
                          <h5 style={{fontSize: '1.2em'}}>{news.title}</h5>
                        </div>
                      </a>
                    </div>
                <div className="clearfix"></div>
                    
                  </div>
                  )
                })
              }

              

              </div>

              </div>	
            </div>
        }
      </div>
    );
  }
}

NewsComponent.propTypes = {
  indiaNews: PropTypes.array,
  worldNews: PropTypes.array,
};

export default NewsComponent;
