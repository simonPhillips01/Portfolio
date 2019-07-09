import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col, Button } from 'reactstrap';

class About extends React.Component {
  render() {
    return (
      <div>
        <BaseLayout title="Simon Phillips - About" {...this.props.auth} headerType="about">
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
                  <h1>Hi... 👋</h1>
                  <p>I'm a front end developer based in Bath. I have a passion for Javascript and love to create for the web and mobile devices.</p>
                  <p>I'm currently teaching myself fullstack Javascript, this application has been built with next.js</p>
                  <p>I'm currently available for freelance work so if you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.</p>
                  <br></br>
                  <Button color="warning"><a href={`mailto:${'simon.phillips01@gmail.com'}`}>Message me</a></Button>
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