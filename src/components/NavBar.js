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
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/faq">FAQ</Nav.Link>
                </Nav>
                <Form inline>
                    <Button href="https://www.facebook.com/mule.app.96" className="btn-facebook btn-brand icon"><i className="fa fa-facebook" target="blank" ></i></Button>
                    <Button href="https://twitter.com/mule_app" className="btn-twitter btn-brand icon"><i className="fa fa-twitter" target="blank"></i></Button>
                </Form>  
            </Navbar>
        )
    }
}
