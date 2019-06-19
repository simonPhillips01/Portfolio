import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated } = props;
  const headerType = props.headerType || 'default';
  return (
    <React.Fragment>
      <Head>
        <title>Simon Phillips</title>
        <script src="https://kit.fontawesome.com/76b070cc82.js"></script>
      </Head>
        <div className="layout-container">
          {/* {headerType === 'index' && <Header className="port-nav-index" isAuthenticated={isAuthenticated}/>}
          {headerType === 'default' && <Header className="port-nav-default" isAuthenticated={isAuthenticated}/>} */}
          <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated}/>
          <main className={`cover ${className}`}>
            <div className="wrapper">
              {children}
            </div>
          </main>
        </div>
    </React.Fragment>
  )
}

export default BaseLayout;
