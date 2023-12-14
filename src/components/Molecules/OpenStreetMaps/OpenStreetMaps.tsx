import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Typography } from '@mui/material';
import SensorStateSection from '@/components/Atoms/SensorStateSection/SensorStateSection';
import RoomStateSection from '@/components/Atoms/RoomStateSection/RoomStateSection';

import classes from './OpenStreetMaps.module.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

type OpenStreetMapsProps = {};

export default function OpenStreetMaps({}: OpenStreetMapsProps) {
    return (
        <MapContainer
            center={[54.90570386681456, 24.008080171164156]}
            zoom={15}
            scrollWheelZoom={false}
            className={classes.mapContainer}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={[54.90570386681456, 24.008080171164156]}
                eventHandlers={{
                    click: () => {
                        console.log('marker clicked');
                    },
                }}
            >
                <Popup>
                    <Typography variant="subtitle1">
                        Sensorius <b>564F437631450017</b>
                    </Typography>
                    <SensorStateSection />
                    <RoomStateSection />
                </Popup>
            </Marker>
        </MapContainer>
    );
}
