import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../Styles/App.css";

export const storeIcon = new L.Icon({
  iconUrl: require("../assets/box.png"),
  iconRetinaUrl: require("../assets/box.png"),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 30],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92]
});

class DriverMap extends React.Component {
  render() {
    return (
      <LeafletMap className="leaflet-container" style={{ height: 25 + 'rem', width: 1068 + 'px', marginTop: 20 + 'px' }}
        center={[29.7604, -95.3698]}
        zoom={11}
        maxZoom={18}
        attributionControl={true}
        zoomControl={false}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}" />
        <Marker position={[29.7401266, -95.3377017]} icon={storeIcon} onClick= {() => {this.maxZoom=1}}>
          <Popup>
            Pick Up: <br />
            DigitalCrafts <br />
            3302 Canal St
            <br />
            Houston, TX 77003
            <br />
            Item(s):
            <br />
            Displays
            <br />
            Return: <br />
            Best Buy <br />
            100 Meyerland Plaza Mall
            <br />
            Houston, TX 77096
            <br />
            Store Hours:
            <br />
            Mon-Sat: 10AM-9PM & Sun 11AM-8P
          </Popup>
        </Marker>
      </LeafletMap>
    );
  }
}

export default DriverMap;

