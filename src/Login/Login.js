import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from "reactstrap";
import GoogleLogin from "react-google-login";
import Facebook from '../components/Facebook'
import { Formik } from "formik";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }

  render() {

    const responseGoogle = response => {
      console.log(response);
    };

    return (
      <div className="app flex-row align-items-center">
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(values)=>{
          console.log(values)
          axios.post('/signin', values)
          .then(res=>{
              if(res.data.token){
                this.props.history.push('/userdashboard')
              }
          })
          .catch((err)=>{
            if(err){
              this.setState({
                error: "Invalid email or password"
              })
            }
          })
        }}
        >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit
        })=>(
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="email"
                          type="text"
                          onChange={handleChange}
                          value={values.email}
                          placeholder="email"
                          autoComplete="email"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name="password"
                          type="password"
                          onChange={handleChange}
                          value={values.password}
                          placeholder="Password"
                          autoComplete="current-password"
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">
                            Login
                          </Button>
                        </Col>
                        <Col xs="12" className="orText">
                        {this.state.error}
                        <p>OR</p>
                        </Col>
                        <Col xs="12" className="socialLogin">
                        <Facebook />
                        <GoogleLogin
                          className="googleButton"
                          clientId="613699581514-9qdtoqckobpurr3ksfe35k6v09n3eqvg.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                          buttonText="Google"
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                        />
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                        
                    </Form>
                  </CardBody>
                </Card>
                <Card
                  className="text-white bg-primary py-5 d-md-down-none"
                  style={{ width: "44%" }}
                >
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign Up</h2>
                      <p>
                        Welcome to Mule we are an on-demand item return service.
                        Create an account for all your return needs.
                        
                      </p>
                      <Link to="/register">
                        <Button
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        )}
        </Formik>
      </div>
    );
  }
}

export default Login;
