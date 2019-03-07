import React, { Component } from 'react';
// import styled from 'styled-components';
import { Col, Form } from 'react-bootstrap';
import Map from '../src/components/Map';
import OrderForm from '../src/components/OrderForm';

// const AppWrapper = styled.div `
//   display: flex;
//   justify-content: center;
//   margin-top: 100px;
// `;

// const Container = styled.div `
// `

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
}

export default App;