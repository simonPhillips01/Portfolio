import React from 'react';
import Typed from 'react-typed';
import BaseLayout from '../components/layouts/BaseLayout';

//React strap
import { Button, Container, Row, Col } from 'reactstrap';

class Index extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    }

    this.roles = ["Welcome to my Portfolio 👋", "I'm an aspiring Javascript Developer 🤞", "Come to see what inspires me 💻 📱 🖥"];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 4000);
  }

  render() {
    const { isFlipping } = this.state;

    return (
      <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth} 
                  headerType="index"
                  title="Simon Phillips - Portfolio">
        <div className="main-section">
          <div className="background-image">
            <img src="/static/images/background-index.png" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                      <img alt="Guy programming welcome picture" className="image" src="/static/images/section-1.jpg"/>
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Get your projects done </h2>
                        <div className="hero-section-content-intro">
                          Professional and top quality service in web development.
                        </div>
                      </div>
                      <img alt="Guy programming welcome picture" className="image" src="/static/images/section-2.jpg"/>
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    Welcome to the portfolio website of Simon Phillips.
                    Get informed, collaborate and discover projects I was working on through the years!
                  </h1>
                </div>
                <div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={ this.roles }
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                </div>
                <div className="hero-welcome-bio">
                  <h2>
                    Let's take a look at my work.
                  </h2>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }
}

export default Index;
