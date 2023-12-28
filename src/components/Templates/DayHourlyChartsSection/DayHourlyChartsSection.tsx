'use client';

import { useEffect } from 'react';

import { Typography, Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import DayHourlyChart from '@/components/Atoms/DayHourlyChart/DayHourlyChart';
import ErrorsChartsData from '@/components/Molecules/ErrorsChartsData/ErrorsChartsData';
import { getDayData } from '@/utils/getDayData';
import { useGraphData } from '@/store/graphData';

import classes from '@/app/sensor-data/[id]/page.module.css';

const DayHourlyChartsSection = ({ params }: { params: string }) => {
    const { date, graphData, setGraphData } = useGraphData();

    useEffect(() => {
        const fetchDayHourlyData = async () => {
            const data = await getDayData(params, date);
            setGraphData(data);
        };
        fetchDayHourlyData();
    }, [date]);

    return (
        <>
            {graphData !== null && (
                <Box className={classes.dataDateContainer}>
                    <Typography variant="h4" align="center">
                        Duomenų data {date}
                    </Typography>
                </Box>
            )}

            <Grid2 container className={classes.graphsContainer}>
                <ErrorsChartsData graphData={graphData} />

                {graphData !== null &&
                    'data' in graphData &&
                    graphData.data.length > 0 && (
                        <>
                            {graphData.data.map(
                                (singleParameterData: any, key: number) => (
                                    <Grid2 key={key} xs={12} md={6} xl={4}>
                                        <DayHourlyChart
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
