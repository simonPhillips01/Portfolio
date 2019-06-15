import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import PortfolioForm from '../components/portfolios/portfolioForm'
import { Row, Col } from 'reactstrap';
import { createPortfolio } from '../actions';
import { Router } from '../routes';

const INITIAL_VALUES = { title: '',
                         company: '', 
                         location: '', 
                         position: '',
                         description: '', 
                         startDate: '', 
                         endDate: ''};

class PortfolioNew extends React.Component {

  constructor(props) {
    super();

    this.state = {
      error: undefined
    }

    this.savePortfolio = this.savePortfolio.bind(this);
  }

  savePortfolio(portfolioData, {setSubmitting}) {
    setSubmitting(true);

    createPortfolio(portfolioData).then((portfolio) => {
      setSubmitting(false);
      this.setState({error: undefined});
      Router.pushRoute('/portfolios');
    }).catch((err) => {
      const error = err.message || 'Server Error!';
      setSubmitting(false);
      this.setState({error});
    })
  }

  render() {
    const {error} = this.state;
    return (
      <div>
        <BaseLayout {...this.props.auth} headerType="about">
          <BasePage className="portfolio-create-page" title="Create new portfolio">
            <Row>
              <Col md="6">
                <PortfolioForm initialValues={INITIAL_VALUES} 
                                error={error} 
                                onSubmit={this.savePortfolio} />
              </Col>
            </Row>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default withAuth('siteOwner')(PortfolioNew);