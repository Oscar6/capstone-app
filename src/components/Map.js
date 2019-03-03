import React from 'react';
import DeckGL, {LineLayer} from 'deck.gl';
import {StaticMap} from 'react-map-gl';

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoib3NjYXI2IiwiYSI6ImNqc3FqODd1NzBia20zeXFpbnc3Y20wZTAifQ.NM35sfEySwv4r1iTAM4EsA';

// Initial viewport settings
const initialViewState = {
  longitude: -95.3698,
  latitude: 29.7604,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [{sourcePosition: [-95.3698, 29.7604], targetPosition: [-95.3698, 29.7604]}];

class Map extends React.Component {
  render() {
    const layers = [
      new LineLayer({id: 'line-layer', data})
    ];

    return (
      <DeckGL
        initialViewState={initialViewState}
        controller={true}
        layers={layers}
      >
        <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
      </DeckGL>
    );
  }
}

export default Map;