import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Collapse from 'react-bootstrap/Collapse'
import {Formik} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string().min(5, "Username has to be at least 5 charecters").max(30, "Username exceeds character limit").required("Required"),
  email: Yup.string().email("Email not valid").required('Email is required'),
  password: Yup.string().min(6, 'Password must be 6 character or longer').required('Password is required'),
  carYear: Yup.number()
  
})

class Register extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }    

  render() {   
    const { open } = this.state;
    return (
      <div className="app flex-row align-items-center">
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            confirm: '',
            driversLicenseNumber: '',
            carBrand: '',
            carModel: '',
            carYear: 0
          }}

          validationSchema = {SignupSchema}

          onSubmit={(values) => {
          if(values.password === !values.confirm){
            alert("Password does not match")
          }
          axios.post('/signup', values)
          this.props.history.push('/userdashboard')
          }}
        >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="username" type="text" onChange={handleChange} value={values.username} placeholder="Username" autoComplete="username" />
                    </InputGroup>
                    {touched.username && errors.username && <p>{errors.username}</p>}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input name="email" type="text" onChange={handleChange} value={values.email} placeholder="Email" autoComplete="email" />
                    </InputGroup>                    
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="password" type="password" onChange={handleChange} value={values.password} placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="confirm" type="password" onChange={handleChange} value={values.confirm} placeholder="Confirm Password" autoComplete="new-password" />
                    </InputGroup>
                    {/* {touched.confirm-password && errors.confirm-password && <p>{errors.confirm-password}</p>} */}
                    {/* Button below controls collapse for driver registration  */}
                    <Button
                      onClick={() => this.setState({ open: !open })}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                      style={{ marginBottom: '1rem' }}
                    >
                      Driver
        </Button>
                    
                    <Collapse in={this.state.open}>
                      <div>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input name="driversLicenseNumber" type="text" onChange={handleChange} value={values.driversLicenseNumber} placeholder="Drivers License Number" autoComplete="" />
                        </InputGroup>

                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input name="carBrand" type="text" onChange={handleChange} value={values.carBrand} placeholder="Car Make" autoComplete="" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input name="carModel" type="text" onChange={handleChange} value={values.carModel} placeholder="Car Model" autoComplete="" />
                        </InputGroup>
                      </div>
                    </Collapse>

                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" type="submit" block disabled={isSubmitting}><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
        </Formik>
      </div>
    );
  };
};



export default Register
