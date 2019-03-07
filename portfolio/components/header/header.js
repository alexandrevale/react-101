import React from "react";
// Importando os components
import { 
	Navbar, 
	NavItem, 
	Row
} from 'react-materialize';

const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">
      <NavItem href='/'>Home</NavItem>
      <NavItem href='/contact'>Contato</NavItem>
    </Navbar>
  </Row>
);

export default Header;