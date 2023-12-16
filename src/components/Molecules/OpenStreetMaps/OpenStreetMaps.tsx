import { MapContainer, TileLayer } from 'react-leaflet';

import { pointsApiPoint } from '@/store/common';
import { markerPointsType } from '@/types/markerPointsTypes';
import MapMarker from './MapMarker';

import classes from './OpenStreetMaps.module.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

export type OpenStreetMapsProps = {
    handleOpen: () => void;
};

async function getData() {
    const res = await fetch(pointsApiPoint);

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function OpenStreetMaps({
    handleOpen,
}: OpenStreetMapsProps) {
    const data = await getData();
    // console.log(data);

    return (
        <MapContainer
            center={[54.90570386681456, 24.008080171164156]}
            zoom={12}
            scrollWheelZoom={false}
            className={classes.mapContainer}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {data &&
                data.map((point: markerPointsType) => (
                    <MapMarker key={point.idLocation} {...point} />
                ))}
            )
        </MapContainer>
    );
}
