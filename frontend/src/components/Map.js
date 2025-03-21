import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    const position = [-29.718, -53.716]; // Coordenadas do Jardim Botânico

    return (
        <MapContainer center={position} zoom={15} style={{ height: "500px", width: "100%" }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup> Jardim Botânico UFSM 🌱 </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
