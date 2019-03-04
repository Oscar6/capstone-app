import React, { Component } from 'react';
import Map from './components/Map';
import 'mapbox-gl/dist/mapbox-gl.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        App.js - landing page
        capstone project
        {/* master test push from oscar */}
          <Map />
      </div>
    );
  }
}

export default App;