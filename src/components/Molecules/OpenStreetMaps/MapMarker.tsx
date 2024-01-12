import { Marker, Popup } from 'react-leaflet';
import { useState } from 'react';
import { Typography, Chip, Stack, Box, CircularProgress } from '@mui/material';
import Link from 'next/link';
import dayjs from 'dayjs';

import { markerPointsType } from '@/types/markerPointsTypes';

const MapMarker = ({
    idSensor,
    active,
    adress,
    description,
    lastMeasure,
    latitude,
    longitude,
    operational,
    type,
}: markerPointsType) => {
    const [loading, setLoading] = useState<boolean>(false);
    return (
        <Marker position={[latitude, longitude]}>
            <Popup>
                <Stack spacing={2}>
                    <Typography variant="subtitle1">
                        Sensoriaus tipas <b>{type}</b>
                    </Typography>
                    <Typography variant="subtitle1">{adress}</Typography>
                    <Typography variant="subtitle1">{description}</Typography>
                    <Stack direction="row" justifyContent="center" spacing={2}>
                        {active === 1 ? (
                            <Chip
                                label="Aktyvus"
                                color="success"
                                size="small"
                            />
                        ) : (
                            <Chip
                                label="Neaktyvus"
                                color="error"
                                size="small"
                            />
                        )}
                        {operational === 1 ? (
                            <Chip label="Veikia" color="success" size="small" />
                        ) : (
                            <Chip label="Neveikia" color="error" size="small" />
                        )}
                    </Stack>
                    <Stack>
                        <Typography variant="subtitle1">
                            Paskutinis matavimas
                        </Typography>
                        <Typography variant="subtitle1">
                            {dayjs(lastMeasure)
                                .format('YYYY/MM/DD HH:MM')
                                .toString()}
                        </Typography>
                    </Stack>
                    <Stack direction="row" gap="1">
                        <Link
                            href={`/sensor-data/${idSensor}`}
                            onClick={() => setLoading(true)}
                        >
                            <Typography variant="subtitle1">
                                Peržiūrėti duomenis
                            </Typography>
                        </Link>
                        <Box sx={{ minHeight: '28px' }}>
                            {loading && <CircularProgress size={20} />}
                        </Box>
                    </Stack>
                </Stack>
            </Popup>
        </Marker>
    );
};

export default MapMarker;
