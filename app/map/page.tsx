"use client";

import { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Page() {

  // ----------------------------
  // PEOPLE DATA (dynamic state)
  // ----------------------------

  const [people, setPeople] = useState([
    {
      name: "AJ",
      lat: 39.5,
      lng: -98.35,
      bio: "Builder of Communites"
    },
    {
      name: "John",
      lat: 30.2672,
      lng: -97.7431,
      bio: "Austin guy"
    },
    {
      name: "Sarah",
      lat: 41.8781,
      lng: -87.6298,
      bio: "Chicago life"
    }
  ]);

  // ----------------------------
  // FORM STATE
  // ----------------------------

  const [name, setName] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [bio, setBio] = useState("");

  // ----------------------------
  // MAP REFERENCES
  // ----------------------------

  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  // ----------------------------
  // CREATE MAP ONCE
  // ----------------------------

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = "pk.eyJ1IjoiZGVsZ2F0dG9hajc3IiwiYSI6ImNtbjd2dTB0azA0cWkyc3ExdTRwOG9ldHUifQ.TcuyS3Q8a3Cn0zxxWVKE-w";

    mapRef.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-98.5795, 39.8283],
      zoom: 3
    });

    return () => {
      mapRef.current?.remove();
    };

  }, []);

  // ----------------------------
  // ADD MARKERS WHEN PEOPLE CHANGES
  // ----------------------------

  useEffect(() => {
    if (!mapRef.current) return;

    people.forEach((person) => {

      new mapboxgl.Marker()
        .setLngLat([person.lng, person.lat])
        .setPopup(
  new mapboxgl.Popup({
    offset: 25
  }).setHTML(`
    <div style="padding: 4px;">
      <h3 style="font-size:18px;font-weight:bold;">
        ${person.name}
      </h3>

      <p style="margin-top:6px;">
        ${person.bio}
      </p>
    </div>
  `)
)
        .addTo(mapRef.current!);

    });

  }, [people]);

  return (
  <div className="relative w-full h-screen">

    {/* FORM CARD */}
    <div className="absolute top-6 left-6 z-10 w-80 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-white shadow-2xl">

      <h1 className="text-2xl font-bold mb-1 text-[#800000]">
        Communites
      </h1>

      <p className="text-sm text-gray-300 mb-4">
        Benedictine College Class of 2029
      </p>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-3 p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
      />

      <input
        placeholder="Latitude"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
        className="w-full mb-3 p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
      />

      <input
        placeholder="Longitude"
        value={lng}
        onChange={(e) => setLng(e.target.value)}
        className="w-full mb-3 p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
      />

      <input
        placeholder="Bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        className="w-full mb-4 p-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white"
      />

      <button
        onClick={() => {

          if (!name || !lat || !lng) return;

          const newPerson = {
            name,
            lat: parseFloat(lat),
            lng: parseFloat(lng),
            bio
          };

          setPeople([...people, newPerson]);

          setName("");
          setLat("");
          setLng("");
          setBio("");
        }}
        className="w-full bg-[#800000] hover:bg-[#660000] transition-all duration-200 text-white py-2 rounded-lg font-semibold"
      >
        Add Yourself
      </button>

      <p className="text-xs text-gray-500 mt-4">
        Built for connection.
      </p>

    </div>

    {/* MAP */}
    <div
      ref={mapContainer}
      className="w-full h-full"
    />

  </div>
);
}