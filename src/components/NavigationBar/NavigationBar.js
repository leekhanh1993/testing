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
              <img src={logo} alt="logobrand" height="40" />
            </NavbarBrand>
            <NavbarToggler onClick={this.onClick} />
            <Collapse isOpen={this.state.collapse} navbar>
              <NavbarNav left>
                <NavItem>
                  <NavLink to="#"><a style={{fontWeight: "bold"}}>Photos</a></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#"><a style={{fontWeight: "bold"}}>Illustrations</a></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#"><a style={{fontWeight: "bold"}}>Video</a></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#"><a style={{fontWeight: "bold"}}>Audio</a></NavLink>
                </NavItem>
              </NavbarNav>
              <NavbarNav right>
                <NavItem>
                  <NavLink to="#"><Fa icon="facebook" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#"><Fa icon="twitter" /></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="#"><Fa icon="instagram" /></NavLink>
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
