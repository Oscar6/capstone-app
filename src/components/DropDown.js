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
    // this.setState({ selectedStore: event.target.value });
    var val = event.target.value
    this.props.storeSelected(val)
  }

  

  render() {
    const { stores } = this.props;
    console.log(stores)
    console.log(this.props)
    var options = stores.map((stores, index) => {
      return <option key={index}>{stores.name + " " + "@" + stores.address}</option>;
    });
    
    return (
      
        <Form.Label>
          Store
          <br />
          <Form.Control as="select" onChange={this.handleChange} name="val">
            <option>Select store</option>
            {options}
          </Form.Control>        
        </Form.Label>
        
      
    );
  }
}
export default DropDown;
