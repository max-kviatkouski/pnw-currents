import './Map.css';
import React, {Component} from 'react';
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoia3Z5YXRrb3Zza2lqIiwiYSI6ImNqbWM4cTRkNTBjOWEzcG1vMWhud3hyMzEifQ.XKxBuEcBLU4pbrr-0rHHTQ';

export default class RegionMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lng: -122.4825,
            lat: 47.5811,
            zoom: 8.94
        }
    }

    componentDidMount() {
        const {lng, lat, zoom} = this.state;

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [lng, lat],
            zoom
        });

        map.on('move', () => {
            const {lng, lat} = map.getCenter();
            this.setState({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    render() {
        const {lng, lat, zoom} = this.state;

        return (
            <div id="map-container">
                <div
                    className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
                    <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
                </div>
                <div ref={el => this.mapContainer = el} className="top right left bottom"/>
            </div>
        );
    }
}