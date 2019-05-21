import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

class Blog extends React.Component {
  render() {
    return (
      <div>
        <BaseLayout>
          <BasePage>
            <h1>I am the blog page</h1>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default Blog;
