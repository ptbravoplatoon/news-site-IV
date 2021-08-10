import React, { Component, useState } from 'react';
import sections from '../../config/Sections.json'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {Link} from 'react-router-dom'
import { InputGroup, Input } from 'reactstrap';

class AppNav extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  setIsOpen(openState){
    let newState = this.state;
    newState.isOpen = openState;
    this.setState(newState);
  }
  render() {
    const isOpen = this.state.isOpen;
    const toggle = () => this.setIsOpen(!isOpen);
    let i = 0;

    const items = sections.map((x) => {
      let item = (<NavItem key={i}>
        <Link className="navItem" to={`/sections/${x.value}`}>{x.label}</Link>
        </NavItem>);
      i++;
      return item;
      })

    return (
      <div>
        <Navbar color="Light" light expand="md">
          <NavbarBrand href="/">News</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {items}
            </Nav>
          </Collapse>
        </Navbar>
        <InputGroup>
          <Input onKeyPress={(e) => {if(e.key == "Enter"){this.props.handleSearch(e.target.value)}}}
           type="text" placeholder="Search"
           onChange={(e) => {if(e.target.value.length == 0){this.props.handleSearch(e.target.value)}}}
           />
        </InputGroup>
      </div>
    )
  }
}

export default AppNav;
