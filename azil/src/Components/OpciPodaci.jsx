import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './OpciPodaci.css';

// no need to delete or merge any icon options, just import the icons you need
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultPosition = [45.815399, 15.966568]; // default position for the map
const customMarkerIcon = L.icon({
  iconUrl: '/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41]
});

function OpciPodaci() {
  const shelter = {
    name: "Azil za životinje",
    address: "Ulica 123, Zagreb",
    phone: "01/123-4567",
    email: "info@azil.com",
    lat: 45.815399,
    lng: 15.966568
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    setName('');
    setEmail('');
    setMessage('');
    setStatusMessage('Poruka je poslana!');
  };


  return (
    <div>
      <h2>{shelter.name}</h2>
      <p>{shelter.address}</p>
      <p>Telefon: {shelter.phone}</p>
      <p>Email: {shelter.email}</p>

      <MapContainer center={[shelter.lat, shelter.lng]} zoom={13} className="map-container">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[shelter.lat, shelter.lng]} icon={customMarkerIcon}>
          <Popup>{shelter.name}</Popup>
        </Marker>
      </MapContainer>

      <h3>Kontaktirajte nas</h3>
      {statusMessage && <p>{statusMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Ime:</label>
          <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={event => setEmail(event.target.value)} required />
        </div>
        <div>
          <label htmlFor="message">Poruka:</label>
          <textarea id="message" value={message} onChange={event => setMessage(event.target.value)} required></textarea>
        </div>
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
  }
  export default OpciPodaci;
