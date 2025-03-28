/* eslint-disable @typescript-eslint/no-namespace */
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import L from "leaflet";
import "leaflet-fullscreen";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare module "leaflet" {
  interface Control {
    fullscreen: (options?: FullscreenOptions) => Control.Fullscreen;
  }

  namespace control {
    function fullscreen(options?: FullscreenOptions): Control.Fullscreen;
  }

  namespace Control {
    interface Fullscreen {
      addTo(map: L.Map): this;
    }
  }

  interface FullscreenOptions {
    position?: L.ControlPosition;
    title?: string;
    titleCancel?: string;
    content?: string;
    forceSeparateButton?: boolean;
    forcePseudoFullscreen?: boolean;
    fullscreenElement?: boolean;
  }
}

const FullscreenButton = () => {
  const map = useMap();
  useEffect(() => {
    const fullscreenControl = L.control
      .fullscreen({
        position: "topright",
      })
      .addTo(map);

    return () => {
      map.removeControl(fullscreenControl);
    };
  }, [map]);

  return null;
};

const customIcon = new L.Icon({
  iconUrl: "/images/marker-red.png",
  iconSize: [42, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const LocationMarker = ({
  position,
  setPosition,
}: {
  position: L.LatLngTuple;
  setPosition: (pos: L.LatLngTuple) => void;
}) => {
  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return (
    <Marker
      position={position}
      icon={customIcon}
      draggable={true}
      eventHandlers={{
        dragend: (e) => {
          const newPos = e.target.getLatLng();
          setPosition([newPos.lat, newPos.lng]);
        },
      }}
    >
      <Popup>
        พิกัด: {position[0].toFixed(5)}, {position[1].toFixed(5)}
      </Popup>
    </Marker>
  );
};

const MapComponent = () => {
  const [startPosition, setStartPosition] = useState<L.LatLngTuple>([
    13.7563, 100.5018,
  ]);
  const [endPosition, setEndPosition] = useState<L.LatLngTuple>([
    13.7611, 100.5018,
  ]);
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    const startLatLng = L.latLng(startPosition);
    const endLatLng = L.latLng(endPosition);
    const dist = startLatLng.distanceTo(endLatLng);
    setDistance(dist / 1000);
  }, [startPosition, endPosition]);

  return (
    <MapContainer
      center={startPosition}
      zoom={12}
      style={{
        height: "400px",
        width: "100%",
        borderRadius: "14px",
        zIndex: 10,
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <FullscreenButton />
      <LocationMarker position={startPosition} setPosition={setStartPosition} />
      <LocationMarker position={endPosition} setPosition={setEndPosition} />
      <Popup position={endPosition}>
        ระยะทางจากจุดเริ่มต้นถึงปลายทาง: {distance.toFixed(2)} กิโลเมตร
      </Popup>
    </MapContainer>
  );
};

export default MapComponent;
