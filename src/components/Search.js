import React, { Component } from 'react';
import axios from 'axios';
import Suggestions from './Suggestions';
import { Form } from 'react-bootstrap';

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`stores.json`)
      .then(({ data }) => {
        this.setState({
          results: data.stores
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <Form.Control
          placeholder="Ex. Target, Best Buy..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search;