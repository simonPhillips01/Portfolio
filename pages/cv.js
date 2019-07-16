import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import { Row, Col } from 'reactstrap';

class CV extends React.Component {
  render() {
    return (
      <div>
        <BaseLayout {...this.props.auth} headerType="cv">
          <BasePage title="Read my CV" className="cv-page">
            <Row>
              <Col md={{size: 8, offset: 2}}>
                <div className="cv-title">
                  <a download="Simon Phillips - Javascript developer.pdf" className="btn btn-success" href="/static/Simon_Phillips_JavaScript_Developer.pdf">
                    Download
                  </a>
                </div>
                <iframe style={{width: '100%', height: '800px'}} src="/static/Simon_Phillips_JavaScript_Developer.pdf"></iframe>
              </Col>
            </Row>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default CV;
