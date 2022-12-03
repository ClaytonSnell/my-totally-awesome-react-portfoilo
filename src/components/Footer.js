
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

const args = {
  color:"light",
  light:"true",
  //dark:"false",
  full:"false",
  expand:"md",
  container:"fluid",
  fixed:"bottom"
}

const icon = 
  {
    name: "fab fa-github",
    link: "https://github.com/ClaytonSnell"
  }


function Footer(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar {...args}>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href= {icon.link}>
                github
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/clayton-snell-94474323b/">
                  Linkedin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://stackoverflow.com/users/20628009/mach-schnell">
                  Stack Overflow
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
}

export default Footer