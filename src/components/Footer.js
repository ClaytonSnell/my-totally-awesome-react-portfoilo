import React, { useState } from 'react';
import { BsGithub,
  BsLinkedin,
  BsStackOverflow } from "react-icons/bs";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const args = {
  color:"light",
  light:"true",
  //dark:"false",
  full:"false",
  expand:"md",
  container:"flex",
  fixed:"bottom"
}

const styles = {
  icons: {
  justifyContent: 'center',
  fontSize: '200%'
  }
}


function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
        <Navbar style={styles.icons} {...args}>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href= "https://github.com/ClaytonSnell">
                <BsGithub />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/clayton-snell-94474323b/">
                <BsLinkedin />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://stackoverflow.com/users/20628009/mach-schnell">
                  <BsStackOverflow />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
}

export default Footer