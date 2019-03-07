import React, { Component } from 'react';
import { Container , Row , Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap'
import './Styles/styles.css'


class App extends Component {
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