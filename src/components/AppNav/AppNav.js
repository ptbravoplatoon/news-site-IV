import React, { Component, useState, useEffect } from 'react';
import { Navbar, NavbarText } from 'reactstrap';
import Sections from '../../config/Sections.json';
import {Link} from 'react-router-dom'


class AppNav extends Component{
  constructor(props) {
    super(props);
    
    this.state = {
      handleNavClick: this.props.handleNavClick
    }
  }
  render () {
    const {handleNavClick } = this.state
    
    return (
      <Navbar color="light">
        {Sections.map((navItem, index) =>
          <Link to={`/section/${navItem.value}`} key = {index} >
            { navItem.label } |
          </Link>
        )}
      </Navbar>
    );
  }
} 

export default AppNav;


// Functional solution:
// function AppNav({ navItems, handleNavClick }) {
//   return (
//     <Navbar color="light">
//       {navItems.map((navItem) =>
//         <a href="#" onClick={() => handleNavClick( navItem.value )} >
//           { navItem.label } |
//         </a>
//       )}
//     </Navbar>
//   );
// }
