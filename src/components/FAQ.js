import React from "react";
import { Container } from "reactstrap";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container className="faqPage">
        <div>
            <h1>Questions regarding our service:</h1>
          <div className="bottomBorder">
            <h3>What locations do you return items to?</h3>
            <p className="faqInfo">
              We are currently limited to locations within the 610 Loop listed
              in the order form.
            </p>
          </div>
          <div className="bottomBorder">
            <h3>
              Can you deliver to multiple locations within the same order?
            </h3>
            <p className="faqInfo">
              If you require returning items to multiple locations, an added
              base fee will be applied to each new location.
            </p>
          </div>
          <div className="bottomBorder">
            <h3>How many items can be returned to the same location?</h3>
            <p className="faqInfo">
              Multiple items can be returned to the same location. Base fee
              remains the same, but a small fee is applied per extra item.
            </p>
          </div>
          <div className="bottomBorder">
            <h3>
              How will I know the courier is on their way to pick up or have
              returned my item?
            </h3>
            <p className="faqInfo">
              You will receive a notification once your item has been selected
              for returning. Once the courier has successfully returned the
              item, a second notification will be sent informing you of the
              return and expected deposit.
            </p>
          </div>
          <p className="faqInfo">
            <b>Ready to place a request? <a href="/register">Sign up</a> or <a href="/login">Login</a></b>
          </p>
        </div>
      </Container>
    );
  }
}

export default About;
