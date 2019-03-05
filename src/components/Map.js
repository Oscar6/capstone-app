import React from "react";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const Wrapper = styled.div `
    width: ${props => props.width};
    height: ${props => props.height};
`;

export default class Map extends React.Component {
    
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

    render(){
        return <Wrapper width="1280px" height="720px" id="map" />
    }
}