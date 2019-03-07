import React, { Component } from 'react';
import { Container , Row , Image , Col, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import './Styles/styles.css'
import Map from '../src/components/Map';
import OrderForm from '../src/components/OrderForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    }

  }
  render() {
    return (
      <div className="app">
        <Form.Row>
          <OrderForm as={Col} />
          <Map as={Col} />
        </Form.Row>
      </div>

    );
  }

  render() {
    return (
      <div className = "AppHeader">
      <h1>The return app </h1>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia, dolor vel molestie porttitor, lectus quam semper quam, in hendrerit sapien quam vel magna. In laoreet nisl eros, facilisis fringilla ante iaculis iaculis.</h5>
      <Button variant="primary" size="lg" href="/login" block>
    Login
  </Button>
  <Button variant="info" size="lg" href="/register" block>
  Register
  </Button>
      </div>
    );
  }
}
    




export default App;