import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import PortfolioForm from '../components/portfolios/portfolioForm'

class PortfolioNew extends React.Component {
  render() {
    return (
      <div>
        <BaseLayout {...this.props.auth} headerType="about">
          <BasePage className="portfolio-create-page" title="Create new portfolio">
              <PortfolioForm/>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default withAuth('siteOwner')(PortfolioNew);