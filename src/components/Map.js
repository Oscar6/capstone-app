import React,{Component} from 'react';
import ReactMapGL from 'react-map-gl';


const TOKEN = "pk.eyJ1Ijoib3NjYXI2IiwiYSI6ImNqc3FqODd1NzBia20zeXFpbnc3Y20wZTAifQ.NM35sfEySwv4r1iTAM4EsA";

class Map extends Component {



  state = {
    viewport: {
      width: 600,
      height: 600,
      latitude: 29.761993,
      longitude: -95.366302,
      zoom: 8
    }
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}


export default Map