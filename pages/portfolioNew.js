import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import PortfolioForm from '../components/portfolios/portfolioForm'
import { Row, Col } from 'reactstrap';
import { createPortfolio } from '../actions';

class PortfolioNew extends React.Component {

  constructor(props) {
    super();

    this.savePortfolio = this.savePortfolio.bind(this);
  }

  savePortfolio(portfolioData) {
    createPortfolio(portfolioData).then((portfolio) => {
      debugger;
      console.log(portfolio);
    }).catch((err) => { console.log(err) })
  }

  render() {
    return (
      <div>
        <BaseLayout {...this.props.auth} headerType="about">
          <BasePage className="portfolio-create-page" title="Create new portfolio">
            <Row>
              <Col md="6">
                <PortfolioForm onSubmit={this.savePortfolio} />
              </Col>
            </Row>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default withAuth('siteOwner')(PortfolioNew);