import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Callback extends React.Component {
  render() {
    return (
      <div>
        <BaseLayout>
          <BasePage>
            <h1>I am the callback page</h1>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default Callback;
