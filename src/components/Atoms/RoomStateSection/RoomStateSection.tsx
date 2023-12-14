import { Typography, Chip, Stack } from '@mui/material';

const RoomStateSection = () => {
    return (
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1">Matuoklio būsena : </Typography>
            <Chip label="Patenkinama" color="warning" size="small" />
        </Stack>
    );
};

export default RoomStateSection;
