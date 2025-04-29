import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Polyline } from 'react-leaflet';

const customIcon = L.icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/64/684/684908.png", // URL do ícone
    iconSize: [32, 32], // Tamanho do ícone [largura, altura]
    iconAnchor: [16, 32], // Ponto de ancoragem do ícone
    popupAnchor: [0, -32], // Posição do popup em relação ao ícone
  });
  


const Mapa = () => {
    const position = [-29.716865662394206, -53.72958918802292];

    const positionSul = [-29.717239138209052, -53.73021720488579]; // Um pouco ao sul
   // const positionNorte = [-29.718500, -53.729000]; // Um pouco ao norte
   // const positionLeste = [-29.718800, -53.728800]; // Um pouco a leste
   // const positionOeste = [-29.719100, -53.729800]; // Um pouco a oeste;

    return (
        <div style={{ height: "90vh", width: "100%" }}>
            <MapContainer center={position} zoom={17} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution='Tiles © Esri'
                />
                <Marker position={position} icon={customIcon}>
                    <Popup> Entrada Jardim Botânico UFSM 🌿 </Popup>
                </Marker>

                <Polyline
                positions={[position, positionSul]}
                pathOptions={{ color: 'gray' }}
                />

                <Marker position={positionSul} icon={customIcon}>
                    <Popup> 2 🌿 </Popup>
                </Marker>


            </MapContainer>
        </div>
    );
};

export default Mapa;
