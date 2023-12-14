import { Typography, Chip, Stack } from '@mui/material';

const RoomStateSection = () => {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">Matuoklio būsena:</Typography>
            <Stack direction="row" justifyContent="center" spacing={1}>
                <Chip label="Patenkinama" color="warning" size="small" />
            </Stack>
        </Stack>
    );
};

export default RoomStateSection;
