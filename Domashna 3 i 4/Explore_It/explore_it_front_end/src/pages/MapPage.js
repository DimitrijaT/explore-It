import React from 'react';
import {POI} from '../POI'
import '../css/MapPage.css';
import * as L from 'leaflet/dist/leaflet-src'
import '../icons/poi_icon.png'
import 'leaflet/dist/leaflet.css'
import i18next, {t} from "i18next";
import {Cookies} from "react-cookie";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export class MapPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            poi_elements: [],
            map_view: null,
            defaultIcon: new L.Icon({
                iconUrl: require("../icons/poi_icon.png"), iconSize: [20, 30], iconAnchor: [25, -10],
            }),
            userLocationIcon: new L.Icon({
                iconUrl: require("leaflet/dist/images/marker-icon-2x.png"), iconSize: [20, 30]
            }),
            defaultCoordinates: {
                latitude: 41.99591947737088, longitude: 21.431464162426444
            },
            markerLayer: null,
            userMarker: null,
            language: "mk",
            atms: false,
            hotels: false,
            restaurants: false,
            bars: false,
            cafes: false,
            fast_food: false
        }
    }

    clearAllButtonPresses() {
        this.setState({
            atms: false,
            hotels: false,
            restaurants: false,
            bars: false,
            cafes: false,
            fast_food: false
        })
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
        return fetch(`https://exploreit-mk.online:8080/api/location/get-locations?type=${query}`)
            .then(object_array => {
                console.log(`Promise for ${query} resolved`)
                return object_array.json();
            }, () => {
                console.log(`Promise for ${query} rejected`)
                return Promise.reject();
            })
            .then(el => {
                console.log(el)
                for (let i = 0; i < el.length; i++) this.addPoiElement(el[i]);
            });
    }

    componentDidMount() {
        this.setState({

            map_view: new L.Map('map', {
                center: [this.state.defaultCoordinates.latitude, this.state.defaultCoordinates.longitude], zoom: 12
            }).addLayer(L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 20, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }))
        });

        if (navigator.geolocation) {
            navigator.permissions.query({ name: "geolocation" }).then(
                (result) => {
                    console.log("geolocation promise fulfilled");
                    if (result.state === "granted" || result.state === "prompt") {
                        this.positionMarker();
                    } else if (result.state === "denied") {
                        console.log("geolocation denied.");
                        this.resetUserMarker();
                    }
                },
                (error) => {
                    console.log("geolocation promise rejected:", error);
                    this.resetUserMarker();
                }
            );
        }

        let tempCookie = new Cookies().get("lang");
        if (tempCookie === undefined) {
            new Cookies().set("lang", "mk");
            tempCookie = "mk";
        }
        this.changeLanguage(tempCookie)

    }

    positionMarker() {

        let options = {
            enableHighAccuracy: true, timeout: 5000, maximumAge: 0,
        };

        navigator.geolocation.getCurrentPosition((position) => {
            console.log("positionMarker()")
            this.setState({
                defaultCoordinates: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            }, () => {
                this.resetUserMarker();
            });
        }, () => {
            console.log("error prompt geolocation");
            this.resetUserMarker();
        }, options);

    }

    resetUserMarker() {
        this.setState({
            userMarker: new L.Marker([this.state.defaultCoordinates.latitude, this.state.defaultCoordinates.longitude], {icon: this.state.userLocationIcon})
                .bindPopup(t("user_position"), {offset: [0, -10]})
        }, () => {
            this.state.userMarker.addTo(this.state.map_view);
            this.flyToDefaultPosition();
        })
    }

    flyToDefaultPosition() {
        this.state.map_view.flyTo([this.state.defaultCoordinates.latitude, this.state.defaultCoordinates.longitude], 12);
    }

    removeMarkers() {
        if (this.state.markerLayer !== null) this.state.map_view.removeLayer(this.state.markerLayer);
        this.setState({
            poi_elements: [], markerLayer: null
        })
        this.flyToDefaultPosition();
        this.clearAllButtonPresses();
    }

    addMarkersToMap(icon) {
        let d_icon = icon;
        let temp_Layer = L.layerGroup().addTo(this.state.map_view);
        this.state.poi_elements.forEach((poi) => {
            let poiLat = poi.getLatitude();
            let poiLon = poi.getLongitude();
            let poiName = poi.getName();
            let poiType = poi.getType();
            let p_type = t('type');
            let p_id = t('id');
            let distance = this.state.map_view.distance([poiLat, poiLon], [this.state.defaultCoordinates.latitude, this.state.defaultCoordinates.longitude]) / 1000.0;
            distance = distance.toFixed(2);
            let poiId = poi.getId();
            new L.Marker([poiLat, poiLon], {icon: d_icon})
                .bindPopup(`
                    <h3>${poiName}</h3>
                    <p>${t("distance_from_location")}: ${distance}km</p>
                    <p>${p_type}: ${poiType}</p>
                    <p>${p_id}: ${poiId}</p>
                    <a href="https://www.google.com/maps/search/?api=1&query=${poiLat}%2C${poiLon}" target="_blank">${t("send_to_g_maps")}</a>`, {offset: [-15, 10]})
                .addTo(temp_Layer);
        })
        this.setState({markerLayer: temp_Layer});
    }

    changeLanguage(desiredLang) {
        if (this.state.language !== desiredLang) {
            i18next.changeLanguage(desiredLang).then(() => {
                this.setState({language: desiredLang})
                new Cookies().set("lang", desiredLang, {maxAge: 3600});
            });
        }
    }

    reloadMap() {
        this.resetUserMarker();
        if (this.state.markerLayer !== null) {
            this.state.map_view.removeLayer(this.state.markerLayer);
            this.addMarkersToMap(this.state.defaultIcon);
        }
    }

    showAtms() {
        this.clearAllButtonPresses();
        this.genericShow_query("atm");
    }

    showRestaurants() {
        this.clearAllButtonPresses();
        this.genericShow_query("restaurant");
    }

    showHotels() {
        this.clearAllButtonPresses();
        this.genericShow_query("hotel");
    }

    showBars() {
        this.clearAllButtonPresses();
        this.setState({bars: true});
        this.genericShow_query("bar");
    }

    showCafes() {
        this.clearAllButtonPresses();
        this.genericShow_query("cafe")
    }

    showFastFood() {
        this.clearAllButtonPresses();
        this.genericShow_query("fast_food")
    }

    genericShow_query(query) {
        this.removeMarkers();
        this.flyToDefaultPosition();
        this.fill_state_with_results(query)
            .then(() => {
                // atms promise is resolved.
                this.addMarkersToMap(this.state.defaultIcon);
            }, () => {
                // atms promise is not resolved.
                alert(query + " - API Call failed.")
            });
    }

    search() {
        if(this.state.poi_elements.length === 0)
            alert(t("empty_poi_list_search_error"))
        let query = document.getElementById("search_field").value
        if (query !== "") {
            let results = [];
            let temp_poi_holder;
            for (const property in this.state.markerLayer._layers) {
                temp_poi_holder = this.state.markerLayer._layers[property];
                if (temp_poi_holder._popup._content.split("</h3>")[0].toString().trim().toLowerCase().includes(query.toLowerCase())) {
                    results.push(temp_poi_holder);
                }
            }
            if (results.length > 0) {
                this.state.map_view.openPopup(results[0]._popup, [results[0]._latlng.lat, results[0]._latlng.lng])
                this.state.map_view.flyTo([results[0]._latlng.lat, results[0]._latlng.lng], 15, {easeLinearity: 0.15})
            }
        } else {
            console.log("cannot find poi")
        }
    }

    render() {
        return (<div id="main_container">
            <div id="poi_list">
                <ButtonGroup id="poi_button_group">

                    <Button bsPrefix="customBtn" variant="poi" onClick={() => {
                        if (!this.state.atms) {
                            this.showAtms();
                            this.setState({atms: true});
                        } else {
                            this.removeMarkers();
                            this.flyToDefaultPosition();
                            this.setState({atms: false});
                        }
                    }} style={{backgroundColor: !this.state.atms ? "#2D3748FF" : "#DC3545"}}>{
                        <span role="img" aria-label="sheep">💰{t("show_atms")}</span>}
                    </Button>

                    <Button bsPrefix="customBtn" variant="poi" onClick={() => {
                        if (!this.state.hotels) {
                            this.showHotels();
                            this.setState({hotels: true})
                        } else {
                            this.removeMarkers();
                            this.flyToDefaultPosition();
                            this.setState({hotels: false});
                        }

                    }} style={{backgroundColor: !this.state.hotels ? "#2D3748FF" : "#DC3545"}}>
                        {<span role="img" aria-label="sheep">🛎{t("show_hotels")}</span>}
                    </Button>

                    <Button bsPrefix="customBtn" variant="poi" onClick={() => {
                        if (!this.state.restaurants) {
                            this.showRestaurants();
                            this.setState({restaurants: true});
                        } else {
                            this.removeMarkers();
                            this.flyToDefaultPosition();
                            this.setState({restaurants: false});
                        }
                    }} style={{backgroundColor: !this.state.restaurants ? "#2D3748FF" : "#DC3545"}}>
                        {<span role="img" aria-label="sheep">🍽️{t("show_restaurants")}</span>}
                    </Button>


                    <Button bsPrefix="customBtn" variant="poi" onClick={() => {
                        if (!this.state.bars) {
                            this.showBars();
                            this.setState({bars: true})
                        } else {
                            this.removeMarkers();
                            this.flyToDefaultPosition();
                            this.setState({bars: false});
                        }
                    }} style={{backgroundColor: !this.state.bars ? "#2D3748FF" : "#DC3545"}}>
                        {<span role="img" aria-label="sheep">🍸{t("show_bars")}</span>}
                    </Button>


                    <Button bsPrefix="customBtn" variant="poi" onClick={() => {
                        if (!this.state.cafes) {
                            this.showCafes();
                            this.setState({cafes: true})
                        } else {
                            this.removeMarkers();
                            this.flyToDefaultPosition();
                            this.setState({cafes: false});
                        }
                    }} style={{backgroundColor: !this.state.cafes ? "#2D3748FF" : "#DC3545"}}>
                        {<span role="img" aria-label="sheep">☕{t("show_cafe")}</span>}
                    </Button>


                    <Button bsPrefix="customBtn" variant="poi" onClick={() => {
                        if(!this.state.fast_food) {
                            this.showFastFood();
                            this.setState({fast_food: true});
                        } else {
                            this.removeMarkers();
                            this.flyToDefaultPosition();
                            this.setState({fast_food: false});
                        }
                    }} style={{backgroundColor: !this.state.fast_food ? "#2D3748FF" : "#DC3545"}}>
                        {<span role="img" aria-label="sheep">🍔{t("show_fast_food")}</span>}
                    </Button>
                </ButtonGroup>
            </div>
            <div id="map_and_search">
                <div id="map_view">

                    <div id="map" className="bodyDiv"/>

                    <div>
                        <Button variant="danger" id="clearMapButton" onClick={() => {
                            this.removeMarkers();
                        }}>{t("clear_map")}</Button>
                    </div>

                </div>
                <div id="search_view">
                    <h3>{t('search')}</h3>
                    <input type="text" id="search_field"></input>
                    <div id="buttonHolder">
                        <Button type="submit" variant="outline-dark" id="search_button" onClick={() => {
                            this.search();
                        }}>{t("submit_search")}</Button>
                        <Button type="reset" variant="danger" id="reset_search" onClick={() => {
                            document.getElementById("search_field").value = "";
                            this.removeMarkers();
                        }}>{t("reset_search")}</Button>
                    </div>
                </div>
            </div>
        </div>)
    }

}





