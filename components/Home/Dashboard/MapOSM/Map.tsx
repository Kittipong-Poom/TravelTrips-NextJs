/* eslint-disable */
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
import "@/types/leaflet-extensions";
// ✅ กำหนดไอคอน custom
const customIcon = new L.Icon({
  iconUrl: "/images/marker-red.png",
  iconSize: [42, 45],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
// ✅ ฟังก์ชันตรวจสอบ fullscreen บน iOS
const checkFullscreen = (setIsFullscreen: (state: boolean) => void) => {
  const doc = document as Document & {
    webkitFullscreenElement?: Element;
    webkitRequestFullscreen?: () => Promise<void>;
  };

  const isFull = !!(document.fullscreenElement || doc.webkitFullscreenElement);
  setIsFullscreen(isFull);
};
// ✅ ป้องกัน iOS ออกจาก fullscreen เอง
const FullscreenButton = () => {
  const map = useMap();
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    L.control.fullscreen({ position: "topright" }).addTo(map);

    document.addEventListener("fullscreenchange", () =>
      checkFullscreen(setIsFullscreen)
    );
    document.addEventListener("webkitfullscreenchange", () =>
      checkFullscreen(setIsFullscreen)
    );

    return () => {
      document.removeEventListener("fullscreenchange", () =>
        checkFullscreen(setIsFullscreen)
      );
      document.removeEventListener("webkitfullscreenchange", () =>
        checkFullscreen(setIsFullscreen)
      );
    };
  }, [map]);

  useEffect(() => {
    if (isFullscreen && /iPad|iPhone|iPod/.test(navigator.userAgent)) {
      setTimeout(() => {
        const doc = document as Document & {
          webkitFullscreenElement?: Element;
          webkitRequestFullscreen?: () => Promise<void>;
        };
        if (!document.fullscreenElement && !doc.webkitFullscreenElement) {
          document.documentElement.requestFullscreen?.() ||
            doc.webkitRequestFullscreen?.();
        }
      }, 500);
    }
  }, [isFullscreen]);

  return null;
};

// ✅ Location Marker สามารถลากได้
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
// ✅ คำนวณระยะทางระหว่างสองจุด
const calculateDistance = (start: L.LatLngTuple, end: L.LatLngTuple) => {
  return L.latLng(start).distanceTo(L.latLng(end)) / 1000;
};

// ✅ MapComponent หลัก
const MapComponent = () => {
  const [startPosition, setStartPosition] = useState<L.LatLngTuple>([
    13.7563, 100.5018,
  ]);
  const [endPosition, setEndPosition] = useState<L.LatLngTuple>([
    13.7611, 100.5018,
  ]);
  const [distance, setDistance] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    setDistance(calculateDistance(startPosition, endPosition));
  }, [startPosition, endPosition]);

  const handleMarkerDragEnd = (newPosition: L.LatLngTuple) => {
    setEndPosition(newPosition);
    setShowPopup(true);
  };

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
      <LocationMarker
        position={endPosition}
        setPosition={handleMarkerDragEnd}
      />
      {showPopup && (
        <Popup position={endPosition}>
          ระยะทางจากจุดเริ่มต้นถึงปลายทาง: {distance.toFixed(2)} กิโลเมตร
        </Popup>
      )}
    </MapContainer>
  );
};

export default MapComponent;
