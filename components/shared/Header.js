import React from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

  const BsNavLink = (props) => {
    const { route, title } = props;

    return (
      <Link href={route}>
        <a className="nav-link">{ title }</a>
      </Link>
    )
  } 

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Simon Phillips</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <BsNavLink route="/" title="Home" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/about" title="About" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/portfolio" title="Portfolio" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/blog" title="Blog" />
              </NavItem>
              <NavItem>
                <BsNavLink route="/cv" title="CV" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
