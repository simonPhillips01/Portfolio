import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import { Container, Row, Col } from 'reactstrap';
import { Link } from '../routes';
import { getBlogs } from '../actions';
import { shortenText } from '../helpers/util';
import moment from 'moment';

class Blog extends React.Component {
  static async getInitialProps({req}) {
    let blogs = [];

    try {
      blogs = await getBlogs(req);
    } catch(err) {
      console.error(err);
    }

    return {blogs};
  }

  renderBlogs = (blogs) => (
    blogs.map((blog, index) => (
      <div key={index} className="post-preview">
        <Link route={`/blogs/${blog.slug}`}>
          <a>
            <h2 className="post-title">
              {blog.title}
            </h2>
            <h3 className="post-subtitle">
              {shortenText(blog.subTitle)}
            </h3>
          </a>
        </Link>
        <p className="post-meta">Posted by
          <a href="#"> {blog.author} </a>
          {moment(blog.createdAt).format('LL')}</p>
      </div>
    )
  )
)

  render() {
    const {blogs} = this.props;

    return (
      <div>
        <BaseLayout title="Simon Phillips - Blogs to read" {...this.props.auth} headerType={'landing'} className="blog-listing-page">
          <div className="masthead" style={{"backgroundImage": "url('/static/images/home-bg.jpg')"}}>
            <div className="overlay"></div>
            <Container>
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <div className="site-heading">
                    <h1>Javascript Blog</h1>
                    <span className="subheading">Programming, travelling...</span>
                  </div>
                </div>
              </div>
            </Container>
          </div>
          <BasePage className="blog-body">
            <Row>
              <Col md="10" lg="8" className="mx-auto">
                {
                  this.renderBlogs(blogs)
                }
                <div className="clearfix">
                  <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
                </div>
              </Col>
            </Row>

            <footer>
              <Container>
                <Row>
                  <div className="col-lg-8 col-md-10 mx-auto">
                    <ul className="list-inline text-center">
                      <li className="list-inline-item">
                        <a target="_blank" href="https://www.facebook.com/simon.phillips.338">
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a target="_blank" href="https://github.com/simonPhillips01">
                          <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                    <p className="copyright text-muted">Copyright &copy; Simon Phillips 2019</p>
                  </div>
                </Row>
              </Container>
            </footer>
          </BasePage>
          <style jsx>
          {`
            @import url("https://use.fontawesome.com/releases/v5.5.0/css/all.css");
          `}
          </style>
        </BaseLayout>
      </div>
    )
  }
}

export default Blog;
<script src="https://kit.fontawesome.com/76b070cc82.js"></script>