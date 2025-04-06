import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/64/684/684908.png", // URL do ícone
    iconSize: [32, 32], // Tamanho do ícone [largura, altura]
    iconAnchor: [16, 32], // Ponto de ancoragem do ícone
    popupAnchor: [0, -32], // Posição do popup em relação ao ícone
  });
  


const Mapa = () => {
    const position = [-29.71870113619748, -53.729370902110595];

   // const positionSul = [-29.719000, -53.729500]; // Um pouco ao sul
    const positionNorte = [-29.718500, -53.729000]; // Um pouco ao norte
   // const positionLeste = [-29.718800, -53.728800]; // Um pouco a leste
   // const positionOeste = [-29.719100, -53.729800]; // Um pouco a oeste;

    return (
        <div style={{ height: "90vh", width: "100%" }}>
            <MapContainer center={position} zoom={17} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup> Jardim Botânico UFSM 🌿 </Popup>
                </Marker>

                <Marker position={positionNorte} icon={customIcon}>
                    <Popup> position norte 🌿 </Popup>
                </Marker>


            </MapContainer>
        </div>
    );
};

export default Mapa;
