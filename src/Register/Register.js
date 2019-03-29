import React, { Component } from 'react';
// import {Redirect} from 'react-router'
import { Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import Collapse from 'react-bootstrap/Collapse'
import {Formik} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  fname: Yup.string().required('First name is required'),
  lname: Yup.string().required('Last name is required'),
  email: Yup.string().email("Email not valid").required('Email is required'),
  password: Yup.string().min(6, 'Password must be 6 character or longer').required('Password is required'),
  carYear: Yup.number(),
  address: Yup.string().required("Address is required")
  
})

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
        <Formik
          initialValues={{
            fname: '',
            lname: '',
            email: '',
            address: '',
            password: '',
            confirm: '',
            driversLicenseNumber: '',
            dob: '',
            carBrand: '',
            carModel: '',
            carYear: undefined
          }}

          validationSchema = {SignupSchema}

          onSubmit={(values) => {
            console.log(values)
          if(values.password === !values.confirm){
            alert("Password does not match")
          }
          
          //sends data to server
          axios.post('/signup', values)

          //redirects you to driver dashboard or client dashboard based on register
          if(!this.state.open){
            this.props.history.push('/userDashboard')
          }
          else if(this.state.open){
            this.props.history.push('/Dashboard')
          }

          
          }}
        >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
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
                      <Input name="fname" type="text" onChange={handleChange} value={values.fname} placeholder="First Name" autoComplete="" />
                    </InputGroup>
                    {touched.fname && errors.fname && <p>{errors.fname}</p>}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input name="lname" type="text" onChange={handleChange} value={values.lname} placeholder="Last Name" autoComplete="" />
                    </InputGroup>
                    {touched.lname && errors.lname && <p>{errors.lname}</p>}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input name="email" type="text" onChange={handleChange} value={values.email} placeholder="Email" autoComplete="email" />
                    </InputGroup>                    
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="icon-user"></i></InputGroupText>
                      </InputGroupAddon>
                      <Input name="address" type="text" onChange={handleChange} value={values.address} placeholder="Street address" autoComplete="address" />
                    </InputGroup>                    
                    {touched.address && errors.address && <p>{errors.address}</p>}
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
                          <Input name="driversLicenseNumber" type="text" onChange={handleChange} value={values.driversLicenseNumber} placeholder="Drivers License Number" autoComplete="" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input name="dob" type="text" onChange={handleChange} value={values.dob} placeholder="Date of Birth MM/DD/YYYY" autoComplete="" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <span role="img" aria-label="car emoji">
                                🚗
                            </span></InputGroupText>
                          </InputGroupAddon>
                          <Input name="carBrand" type="text" onChange={handleChange} value={values.carBrand} placeholder="Car Make" autoComplete="" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <span role="img" aria-label="car emoji">
                                🚗
                            </span></InputGroupText>
                          </InputGroupAddon>
                          <Input name="carModel" type="text" onChange={handleChange} value={values.carModel} placeholder="Car Model" autoComplete="" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <span role="img" aria-label="car emoji">
                                🚗
                            </span>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input name="carYear" type='number' onChange={handleChange} value={values.carYear} placeholder="Vehicle Year" autoComplete="" />
                        </InputGroup>
                      </div>
                    </Collapse>
                    <Button color="success" block>Create Account</Button>
                  </Form>
                </CardBody>
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
