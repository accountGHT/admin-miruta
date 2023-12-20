import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ29sZGVubWFjZWRldiIsImEiOiJjazBnYnFxb3AwNWdqM2JuNWRwazZxMWY0In0._I3zpcM9QTHNqcXWjWpD6Q';

class Index extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lng: -82.0036,
            lat: 43.6441,
            zoom: 4
        };
    }

    componentDidMount() {
        new mapboxgl.Map({
            container: this.props.element,
            style: 'mapbox://styles/goldenmacedev/ck49vpeap08b61cnubglcag7l',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    render() {
        return (
            <>
                <div id={this.props.element} className={this.props.className} style={{ height:"300px" }}/>
            </>
        )
    }
}

export default Index;