import React from "react";
import { Container } from "reactstrap";
import Img from "../assets/mule2.png";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="aboutPage">
        <div>
          <div className="bottomBorder">
            <h1>About Mule</h1>
            <p className="aboutInfo">
              We are an on-demand item return service.
            </p>
          </div>
          <div className="bottomBorder">
            <h1>Vision</h1>
            <p className="aboutInfo">
              Our idea was formed from the inconvenience of having to take time
              out of the day to return an item before its value depreciates
              according to the timestamp on the receipt.
            </p>
          </div>
          <div className="bottomBorder">
            <h1>Mission</h1>
            <p className="aboutInfo">
              Provide a hassle-free item return service that saves you time and
              the headache from traffic.
            </p>
          </div>
          <p className="aboutInfo">
            Check out our <a href="/faq">FAQ</a> page for more info.
          </p>
        </div>
      </Container>
    );
  }
}

export default About;
