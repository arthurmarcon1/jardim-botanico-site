import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Mapa = () => {
    const position = [-29.71870113619748, -53.729370902110595];

    return (
        <div style={{ height: "90vh", width: "100%" }}>
            <MapContainer center={position} zoom={17} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup> Jardim Botânico UFSM 🌿 </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Mapa;
