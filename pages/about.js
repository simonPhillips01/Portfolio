import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';

class About extends React.Component {
  render() {
    return (
      <div>
        <BaseLayout {...this.props.auth} headerType="about">
          {/* <div className="background-image">
            <img src="/static/images/background-about.jpg" />
          </div> */}
          <BasePage className="about-page">
            <Row className="mt-5">
              <Col md="6">
                <div className="left-side">
                  <h1 className="title fadein">Hello, Welcome</h1>
                  <h4 className="subtitle fadein">To My About Page</h4>
                  <p className="subsubTitle fadein">Feel free to read the short description about me.</p>
                </div>
              </Col>
              <Col md="6">
                <div className="fadein">
                  <p>My name is Simon Phillips and I am an aspiring front end developer. I've been teaching myself through online tutorials and books how to code in Javascript</p>
                  <p>I recently took part in a bootcamp organised with Deloitte where me and my team built a full stack Java application which we presented to the board. You can find the AWS hosted application here.</p>
                  <p>I enjoy everything to do with tech and am particulary interested how technology can change industries. I'm most interested in building fullstack applications with an award winning front end</p>
                </div>
              </Col>
            </Row>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default About;