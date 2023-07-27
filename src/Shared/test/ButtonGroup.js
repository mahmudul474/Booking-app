import React, { useState } from 'react';

const PlaceList = ({ places, onPlaceSelect }) => {
  return (
    <ul>
      {places.map((place) => (
        <li key={place.id} onClick={() => onPlaceSelect(place)}>
          {place.name}
        </li>
      ))}
    </ul>
  );
};

const ButtonGroup = () => {
  const places = [
    { id: 1, name: "Place 1" },
    { id: 2, name: "Place 2" },
    { id: 3, name: "Place 3" },
  ];
  
  const [defaultItem, setDefaultItem] = useState(places[0]);
  const [currentItem, setCurrentItem] = useState(null);
  
  const handlePlaceSelect = (place) => {
    setDefaultItem(currentItem);
    setCurrentItem(place);
  };



 
  
  return (
    <div>
      {defaultItem && <p>Default item: {defaultItem.name}</p>}
      
      <PlaceList places={places} onPlaceSelect={handlePlaceSelect} />
    </div>
  );
};

 

export default ButtonGroup;
