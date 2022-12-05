import Contact from '../pages/Contact';
import { Link } from "react-router-dom"; 


import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const args = {
  color: "dark",
  // light:"false",
  dark: "false",
  full: "false",
  expand: "md",
  container: "flex"
}

export default function Header({ currentPage, handlePageChange }) {
  const [showNavRight, setShowNavRight] = useState(false);

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="">Clayton Snell</NavbarBrand>
        <NavbarToggler  />
        <Collapse navbar>
          <Nav pills >
            <NavItem className='navCust' >
              <NavLink
           aria-current='page' href='#about' onClick={() => handlePageChange('About')} className={currentPage === 'About'}>
           About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio'}>
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href='#contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact'}>
                Contact
                </NavLink>     
            </NavItem>
            <NavItem>
            <NavLink href='#resume' onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume'}>
                Resume
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}


