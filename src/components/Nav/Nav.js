import React, { Component } from 'react';
// import logo from '../../Assets/Ethan.jpg'
import { Collapse,Button, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }
  toggleNavbar = ()=> {
  this.setState({
    collapsed: !this.state.collapsed
  });
}

  render(){
    return(
      <nav >
        <Navbar color="faded" light>
          <NavbarToggler  onClick={this.toggleNavbar} className="mr-2" />
          <NavbarBrand href="/" className="mr-auto">Web Chat App</NavbarBrand>
        <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink>Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink >Settings</NavLink>
              </NavItem>
              <NavItem>
                <Button outline size="sm" olor="secondary" onClick={this.props.logout}>logout</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <ul className='listContainer'>

        <li className='currentUser'>{`Current user: ${this.props.currentUserName}`}</li>
        <li className='count'>{`Messages total: ${this.props.messageCount}`}</li>
      </ul>
      </nav>
    )
  }
}

export default Header;
