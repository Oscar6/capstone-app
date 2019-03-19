import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Styles/styles.css";

// test comment

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  render() {
    return (
      <div className="AppHeader">
        <div className="descriptionHome">
          <p>Mule</p>
          <p>An on-demand, hassle-free, item return service that saves you the time and
          headache from traffic.</p>
        </div>
        <br />
        <h5 className="loginRegister">Login or Register to sumbit a request</h5>
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
