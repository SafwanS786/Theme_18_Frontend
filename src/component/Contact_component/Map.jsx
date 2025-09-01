import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map() {
  return (
    <div className="map_container">
      <MapContainer
        center={[43.0978, -75.2326]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[43.0978, -75.2326]}>
          <Popup>3517 W. Gray St. Utica, Pennsylvania 57867</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
