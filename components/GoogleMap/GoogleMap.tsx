"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};
interface MapProps {
  location?: {
    lat: number;
    lng: number;
  };
}
const Map = ({ location }: MapProps) => {
  const defaultLocation = {
    lat: 18.5888,
    lng: 98.487,
  };

  const center = location || defaultLocation;

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};
export default Map;
