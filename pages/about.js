import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class About extends React.Component {
  render() {
    return (
      <div>
        <BaseLayout {...this.props.auth} headerType="about">
          <BasePage className="about-page" title="I am the about page">     
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default About;