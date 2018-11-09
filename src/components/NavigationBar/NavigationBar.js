import React, { Component } from 'react';
import './NavigationBar.css'
import logo from '../../images/logo-white.png'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    const bgNav = { backgroundColor: 'black' }
    return (
      <div>
        <Router>
          <Navbar style={bgNav} dark expand="md" scrolling fixed="top">
            <NavbarBrand href="/">
              <img src={logo} alt="logobrand" height="50" />
            </NavbarBrand>
            <NavbarToggler onClick={this.onClick} />
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem>
                  <NavLink to="#"><a style={{fontWeight: "bold", fontSize: 18}}>Photos</a></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#"><a style={{fontWeight: "bold", fontSize: 18}}>Illustrations</a></NavLink>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                <NavItem>
                  <NavLink to="#"><a style={{fontWeight: "bold", fontSize: 18}}><Fa icon="user-plus" size="lg" className="mr-1"/>Register</a></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#"><a style={{fontWeight: "bold", fontSize: 18}}><Fa icon="user-circle-o" size="lg" className="mr-1"/>Login</a></NavLink>
                </NavItem>
              </NavbarNav>
            </Collapse>
          </Navbar>
        </Router>
      </div>
    );
  }
}

export default NavigationBar;
