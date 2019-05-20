import React from 'react';
import Header from '../components/Header';

//React strap
import { Button, Container } from 'reactstrap';

class Index extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Button color="danger">Danger!</Button>
        </Container>
      </div>
    )
  }
}

export default Index;
