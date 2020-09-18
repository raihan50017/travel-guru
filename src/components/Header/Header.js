import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../asset/logo/Logo.png';

const logoStyle = {
    height: '60px',
    color:'white'
}

const Header = () => {
    return (

        <Navbar bg="primary" fixed="top" variant="light">
            <Container>
                <Navbar.Brand href="#home"><img style={logoStyle} src={logo} alt="Logo"></img></Navbar.Brand>
                <Form className="m-auto" inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
                <Nav>
                    <Nav.Link href="#home">News</Nav.Link>
                    <Nav.Link href="#features">Destination</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    <Nav.Link href="#pricing">Contact</Nav.Link>
                  <Link to="/login"><Nav.Link className="bg-secondary text-white rounded-sm" href="#pricing">Login</Nav.Link></Link> 
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;