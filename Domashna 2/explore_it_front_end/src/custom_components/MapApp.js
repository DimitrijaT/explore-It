import React from 'react';
import {POI} from './POI'
import '../custom_css/Map.css';
import * as L from 'leaflet/dist/leaflet-src'
import '../myIcon.png'
import 'leaflet/dist/leaflet.css'

export class MapApp extends React.Component {

    constructor() {
        super(undefined);

        this.state = {
            poi_elements: [],
            atms: false,
            caterings: false,
            food_shops: false,
            hotels: false,
            pubs: false,
            map_view: null,
            defaultIcon: new L.Icon({
                iconUrl: require("../myIcon.png"), iconSize: [50, 50], iconAnchor: [25, -10],
            }),
            userLocationIcon: new L.Icon({
                iconUrl: require("leaflet/dist/images/marker-icon-2x.png"), iconSize: [20, 30]
            }),
            defaultCoordinates: {
                latitude: 41.99591947737088, longitude: 21.431464162426444
            },
            markerLayer: null,
            userMarker: null
        }
    }

    addPoiElement(jsonElement) {
        let temp_array = this.state.poi_elements;
        temp_array.push(new POI(jsonElement));

        this.setState({
            poi_elements: temp_array
        });
    }

    fill_state_with_results(query) {
        // Store API result in browser storage or cookies?
        this.setState({poi_elements: []});
        return fetch(`http://localhost:8080/api/location/${query}`)
            .then(object_array => {
                console.log(`Promise for ${query} resolved`)
                return object_array.json();
            }, () => {
                console.log(`Promise for ${query} rejected`)
                return Promise.reject();
            })
            .then(el => {
                for (let i = 0; i < el.length; i++) this.addPoiElement(el[i]);
            });
    }

    componentDidMount() {
        this.setState({
            map_view: new L.Map('map', {
                center: [this.state.defaultCoordinates.latitude, this.state.defaultCoordinates.longitude], zoom: 15
            }).addLayer(L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
                maxZoom: 20, attribution: '© <a href="https://stadiamaps.com/">Stadia Maps</a>'
            }))
        });

        if (navigator.geolocation) {
            navigator.permissions
                .query({name: "geolocation"})
                .then((result) => {
                    console.log("Result: " + result.state);
                    if (result.state === "granted" || result.state === "prompt") {
                        this.positionMarker();
                    } else if (result.state === "denied") {
                        console.log("geolocation denied.")
                    }
                }, () => {
                    console.log("geolocation promise rejected");
                });
        }
    }

    positionMarker() {

        let options = {
            enableHighAccuracy: true, timeout: 5000, maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition((position) => {
            this.setUserLocation(position);
            console.log(position)
        }, () => {
            console.log("error prompt geolocation")
        }, options);

    }

    setUserLocation(position) {
        this.setState({
            defaultCoordinates: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        }, () => {
            this.setState({
                userMarker: new L.Marker(
                    [this.state.defaultCoordinates.latitude, this.state.defaultCoordinates.longitude],
                    {icon: this.state.userLocationIcon}
                ).bindPopup("Ваша позиција")
            }, () => {
                this.state.userMarker.addTo(this.state.map_view);
                this.flyToDefaultPosition();
            })

        });

    }


    flyToDefaultPosition() {
        this.state.map_view.flyTo(new L.LatLng(this.state.defaultCoordinates.latitude, this.state.defaultCoordinates.longitude))
    }

    removeMarkers() {
        this.state.map_view.removeLayer(this.state.markerLayer);
        this.setState({
            poi_elements: [],
            markerLayer: null
        })
    }

    addMarkersToMap(icon) {
        let d_icon = icon;
        let temp_Layer = L.layerGroup().addTo(this.state.map_view);
        this.state.poi_elements.forEach((poi) => {
            let poiLat = poi.getLatitude();
            let poiLon = poi.getLongitude()
            let poiName = poi.getName();
            new L.Marker([poiLat, poiLon], {icon: d_icon}).bindPopup(poiName).addTo(temp_Layer);
        })
        this.setState({markerLayer: temp_Layer});
    }

    toggleAtms() {
        this.flyToDefaultPosition();
        let button = document.getElementById("atms_button");
        if (!this.state.atms) {
            // show atms
            this.fill_state_with_results("atms")
                .then(() => {
                    // atms promise is resolved.
                    this.addMarkersToMap(this.state.defaultIcon);
                    button.innerHTML = "Hide Atms"
                    this.setState({atms: true})
                }, () => {
                    // atms promise is not resolved.
                    alert("Atms - API Call failed.")
                });
        } else {
            // hide atms
            this.removeMarkers();
            button.innerHTML = "Show Atms"
            this.setState({atms: false})
        }
    }

    render() {
        return (<div id="main">
            <h1>Explore It!</h1>
            <button id="atms_button" onClick={() => this.toggleAtms()}>Show Atms</button>
            <div id="map"></div>
        </div>)
    }
}
