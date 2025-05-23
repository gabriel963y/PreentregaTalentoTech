import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavItem = ({ to, children }) => {
  return (
    <Nav.Link
      as={Link}
      to={to}
    >
      <span>{children}</span>
    </Nav.Link>
  );
};

export default NavItem;
