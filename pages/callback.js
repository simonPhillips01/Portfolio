import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';

import auth0Client from '../services/auth0';
import { withRouter } from 'next/router';

class Callback extends React.Component {

  async componentDidMount() {
      await auth0Client.handleAuthentication()
      this.props.router.push('/');
    //   .then(() => {
    //     //redirect
    //   }).catch(err => console.log(err));
  }
    
  render() {
    return (
      <div>
        <BaseLayout>
          <BasePage>
            <h1>I am the callback page</h1>
          </BasePage>
        </BaseLayout>
      </div>
    )
  }
}

export default withRouter(Callback);
