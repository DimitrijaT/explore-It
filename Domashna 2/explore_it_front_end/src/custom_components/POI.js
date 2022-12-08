import React from 'react'

export class POI extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            poi_type: props["type"],
            poi_name: props["name"],
            poi_longitude: props["long"],
            poi_id: props["id"],
            poi_latitude: props["lat"]
        }

    }

    getType() {
        return this.state.poi_type;
    }

    getName() {
        return this.state.poi_name;
    }

    getLongitude() {
        return this.state.poi_longitude;
    }

    getLatitude() {
        return this.state.poi_latitude;
    }

    getId(){
        return this.state.poi_id;
    }

}