'use client';

import { useEffect } from 'react';

import { Typography, CircularProgress, Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import DayHourlyChart from '@/components/Atoms/DayHourlyChart/DayHourlyChart';
import { getDayData } from '@/utils/getDayData';
import { useGraphDayData } from '@/store/graphDayData';
// import { drawerWidth } from '@/components/Molecules/SideDrawer/SideDrawer';

import classes from './page.module.css';

const SensorDataPage = ({ params }: { params: { id: string } }) => {
    const { date, graphData, setGraphData } = useGraphDayData();

    useEffect(() => {
        const fetchData = async () => {
            setGraphData(await getDayData(params.id, date));
        };
        fetchData();
    }, [date]);

    return (
        <>
            {graphData !== null && (
                <Box className={classes.inputContainer}>
                    <Typography variant="h4" align="center">
                        Duomenų data {date}
                    </Typography>
                </Box>
            )}

            <Grid2
                container
                className={classes.graphsContainer}
                // sx={{ width: `calc(95vw - ${drawerWidth}` }}
            >
                {/* Case when loading data */}
                {graphData === null && (
                    <Grid2 xs={12} alignSelf="center">
                        <Typography textAlign="center">
                            <CircularProgress size={55} />
                        </Typography>
                    </Grid2>
                )}

                {/* Case when there is an error from server */}
                {graphData !== null && 'error' in graphData && (
                    <Grid2 xs={12} alignSelf="center">
                        <Typography textAlign="center" variant="h5" color="red">
                            🛑 {graphData.error} 🛑
                        </Typography>
                    </Grid2>
                )}

                {/* Case when there is data from server */}
                {graphData !== null &&
                    'data' in graphData &&
                    //    Case when data object is empty from server
                    (graphData.data.length == 0 ? (
                        <Grid2 xs={12} alignSelf="center">
                            <Typography variant="h5" textAlign="center">
                                Pasirinktai dienai nėra duomenų.
                            </Typography>
                        </Grid2>
                    ) : (
                        // Case when there is data and data in array from server
                        graphData.data.map(
                            // NEED TO CHANGE ANY TYPE
                            (singleParameterData: any, key: number) => (
                                <Grid2 key={key} xs={12} md={6} xl={4}>
                                    <DayHourlyChart
                                        array={singleParameterData}
                                    />
                                </Grid2>
                            )
                        )
                    ))}
            </Grid2>
        </>
    );
};

export default SensorDataPage;
