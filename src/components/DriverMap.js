import React from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';


const Wrapper = styled.div `
    width: ${props => props.width};
    height: ${props => props.height};
    border-style: ${props => props.borderStyle};
    border-width: ${props => props.borderWidth};
    border-radius: ${props => props.borderRadius};
`;


export default class DriverMap extends React.Component {
    
    componentDidMount(){
        
        this.map = L.map('map', {
            center: [29.7604, -95.3698],
            zoom: 12,
            zoomControl: false
        });
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
            detectRetina: true,
            maxZoom: 20,
            maxNative: 17,
        }).addTo(this.map);
    }

    render() {
        return <Wrapper width="100%" height="100%" borderWidth="2px" borderStyle="solid" borderRadius="20px" id="map" />
    }
  };

