import React from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import {HiLocationMarker} from 'react-icons/hi'




const Map = () => {

    return (
        <div className='location'>
            <div className='location-wrapper'>
                <HiLocationMarker className='location-icon' />
                <h1>Find Our Location</h1>
            </div>
            <MapContainer className='map-container' center={[-33.9248685, 18.424055299999964]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[-33.9248685, 18.424055299999964]}>
                    <Popup>
                        We ar here
                    </Popup>
                </Marker>
            </MapContainer>
        </div>




    )
}

export default Map
