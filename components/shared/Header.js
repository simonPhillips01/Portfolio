import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/" title="Home Page">
          <a>Home</a>
        </Link>
        <Link href="/about" title="About Page">
          <a>About</a>
        </Link>
        <Link href="/portfolio" title="Portfolio Page">
          <a>Portfolio</a>
        </Link>
        <Link href="/blog" title="Blog Page">
          <a>Blog</a>
        </Link>
        <Link href="/cv" title="CV Page">
          <a>CV</a>
        </Link>
        <style jsx>
        {`
          a {
            font-size: 20px;
          }
        `}
        </style>
      </React.Fragment>
    )
  }
}

export default Header;
