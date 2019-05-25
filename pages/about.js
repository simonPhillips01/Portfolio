import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class About extends React.Component {
  render() {
    return (
      <div>
        <BaseLayout {...this.props.auth}>
          <BasePage>
            <h1>This is the about page</h1>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default About;