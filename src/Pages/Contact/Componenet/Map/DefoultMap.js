import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { API_KEY } from '../../../../config';

const containerStyle = {
  width: '100%',
  height: '600px'
};

 
const center = {
  lat: 51.50254166808582,
  lng: -0.13323862768892947
};

function DefoultMap() {
  return (
    
    <LoadScript
      googleMapsApiKey={"AIzaSyAE5EnheBTwEkK93MW0v2XyrwBeg_KxDC0"}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, can be added here */ }
      </GoogleMap>
    </LoadScript>
  );
}

export default DefoultMap
