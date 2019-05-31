import React from 'react';
import Header from '../shared/Header';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated } = props;
  const headerType = props.headerType || 'default';
  return (
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
  )
}

export default BaseLayout;
