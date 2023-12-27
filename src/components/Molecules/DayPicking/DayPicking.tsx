import { Stack, Typography } from '@mui/material';
import DayPicker from '@/components/Atoms/DayPicker/DayPicker';
import { useGraphData } from '@/store/graphData';

const DayPicking = () => {
    const { date, updateDate } = useGraphData();
    return (
        <>
            <Stack spacing={2}>
                <Typography>Paros duomenys</Typography>

                <DayPicker
                    value={date}
                    setValue={updateDate}
                    label="Pakeisti datą"
                />
            </Stack>
        </>
    );
};

export default DayPicking;
