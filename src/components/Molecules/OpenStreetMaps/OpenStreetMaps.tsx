import { MapContainer, TileLayer } from 'react-leaflet';

import { markerPointsType } from '@/types/markerPointsTypes';
import { getPointsData } from '@/utils/getPointsData';
import MapMarker from './MapMarker';

import classes from './OpenStreetMaps.module.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

export type OpenStreetMapsProps = {};

export default async function OpenStreetMaps({}: OpenStreetMapsProps) {
    const data = await getPointsData();

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
