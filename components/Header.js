import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/" title="Home Page">
          <button>Home Page</button>
        </Link>
        <Link href="/about" title="About Page">
          <button>About Page</button>
        </Link>
        <Link href="/portfolio" title="Portfolio Page">
          <button>Portfolio Page</button>
        </Link>
        <Link href="/blog" title="Blog Page">
          <button>Blog Page</button>
        </Link>
        <Link href="/cv" title="CV Page">
          <button>CV Page</button>
        </Link>
        <style jsx>
        {`

        `}
        </style>
      </React.Fragment>
    )
  }
}

export default Header;
