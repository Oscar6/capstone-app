import React, { Component } from 'react'
import { Navbar , Nav , Form } from 'react-bootstrap'
import { Button } from 'reactstrap'



export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top" >
                <Navbar.Brand href="/">Mule</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/dashboard">Home</Nav.Link>
                    <Nav.Link href="#features">About Us</Nav.Link>
                    <Nav.Link href="#pricing">FAQ</Nav.Link>
                </Nav>
                <Form inline>
                    <Button className="btn-facebook btn-brand icon"><i className="fa fa-facebook" ></i></Button>
                    <Button className="btn-twitter btn-brand icon"><i className="fa fa-twitter"></i></Button>
                </Form>  
            </Navbar>
        )
    }
}
