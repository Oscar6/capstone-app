import React from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import Search from './Search';

class OrderForm extends React.Component {
    constructor(props) {
        super(props);

    }
    // cd
    render() {
        return (
            <Container className="orderForm">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} className="formGridStore">
                            <Form.Label>Store</Form.Label>
                            <Search />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group className="formGridStore">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="formGridStore">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="formGridStore">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridStore">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} className="formGridStore">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select">
                                <option>Choose...</option>
                                <option>Texas</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} className="formGridStore">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit" className="orderButton">
                        Submit
                </Button>
                </Form>
            </Container>
        );
    }
}

export default OrderForm
