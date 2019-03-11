import React from "react";
import { Form } from "react-bootstrap";

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      stores: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.data });
  }

  render() {
    const { stores } = this.props;

    var options = stores.map((stores, index) => {
      return <option key={index}>{stores.name + " " + "@"  + stores.address}</option>;
    });
    return (
      <Form>
        <Form.Label>
          Store
          <br />
          <Form.Control as="select" onChange={this.handleChange} >
            <option>Select store</option>
            {options}
          </Form.Control>
        </Form.Label>
        <br />
      </Form>
    );
  }
}
export default DropDown;
