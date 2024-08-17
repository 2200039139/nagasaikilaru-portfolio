// src/components/sections/MapComponent.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 16.4478414, // Replace with your latitude
  lng: 80.6132724 // Replace with your longitude
};

const MapComponent = () => {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY" // Replace with your API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
