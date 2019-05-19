import React from 'react';
import Header from '../components/Header';
import { withRouter } from 'next/router';

import Axios from 'axios';

class PortfolioItem extends React.Component {
  static async getInitialProps({query}) {
    const portfolioId = query.id;
    let portfolio = {};

    try {
      const response = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
      portfolio = response.data
    } 
    catch(err) {
      console.error(err);
    }
    return {portfolio};
  }

  render() {
    const { portfolio } = this.props;
    
    return (
      <div>
        <Header/>
        <h1>{ portfolio.title}</h1>
        <p>{ portfolio.body }</p>
        <p>ID: { portfolio.id }</p>
      </div>
    )
  }
}

export default withRouter(PortfolioItem);
