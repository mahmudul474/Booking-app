import React, { useContext, useState } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, DistanceMatrixService } from "@react-google-maps/api";
import { API_KEY } from "../../config";
import DataContext from "../../Context/BookingDataContex";






const containerStyle = {
  width: "300px",
  height: "200px",
  marginTop:"40px",
  marginBottom:"40px",
};

  
const location = {
  lat: 51.512290509678216,
  lng: -0.15035981586596867
};

function Map({ distance,setDistance }) {


 

  const { data } = useContext(DataContext);

  const [directionResponse, setDirectionResponse] = useState(null);

  const calculateDistance = (response) => {
    if (response.rows[0].elements[0].status === "OK") {
      const distanceInMeters = response.rows[0].elements[0].distance.value;
      const distanceInKm = distanceInMeters / 1000;
      setDistance(distanceInKm);
    }
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}
     libraries={["places"]}
    >
      <div className="">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={10}>
        {data && data.origin !== "" && data.destination !== "" && (
          <>
            <DirectionsService
              options={{
                destination: data.destination,
                origin: data.origin,
                travelMode: "DRIVING",
              }}
              callback={(res) => {
                if (res !== null) {
                  setDirectionResponse(res);
                }
              }}
            />
            <DistanceMatrixService
              options={{
                destinations: [data.destination],
                origins: [data.origin],
                travelMode: "DRIVING",
              }}
              callback={(res) => {
                if (res !== null) {
                  calculateDistance(res);
                }
              }}
              // Pass setDistance function as a prop
              setDistance={setDistance}
            />
          </>
        )}
        {directionResponse && (
          <DirectionsRenderer
            options={{
              directions: directionResponse,
            }}
          />
        )}
      </GoogleMap>
      </div>
    </LoadScript>
  );
}

export default React.memo(Map);