import React, { useContext, useState } from 'react';
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { travelSpotcontext } from '../../App';
import './Map.css';

const Map = () => {
    const [travelSpot, setTravelSpot] = useContext(travelSpotcontext);
    const [mapCenter, setMapCenter] = useState({ lat: travelSpot.lat||21.45388, lng: travelSpot.lang||91.96765});
    const [mapZoom, setMapZoom] = useState(10);
    return (
        <div className="map">
            <LeafletMap center={mapCenter} zoom={mapZoom}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
            </LeafletMap>
        </div>
    );
};

export default Map;