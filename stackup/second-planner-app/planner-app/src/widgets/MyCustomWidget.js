import React, { useEffect, useState } from 'react';

export default function MyCustomWidget() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords);
      fetch(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${position.coords.latitude}&lon=${position.coords.longitude}`
      )
        .then((response) => response.json())
        .then((data) => setAddress(data.display_name));
    });
  }, []);

  return (
    <div>
      {location ? (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>Accuracy: {location.accuracy} meters</p>
          <p>Altitude: {location.altitude} meters</p>
          <p>Altitude Accuracy: {location.altitudeAccuracy} meters</p>
          <p>Heading: {location.heading} degrees</p>
          <p>Speed: {location.speed} meters/second</p>
          <p>Address: {address}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
