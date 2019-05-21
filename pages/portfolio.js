import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import {Link} from '../routes';

import Axios from 'axios';

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
        <BaseLayout />
        <h1>I am the Portfolio page</h1>
        <ul>
          { this.renderPosts(posts) }
        </ul>
      </div>
    )
  }
}

export default Portfolio;
