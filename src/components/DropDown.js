import React from "react";
import { Form } from "react-bootstrap";

class DropDown extends React.Component {
  constructor() {
    super();
    this.state = {
      stores: [],
      selectedStore: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({ selectedStore: event.target.value });
  }

  render() {
    const { stores } = this.props;
    console.log(stores)
    console.log(this.props)
    var options = stores.map((stores, index) => {
      // console.log(stores.name)
      return <option key={index}>{stores.name + " " + "@"  + stores.address}</option>;
    });
    return (
      
        <Form.Label>
          Store
          <br />
          <Form.Control as="select" onChange={this.handleChange} >
            <option>Select store</option>
            {options}
          </Form.Control>        
          {this.state.selectedStore}
        </Form.Label>
        
      
    );
  }
}
export default DropDown;
