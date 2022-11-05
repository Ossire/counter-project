import React from 'react';
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navplace = () => {
  
    return (
        <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav>
                    <NavLink  eventKey="1" as={Link} to="/">Home</NavLink>
                    <NavLink  eventKey="2" as={Link} to="/customhook">CustomHook</NavLink>
                    <NavLink  eventKey="3" as={Link} to="/usereduce">UseReducer</NavLink>
                    <NavLink  eventKey="4" as={Link} to="/testingerror">Testing-error</NavLink>
                </Nav>
            </Navbar.Collapse>     
        </Navbar>
    );
}
 
export default Navplace;