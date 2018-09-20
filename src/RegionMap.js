import './Map.css';
import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [51.505, -0.09]

export default class RegionMap extends Component {
    render() {
        return(
            <Map center={position} zoom={13}/>
        );
    }
}