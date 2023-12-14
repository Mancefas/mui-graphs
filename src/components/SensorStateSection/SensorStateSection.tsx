import { Typography, Chip, Stack } from '@mui/material';

const SensorStateSection = () => {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">Sensoriaus būsena : </Typography>
            <Chip label="Aktyvus" color="success" size="small" />
        </Stack>
    );
};

export default SensorStateSection;
