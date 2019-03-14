import React, { Component } from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'
import { Button } from 'reactstrap'
import Img from '../assets/mule2.png'


export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="/" >
                    <img
                        src={Img}
                        width="70vh"
                        height="70vh"
                        padding='0%'
                        max-width='100%'
                        className="img-responsive d-inline-block align-top"
                        alt="Mule"
                        overflow='hidden'
                    />
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About Us</Nav.Link>
                    <Nav.Link href="/FAQ">FAQ</Nav.Link>
                </Nav>
                <Form inline>
                    <Button href="https://www.facebook.com/mule.app.96" className="btn-facebook btn-brand icon"><i className="fa fa-facebook" target="blank" ></i></Button>
                    <Button href="https://twitter.com/mule_app" className="btn-twitter btn-brand icon"><i className="fa fa-twitter" target="blank"></i></Button>
                </Form>
            </Navbar>
        )
    }
}
