# Reason for the Widget
The planner widget already has the timer, calendar and clock widgets which I understand can make for a productive day; however an addition of the location widget, would allow the user get precise description of his/her location via the nominatim API, current location and an intuitive weather forecast via the windspeed displayed. A very handy widget for travellers 😎.

# Description Of The Widget

## Location Widget

`MyCustomWidget` is a React component that displays detailed information about the user's location, including their latitude, longitude, accuracy, altitude, heading, speed, and address.

## Usage

To use this component in your React application; first import it, and render it like any other react component:

```javascript
import MyCustomWidget from './MyCustomWidget';
...
function App() {
  return (
    <div>
      <MyCustomWidget />
    </div>
  );
}
```

## How it works

Here is the complete code for the `MyCustomWidget` component:

```javascript
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
```

When the `MyCustomWidget` component is mounted, it uses the `navigator.geolocation` API to get the user's current location. This location data is stored in the `location` state variable using the `useState` hook.

The `useEffect` hook is used to run this code only once when the component is mounted. The `getCurrentPosition` method of the `navigator.geolocation` object is used to get the user's current location. This method takes a callback function as an argument, which is called with the user's location data when it is available.

Once the location data is available, it is stored in the `location` state variable using the `setLocation` function. This causes the component to re-render and display the updated location data.

In addition to getting the user's location, this version of the widget also uses the OpenStreetMap Nominatim API to reverse geocode the user's latitude and longitude and get their address. This is done by making a `fetch` request to the Nominatim API with the user's latitude and longitude as query parameters. The response from this API is a JSON object that contains detailed information about the user's location, including their address.

The address data is stored in the `address` state variable using the `useState` hook and displayed on the screen along with the other location data.

Overall, this widget displays detailed information about the user's location, including their latitude, longitude, accuracy, altitude, heading, speed, and address.

### P.S
Feel free to check out the various widgets here: [The Optimized Planner's App](https://kingsmandralph-plannerwidget.netlify.app)
