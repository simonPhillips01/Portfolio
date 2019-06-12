import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import {Link} from '../routes';
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

import { getPortfolios } from '../actions';
import BasePage from '../components/BasePage';

class Portfolio extends React.Component {
  static async getInitialProps() {
    let portfolios = [];

    try {
      portfolios = await getPortfolios();
    } catch(err) {
      console.log(err);
    }

    return {portfolios};
  }

    renderPortfolios(portfolios) {
      return portfolios.map((portfolio, index) => {
        return (
          <Col key={index} md="4">
            <React.Fragment>
              <span>
                <Card className="portfolio-card">
                  <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
                  <CardBody>
                    <p className="portfolio-card-city">{portfolio.location}</p>
                    <CardTitle className="portfolio-card-title">{portfolio.title}</CardTitle>
                    <CardText className="portfolio-card-text">{portfolio.description}</CardText>
                    <div className="readMore"> </div>
                  </CardBody>
                </Card>
              </span>
            </React.Fragment>
          </Col>
        )
      })
    }
  
  render() {
    const { portfolios } = this.props;

    return (
      <div>
        <BaseLayout {...this.props.auth} headerType="portfolio">
          <BasePage className="portfolio-page" title="Portfolios">
            <Row>  
              { this.renderPortfolios(portfolios) }
            </Row>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default Portfolio;
