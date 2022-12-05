import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const args = {
  color: "dark",
  // light:"false",
  dark: "false",
  full: "false",
  expand: "md",
  container: "flex"
}

const styles = {
  brand: {
    fontSize: '200%',
    padding: '20px'
  }
}

export default function Header({ currentPage, handlePageChange }) {

  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand href="" style={styles.brand}>Clayton Snell</NavbarBrand>
        <NavbarToggler />
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


