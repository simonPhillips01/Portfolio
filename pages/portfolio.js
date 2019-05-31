import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import {Link} from '../routes';

import Axios from 'axios';
import BasePage from '../components/BasePage';

class Portfolio extends React.Component {
  static async getInitialProps() {
    let posts = [];

    try {
      const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
      posts = response.data;
    }
    catch(err) {
      console.error(err);
    }

    return {posts: posts.splice(0, 10)};
  }

    renderPosts(posts) {
      return posts.map((post, index) => {
        return (
          <li key={index}>
            <Link route={`/portfolioItem/${post.id}`}>
              <button>{ post.title }</button>
            </Link>
          </li>
        )
      })
    }
  
  render() {
    const { posts } = this.props;

    return (
      <div>
        <BaseLayout {...this.props.auth} headerType="portfolio">
          <BasePage title="Portfolios">
            <ul>  
              { this.renderPosts(posts) }
            </ul>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default Portfolio;
