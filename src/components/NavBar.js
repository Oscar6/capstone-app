import React, { Component } from 'react'
import { Navbar, Form, Button, Nav } from 'react-bootstrap'
export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top" >
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/dashboard">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                {/* <Form inline>
                    <Button className="login" href="/login"  variant="outline-info"> Login </Button>
                    <Button variant="outline-info" href="/register" >Register</Button>
                </Form> */}
            </Navbar>
        )
    }
}
