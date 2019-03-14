import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import { Card, CardBody } from 'reactstrap';
import L from "leaflet";
import OrderForm from "./OrderForm";
import "../Styles/App.css";

export const storeIcon = new L.Icon({
  iconUrl: require("../assets/store.png"),
  iconRetinaUrl: require("../assets/store.png"),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [25, 30],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92]
});

class Map extends React.Component {
  render() {
    return (
      <Card className="widthOfCard">
        <CardBody>
          <p className="orderHeader">Place your return order below</p>
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
        easeLinearity={0.35}
      >
        <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}" />
        <Marker position={[29.7316085, -95.4649623]} icon={storeIcon}>
          <Popup>
            Best Buy <br />
            5133 Richmond Ave
            <br />
            Houston, TX 77056
            <br />
            Store Hours:
            <br />
            Mon-Sat: 10AM-9PM & Sun 11AM-8P
          </Popup>
        </Marker>
        <Marker position={[29.754009, -95.527836]} icon={storeIcon}>
          <Popup>
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
        <Marker position={[29.999184, -95.39424]} icon={storeIcon}>
          <Popup>
            Best Buy <br />
            510 Gulfgate Center Mall
            <br />
            Houston, TX 77087
            <br />
            Store Hours:
            <br />
            Mon-Sat: 10AM-9PM & Sun 11AM-8PM
          </Popup>
        </Marker>
        <Marker position={[29.7741916, -95.3854289]} icon={storeIcon}>
          <Popup>
            Target <br />
            2580 Shearn St
            <br />
            Houston, TX 77007
            <br />
            Store Hours:
            <br />
            8AM-12AM
          </Popup>
        </Marker>
        <Marker position={[29.6929428, -95.4185697]} icon={storeIcon}>
          <Popup>
            Target <br />
            8500 S Main St
            <br />
            Houston, TX 77025
            <br />
            Store Hours:
            <br />
            8AM-12AM
          </Popup>
        </Marker>
        <Marker position={[29.759336, -95.527838]} icon={storeIcon}>
          <Popup>
            Target <br />
            300 Meyerland Plaza Mall
            <br />
            Houston, TX 77096
            <br />
            Store Hours:
            <br />
            8AM-12AM
          </Popup>
        </Marker>
        <Marker position={[29.7728201, -95.401322]} icon={storeIcon}>
          <Popup>
            Walmart <br />
            111 Yale St
            <br />
            Houston, TX 77007
            <br />
            Store Hours:
            <br />
            24 hours
          </Popup>
        </Marker>
        <Marker position={[29.723052, -95.465008]} icon={storeIcon}>
          <Popup>
            Walmart <br />
            5405 S Rice Ave
            <br />
            Houston, TX 77081
            <br />
            Store Hours:
            <br />
            24 hours
          </Popup>
        </Marker>
        <Marker position={[29.788756, -95.465145]} icon={storeIcon}>
          <Popup>
            Walmart <br />
            1118 Silber Rd
            <br />
            Houston, TX 77055
            <br />
            Store Hours:
            <br />
            24 hours
          </Popup>
        </Marker>
        <Marker position={[29.743536, -95.381684]} icon={storeIcon}>
          <Popup>
            Fry's Electronics <br />
            11565 US-59
            <br />
            Houston, TX 77031
            <br />
            Store Hours:
            <br />
            Sun-Fri: 10AM-9PM & Sat 9AM-9PM
          </Popup>
        </Marker>
      </LeafletMap>
      <OrderForm />
      </CardBody>
      </Card>
    );
  }
}

export default Map;
