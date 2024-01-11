'use client';

import { useEffect } from 'react';

import { Typography, Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import ChartAvgDay from '@/components/Atoms/ChartAvgDay/ChartAvgDay';
import ErrorsChartsData from '@/components/Molecules/ErrorsChartsData/ErrorsChartsData';
import { useGraphData } from '@/store/graphData';
import { getAvgDayData } from '@/utils/getAvgDayData';

import classes from '@/app/sensor-data/[id]/page.module.css';

const DayHourlyChartsSection = ({ params }: { params: string }) => {
    const { startRangeDay, endRangeDay, avgGraphData, setAvgGraphData } =
        useGraphData();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAvgDayData(
                params,
                startRangeDay,
                endRangeDay
            );
            setAvgGraphData(data);
        };
        fetchData();
    }, [startRangeDay, endRangeDay]);

    return (
        <>
            {avgGraphData !== null && (
                <Box className={classes.dataDateContainer}>
                    <Typography variant="h4" align="center">
                        Duomenų data nuo {startRangeDay} iki {endRangeDay}
                    </Typography>
                </Box>
            )}

            <Grid2 container className={classes.graphsContainer}>
                <ErrorsChartsData graphData={avgGraphData} />

                {avgGraphData !== null &&
                    'data' in avgGraphData &&
                    avgGraphData.data.length > 0 && (
                        <>
                            {avgGraphData.data.map(
                                (singleParameterData: any, key: number) => (
                                    <Grid2 key={key} xs={12} md={6} xl={4}>
                                        <ChartAvgDay
                                            array={singleParameterData}
                                        />
                                    </Grid2>
                                )
                            )}
                        </>
                    )}
            </Grid2>
        </>
    );
};

export default DayHourlyChartsSection;
