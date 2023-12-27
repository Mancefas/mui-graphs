'use client';

import { useEffect } from 'react';

import { Typography, CircularProgress, Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import ChartAvgDay from '@/components/Atoms/ChartAvgDay/ChartAvgDay';
import { useGraphData } from '@/store/graphData';
import { getAvgDayData } from '@/utils/getAvgDayData';

import classes from '../../../app/sensor-data/[id]/page.module.css';

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
                <Box className={classes.inputContainer}>
                    <Typography variant="h4" align="center">
                        Duomenų data nuo {startRangeDay} iki {endRangeDay}
                    </Typography>
                </Box>
            )}

            <Grid2 container className={classes.graphsContainer}>
                {/* Case when loading data */}
                {avgGraphData === null && (
                    <Grid2 xs={12} alignSelf="center">
                        <Typography textAlign="center">
                            <CircularProgress size={55} />
                        </Typography>
                    </Grid2>
                )}

                {/* Case when there is an error from server */}
                {avgGraphData !== null && 'error' in avgGraphData && (
                    <Grid2 xs={12} alignSelf="center">
                        <Typography textAlign="center" variant="h5" color="red">
                            🛑 {avgGraphData.error} 🛑
                        </Typography>
                    </Grid2>
                )}

                {/* Case when there is data from server */}
                {avgGraphData !== null &&
                    'data' in avgGraphData &&
                    //    Case when data object is empty from server
                    (avgGraphData.data.length == 0 ? (
                        <Grid2 xs={12} alignSelf="center">
                            <Typography variant="h5" textAlign="center">
                                Pasirinktai dienai nėra duomenų.
                            </Typography>
                        </Grid2>
                    ) : (
                        // Case when there is data and data in array from server
                        avgGraphData.data.map(
                            // NEED TO CHANGE ANY TYPE
                            (singleParameterData: any, key: number) => (
                                <Grid2 key={key} xs={12} md={6} xl={4}>
                                    <ChartAvgDay array={singleParameterData} />
                                </Grid2>
                            )
                        )
                    ))}
            </Grid2>
        </>
    );
};

export default DayHourlyChartsSection;
