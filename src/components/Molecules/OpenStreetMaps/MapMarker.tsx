import { Marker, Popup } from 'react-leaflet';
import { Typography, Chip, Stack } from '@mui/material';

import { markerPointsType } from '@/types/markerPointsTypes';

const MapMarker = ({
    active,
    adress,
    description,
    latitude,
    longitude,
    operational,
    type,
}: Omit<markerPointsType, 'idLocation'>) => {
    return (
        <Marker
            position={[latitude, longitude]}
            eventHandlers={{
                click: (e: any) => {
                    console.log(e);
                },
            }}
        >
            <Popup>
                <Typography variant="subtitle1">
                    Sensoriaus tipas <b>{type}</b>
                </Typography>
                <Typography variant="subtitle1">{adress}</Typography>
                <Typography variant="subtitle1" align="center">
                    {description}
                </Typography>
                <Stack direction="row" justifyContent="center" spacing={2}>
                    {active === 1 ? (
                        <Chip label="Aktyvus" color="success" size="small" />
                    ) : (
                        <Chip label="Neaktyvus" color="error" size="small" />
                    )}
                    {operational === 1 ? (
                        <Chip label="Veikia" color="success" size="small" />
                    ) : (
                        <Chip label="Neveikia" color="error" size="small" />
                    )}
                </Stack>
            </Popup>
        </Marker>
    );
};

export default MapMarker;
