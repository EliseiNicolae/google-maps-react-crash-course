import { useLoadScript, Libraries } from "@react-google-maps/api";
import Map from "../components/map";
import { useState } from "react";

export default function Home() {
  const [ libraries ] = useState(['places']) as Libraries[];
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
