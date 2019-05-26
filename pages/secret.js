import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';

class Secret extends React.Component {
  // renderSecretPage() {
  //   const { isAuthenticated } = this.props.auth;

  //   if(isAuthenticated) {
  //     return(
  //       <BaseLayout {...this.props.auth}>
  //         <BasePage>
  //           <h1>I am the secret page</h1>
  //         </BasePage>
  //       </BaseLayout>
  //     )
  //   } else {
  //     return(
  //       <BaseLayout {...this.props.auth}>
  //         <BasePage>
  //           <h1>You are not authorised. Please login to access this page.</h1>
  //         </BasePage>
  //       </BaseLayout>
  //     )
  //   }
  // }
  render() {
    return (
      <BaseLayout {...this.props.auth}>
          <BasePage>
            <h1>I am the secret page</h1>
          </BasePage>
        </BaseLayout>
    )
  }
}

export default Secret;