import React from 'react'
import App, { Container } from 'next/app'
import { ToastContainer, toast } from 'react-toastify';

import auth0 from '../services/auth0';

//Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';
import 'react-toastify/dist/ReactToastify.min.css';

const namespace = 'http://localhost:3000'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    const user = process.browser ? await auth0.clientAuth() : await auth0.serverAuth(ctx.req);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    const isSiteOwner = user && user[namespace + '/role'] === 'siteOwner';
    const auth = { user, isAuthenticated: !!user, isSiteOwner };

    return { pageProps, auth }
  }

  render() {
    const { Component, pageProps, auth } = this.props

    return (
      <Container>
        <ToastContainer />
        <Component {...pageProps} auth={auth}/>
      </Container>
    )
  }
}

export default MyApp