import React from 'react';
import Header from '../components/Header';

class SuperComponent extends React.Component {
  constructor() {
    super();

    this.someVariable = 'Just some variable';
  }

  alertName(title) {
    alert(title);
  }

  render() {
    return (
      <div>
        <Header/>
        <h1>I am the blog page</h1>
      </div>
    )
  }
}

export default SuperComponent;
