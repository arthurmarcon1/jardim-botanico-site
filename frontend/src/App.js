import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { QRCodeSVG } from "qrcode.react";

const attractions = [
  { id: 1, name: "Orquidário", lat: -29.7185, lng: -53.716, description: "Um lindo espaço com diversas espécies de orquídeas.", qr: "https://site-jardim.com/orquidario" },
  { id: 2, name: "Lago das Vitórias-Régias", lat: -29.719, lng: -53.717, description: "Um lago com vitórias-régias e outras plantas aquáticas.", qr: "https://site-jardim.com/lago" }
];

export default function JardimBotanico() {
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-center mb-4">Jardim Botânico UFSM</h1>

      <MapContainer center={[-29.718, -53.716]} zoom={17} className="h-96 w-full">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {attractions.map(attraction => (
          <Marker key={attraction.id} position={[attraction.lat, attraction.lng]}
            eventHandlers={{ click: () => setSelectedAttraction(attraction) }}>
            <Popup>{attraction.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedAttraction && (
        <div className="mt-4 p-4 border rounded shadow-lg bg-white">
          <h2 className="text-lg font-semibold">{selectedAttraction.name}</h2>
          <p>{selectedAttraction.description}</p>
          <div className="flex justify-center mt-2">
            <QRCodeSVG value={selectedAttraction.qr} size={128} />
          </div>
        </div>
      )}
    </div>
  );
}
