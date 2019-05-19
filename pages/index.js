import React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';

class Index extends SuperComponent {
  constructor() {
    super()
    this.state =  {
      title: 'I am Index Page'
    }
    console.log(constructor);
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render')
    return (
      <div>
        <Header />
        <h1>This is the index page</h1>
        <h2>{this.state.title}</h2>
          <a>
            <span onClick={ () => this.updateTitle() }>Change Title</span>
          </a>
      </div>
    )
  }
}

export default Index;
