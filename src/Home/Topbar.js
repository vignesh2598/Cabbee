import React,{Component} from 'react';
import './Topbar.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Navbar,Nav,NavDropdown,Container,Row,Col,Button,Figure} from 'react-bootstrap';
function Topbar(){
    
        return(
        
            <Navbar collapseOnSelect bg="white" expand="lg" variant="light" >
                <Navbar.Brand href="#" className="text-primary">
                    &emsp;&emsp;Cabbee
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/admin" className="text-primary">&emsp;&emsp;Admin </Nav.Link>
                            <Nav.Link href="/driver"className="text-primary">&emsp;&emsp;Driver</Nav.Link>
                        </Nav>
                        <Nav >    
                            <NavDropdown 
                            title="Sign up" id="collasible-nav-dropdown" >
                                <NavDropdown.Item href="#"className="text-success">As a Driver</NavDropdown.Item>
                                <NavDropdown.Item href="#" className="text-primary">As a Passeneger</NavDropdown.Item>
                                <NavDropdown.Item href="#" className="text-primary">As a Admin</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" className="text-primary">&emsp;&emsp;Log in</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>  
            </Navbar>
            
        
        );
}


export default Topbar;