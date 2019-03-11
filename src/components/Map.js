import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet'
import '../Styles/App.css';

  
  export const storeIcon = new L.Icon({
    iconUrl: require('../assets/store.png'),
    iconRetinaUrl: require('../assets/store.png'),
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [25, 30],
    shadowSize: [68, 95],
    shadowAnchor: [20, 92],
  })

class Map extends React.Component {

    render() {
      return (
        <LeafletMap
          center={[29.7604, -95.3698]}
          zoom={11}
          maxZoom={18}
          attributionControl={true}
          zoomControl={false}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}>
          <TileLayer
            url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
          />
          <Marker position={[29.7316085, -95.4649623]} icon={storeIcon}>
            <Popup>
              Popup for any custom information.
            </Popup>
          </Marker>
          <Marker position={[29.754009, -95.527836]} icon={storeIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        </LeafletMap>
      );
    }
  }
  
  export default Map