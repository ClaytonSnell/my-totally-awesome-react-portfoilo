import Contact from '../pages/Contact';



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

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="">Clayton Snell</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav pills >
            <NavItem >
              <NavLink
                active
                href="/About"
              >
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Portfolio">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="#">
                Resume
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}


export default Header;