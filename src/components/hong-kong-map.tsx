"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Image from "next/image";
import BlurFade from "./magicui/blur-fade";

interface HongKongMapProps {
  delay?: number;
}

// Location data remains the same
const locations = {
  "Tai Tam Reservoir": {
    name: "Tai Tam Reservoir (大潭水塘)",
    description: "Hiking with beautiful mountain views",
    coordinates: [22.26, 114.21],
    type: "nature",
  },
  "Tai On Building": {
    name: "Tai On Building (太安樓)",
    description: "Night market for local food",
    coordinates: [22.2828, 114.2219],
    type: "urban",
  },
  "West Kowloon": {
    name: "West Kowloon (西九龍)",
    description: "Picnicking by the harbor",
    coordinates: [22.3045, 114.1588],
    type: "urban",
  },
  "Shau Kei Wan": {
    name: "Shau Kei Wan (筲箕灣)",
    description: "Start of city walk",
    coordinates: [22.2779, 114.2301],
    type: "urban",
  },
  "Quarry Bay": {
    name: "Quarry Bay (鰂魚涌)",
    description: "End of city walk",
    coordinates: [22.2878, 114.2096],
    type: "urban",
  },
  SoHo: {
    name: "SoHo",
    description: "Bar Leone - Asia's Best Bar 2024",
    coordinates: [22.2819, 114.1511],
    type: "urban",
  },
  "Sai Kung": {
    name: "Sai Kung (西貢)",
    description: "Strolling",
    coordinates: [22.3833, 114.271],
    type: "nature",
  },
};

// Custom icon definitions
const natureIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const urbanIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export const HongKongMap = ({ delay = 0 }: HongKongMapProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fix for Leaflet marker icons in Next.js
  useEffect(() => {
    if (isClient) {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl:
          "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });
    }
  }, [isClient]);

  if (!isClient) {
    return (
      <BlurFade delay={delay}>
        <div className="flex justify-center">
          <div className="bg-card border rounded-lg p-6 w-full max-w-4xl">
            <div className="h-96 flex items-center justify-center">
              Loading Hong Kong Map...
            </div>
          </div>
        </div>
      </BlurFade>
    );
  }

  return (
    <BlurFade delay={delay}>
      <div className="flex justify-center">
        <div className="bg-card border rounded-lg p-6 w-full max-w-4xl">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative w-full h-96 max-w-4xl rounded-lg overflow-hidden border">
              <MapContainer
                key="hong-kong-map"
                center={[22.35, 114.15]} // Center of Hong Kong
                zoom={10}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {Object.entries(locations).map(([key, location]) => (
                  <Marker
                    key={key}
                    position={location.coordinates as [number, number]}
                    icon={location.type === "nature" ? natureIcon : urbanIcon}
                  >
                    <Popup>
                      <span className="font-semibold">{location.name}</span>
                      <br />
                      {location.description}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Image
                  src={natureIcon.options.iconUrl}
                  alt="Nature"
                  width={16}
                  height={16}
                  className="w-4 h-auto"
                />
                <span>Nature</span>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src={urbanIcon.options.iconUrl}
                  alt="Urban"
                  width={16}
                  height={16}
                  className="w-4 h-auto"
                />
                <span>Urban</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlurFade>
  );
};

// Make sure to export the component as default if it's the only export
export default HongKongMap;
