import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const attractions = [
    { id: 1, name: "Orquidário", lat: -29.7185, lng: -53.716, description: "Espaço com diversas orquídeas." },
    { id: 2, name: "Lago", lat: -29.719, lng: -53.717, description: "Lago com vitórias-régias." }
];

export default function MapView() {
    return (
        <MapContainer center={[-29.718, -53.716]} zoom={17} className="h-screen w-full">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {attractions.map((place) => (
                <Marker key={place.id} position={[place.lat, place.lng]}>
                    <Popup>{place.name}: {place.description}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
