'use client';

import DayHourlyChart from '@/components/Atoms/DayHourlyChart/DayHourlyChart';
import { getDayData } from '@/utils/getDayData';
import { singleItem } from '@/types/chartArray';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

const SensorDataPage = async ({ params }: { params: { id: string } }) => {
    const data = await getDayData(params.id);

    return (
        <>
            <div>SensorDataPage {params.id}</div>
            {/* <Box sx={{ width: '35vw', height: '200px', margin: 'auto' }}> */}

            <Grid2
                container
                sx={{ width: '95vw', height: '90vh', margin: 'auto' }}
            >
                {data &&
                    data.map(
                        (singleParameterData: singleItem[], key: number) => (
                            <Grid2 xs={12} md={6} xl={4}>
                                <DayHourlyChart
                                    key={key}
                                    array={singleParameterData}
                                />
                            </Grid2>
                        )
                    )}
            </Grid2>
            {/* </Box> */}
        </>
    );
};

export default SensorDataPage;
