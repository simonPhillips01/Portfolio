import React from 'react';
import Link from 'next/link';
import ActiveLink from '../ActiveLink';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu} from 'reactstrap';

import Auth0 from '../../services/auth0';

  const BsNavLink = (props) => {
    const { route, title } = props;

    return (
      <ActiveLink activeClassName="active" route={route}>
        <a className="nav-link port-navbar-link">{ title }</a>
      </ActiveLink>
    )
  } 

  const Login = () => {
    return (
      <span onClick={Auth0.login} className="nav-link port-navbar-link clickable">Login</span>
    )
  }

  const Logout = () => {
    return (
      <span onClick={Auth0.logout} className="nav-link port-navbar-link clickable">LogOut</span>
    )
  }

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      dropdownOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  renderBlogMenu() {
    const { isSiteOwner } = this.props;

    if(isSiteOwner) {
      return(
        <Dropdown className="port-navbar-link" nav isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
          <DropdownToggle nav caret>
            Blog
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <BsNavLink route="/blogs" title="Blogs" />
          </DropdownItem>
          <DropdownItem>
            <BsNavLink route="/blogs/new" title="Create a blog" />
          </DropdownItem>
          <DropdownItem>
            <BsNavLink route="/blogs/dashboard" title="Blogs Dashboard" />
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      )
    }

    return (
      <NavItem className="port-navbar-item">
        <BsNavLink route="/blog" title="Blog" />
      </NavItem>
    )
  }

  render() {

    const { isAuthenticated, user, className } = this.props;

    return (
      <div>
        <Navbar className={`port-navbar port-nav-base absolute ${className}`} color="transparent" dark expand="md">
          <NavbarBrand className="port-navbar-brand" href="/">Simon Phillips</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <BsNavLink route="/portfolios" title="Portfolio" />
              </NavItem>
                {this.renderBlogMenu()}
              <NavItem className="port-navbar-item">
                <BsNavLink route="/cv" title="CV" />
              </NavItem>
              { !isAuthenticated &&
                <NavItem className="port-navbar-item">
                  <Login/>
                </NavItem>
              }
              { isAuthenticated &&
                <NavItem className="port-navbar-item">
                  <Logout/>
                </NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
