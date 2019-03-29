import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Styles/styles.css";
import Img from "./assets/mule-logo.png";
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
          <img
            src={Img}
            width="50%"
            height="50%"
            padding="0%"
            max-width="100%"
            className="img-responsive d-inline-block align-top"
            alt="Mule"
            overflow="hidden"
          />
          <p>
            An on-demand, hassle-free, item return service that saves you the
            time and headache from traffic.
          </p>
        </div>
        <br />
        <h5 className="loginRegister">Login or Register to submit a request</h5>
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
