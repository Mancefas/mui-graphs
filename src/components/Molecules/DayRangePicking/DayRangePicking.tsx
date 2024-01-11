import { Stack } from '@mui/material';
import DayPicker from '@/components/Atoms/DayPicker/DayPicker';
import { useGraphData } from '@/store/graphData';

const DayRangePicking = () => {
    const { startRangeDay, endRangeDay, setStartRangeDay, setEndRangeDay } =
        useGraphData();
    return (
        <>
            <Stack spacing={2}>
                <DayPicker
                    value={startRangeDay}
                    setValue={setStartRangeDay}
                    label="Pradžios data"
                />
                <DayPicker
                    value={endRangeDay}
                    setValue={setEndRangeDay}
                    label="Pabaigos data"
                />
            </Stack>
        </>
    );
};

export default DayRangePicking;
