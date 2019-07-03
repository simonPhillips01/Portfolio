import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, title, cannonical } = props;
  const headerType = props.headerType || 'default';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My name is Simon Phillips and I am an experienced Javascript Developer. I invite you to take a look at my blog, where I have put a lot of effort to explain web and software engineering concepts in a detailed and understandable way." />
        <meta name="keywords" content="simon portfolio, simon phillips dev, simon phillips developer, javascript developer, javascript freelancing, javascript programming"/>
        <meta property="og:title" content="Simon Phillips - Javascript Developer, Blogger" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Simon Phillips and I am an experienced Javascript Developer."/>
        {cannonical && <link rel="cannonical" href={`http://localhost:3000${cannonical}`}/>}
        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
        <script src="https://kit.fontawesome.com/76b070cc82.js"></script>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>
        <div className="layout-container">
          {/* {headerType === 'index' && <Header className="port-nav-index" isAuthenticated={isAuthenticated}/>}
          {headerType === 'default' && <Header className="port-nav-default" isAuthenticated={isAuthenticated}/>} */}
          <Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user} isSiteOwner={isSiteOwner}/>
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
