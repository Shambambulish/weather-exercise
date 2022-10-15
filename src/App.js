import './App.css';
import {useEffect, useState} from 'react';
import Weather from './Weather.js'

function App() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  let text = `Your coordinates are: (${lat.toFixed(3)}, ${lng.toFixed(3)})`
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLat(position.coords.latitude)
        setLng(position.coords.longitude)
      }, (error) => {
        alert(error)
      })
    }
    else {
      alert('Your browser does not support geolocation!')
    }
  }, [])
  
  
  
  return (
    <div className="content" style={{margin: 50}}>
      <p>
        {text}
      </p>
      <Weather lat={lat} lng={lng} />
    </div>
  );
}

export default App;
