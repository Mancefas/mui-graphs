'use client';

import { Box } from '@mui/material';
import DayHourlyChart from '@/components/Atoms/DayHourlyChart/DayHourlyChart';
import { getDayData } from '@/utils/getDayData';

const SensorDataPage = async ({ params }: { params: { id: string } }) => {
    const data = await getDayData(params.id);

    return (
        <>
            <div>SensorDataPage {params.id}</div>
            <Box sx={{ width: '80vw', height: '400px', margin: 'auto' }}>
                <DayHourlyChart array={data} />
            </Box>
        </>
    );
};

export default SensorDataPage;
