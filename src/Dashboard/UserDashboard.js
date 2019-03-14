import React, { Component } from 'react';
import { Container , Row , Image , Col, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import '../Styles/styles.css';
import Map from '../components/Map';
import OrderForm from '../components/OrderForm';
// import ReviewForm from '../components/ReviewForm';

class UserDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    }

  }
  render() {
    return (
        <Container className="dashboardContainer">
        <Row className="rowContainer">
         <Col><OrderForm  /></Col>
         <Col><Map  /></Col>
         {/* <Col><ReviewForm  /></Col> */}
        </Row>
        </Container>
    );
  }
}

  export default UserDashboard;