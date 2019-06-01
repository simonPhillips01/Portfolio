import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import {Link} from '../routes';
import { Col, Row, Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

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
          <Col md="4">
            <React.Fragment key={index}>
              <span>
                <Card className="portfolio-card">
                  <CardHeader className="portfolio-card-header">Some Position {index}</CardHeader>
                  <CardBody>
                    <p className="portfolio-card-city"> Some Location {index} </p>
                    <CardTitle className="portfolio-card-title">Some Company {index}</CardTitle>
                    <CardText className="portfolio-card-text">Some Description {index}</CardText>
                    <div className="readMore"> </div>
                  </CardBody>
                </Card>
              </span>
            </React.Fragment>
          </Col>
        )
      })
    }
  
  render() {
    const { posts } = this.props;

    return (
      <div>
        <BaseLayout {...this.props.auth} headerType="portfolio">
          <BasePage className="portfolio-page" title="Portfolios">
            <Row>  
              { this.renderPosts(posts) }
            </Row>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default Portfolio;
