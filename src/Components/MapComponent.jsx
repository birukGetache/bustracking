import React, { useEffect } from 'react';
import L from 'leaflet'; // Import Leaflet library

function MapComponent() {
    useEffect(() => {
        // Create Leaflet map instance
        const map = L.map('map').setView([9.145, 40.489673], 6); // Centered on Ethiopia

        // Add GeoJSON layer to the map
        fetch('https://api.maptiler.com/data/a72552c2-ce28-404d-8bfb-c179a5130666/features.json?key=MbHU1QJBoB3d6RxJo1Bf')
            .then(response => response.json())
            .then(data => {
                L.geoJSON(data).addTo(map);
            })
            .catch(error => {
                console.error('Error fetching GeoJSON data:', error);
            });

        // Add tile layer (optional, if you want to use additional map tiles)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
        }).addTo(map);

        // Cleanup function to remove the map instance when the component unmounts
        return () => {
            map.remove();
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div id="map" style={{ height: "400px" }}></div>
    );
}

export default MapComponent;
