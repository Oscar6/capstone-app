import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Collapse from 'react-bootstrap/Collapse'

class Register extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
      isLoggedin: false
    };
  }
  render() {
    const { open } = this.state;
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" autoComplete="email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup>
                    {/* Button below controls collapse for driver registration  */}
                    <Button
                      onClick={() => this.setState({ open: !open })}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                      size="lg"
                      color="primary"
                      style={{ marginBottom: '1rem' }}
                      block
                    >
                      Register as a driver
        </Button>

                    <Collapse in={this.state.open}>
                      <div>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Driver License # " autoComplete="" />
                        </InputGroup>

                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Date of Birth MM/DD/YYYY" autoComplete="" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>                            
                            <span role="img" aria-label="car emoji">
                              🚗
                            </span></InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Vehicle Make" autoComplete="" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>                            
                            <span role="img" aria-label="car emoji">
                              🚗
                            </span></InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Vehicle Model" autoComplete="" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <span role="img" aria-label="car emoji">
                                🚗
                            </span>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="number" placeholder="Vehicle Year" autoComplete="" />
                        </InputGroup>
                      </div>
                    </Collapse>

                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    {/* <Col xs="12" sm="6">
                      
                          <Button className="btn-facebook mb-1 btn-lrg" block><span>Facebook</span></Button>
                        <Facebook />
                        
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-google-plus mb-1" block><span>Google</span></Button>
                    </Col> */}
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
};

export default Register;
