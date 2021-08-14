import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';
import navItems from '../../config/Sections.json';

// Functional solution:
function AppNav() {
  return (
    <Navbar color="light">
      {navItems.map((navItem, index) =>
        <Link to={`/sections/${navItem.value}`} key={index} > { navItem.label } |
        </Link>
      )}
    </Navbar>
  );
}


export default AppNav;

// Class solution:
// class AppNav extends Component {
//   render() {

//     return (
//       <Navbar color="light">
//         {navItems.map((navItem, index) =>
//           <Link to={`/sections/${navItem.value}`} key={index} > { navItem.label } |
//           </Link> 
//         )}
//       </Navbar>
//     )
//   }
// }
