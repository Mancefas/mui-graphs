'use client';

import { useState, useEffect } from 'react';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { Typography, Stack, CircularProgress, Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import dayjs from 'dayjs';

import DayHourlyChart from '@/components/Atoms/DayHourlyChart/DayHourlyChart';
import { getDayData } from '@/utils/getDayData';
import { DataItem } from '@/types/chartArray';
import classes from './page.module.css';

const SensorDataPage = ({ params }: { params: { id: string } }) => {
    const [fromServer, setFromServer] = useState<DataItem | null>(null);
    const [value, setValue] = useState<dayjs.Dayjs | null>(dayjs('2022-01-23'));

    useEffect(() => {
        const fetchData = async () => {
            const dateForData = dayjs(value).format('YYYY-MM-DD');
            const data = await getDayData(params.id, dateForData);
            setFromServer(data);
        };
        fetchData();
    }, [value]);

    return (
        <>
            <Box className={classes.inputContainer}>
                <Typography variant="h4" align="center">
                    Duomenų data
                </Typography>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        disableFuture
                        label="Pakeisti datą"
                        format="YYYY-MM-DD"
                        value={value}
                        onChange={(newValue) => setValue(dayjs(newValue))}
                    />
                </LocalizationProvider>
            </Box>

            <Grid2 container className={classes.graphsContainer}>
                {/* Case when loading data */}
                {fromServer === null && (
                    <Grid2 xs={12} alignSelf="center">
                        <Typography textAlign="center">
                            <CircularProgress size={55} />
                        </Typography>
                    </Grid2>
                )}

                {/* Case when there is an error from server */}
                {fromServer !== null && 'error' in fromServer && (
                    <Grid2 xs={12} alignSelf="center">
                        <Typography textAlign="center" variant="h5" color="red">
                            🛑 {fromServer.error} 🛑
                        </Typography>
                    </Grid2>
                )}

                {/* Case when there is data from server */}
                {fromServer !== null &&
                    'data' in fromServer &&
                    //    Case when data object is empty from server
                    (fromServer.data.length == 0 ? (
                        <Grid2 xs={12} alignSelf="center">
                            <Typography variant="h5" textAlign="center">
                                Pasirinktai dienai nėra duomenų.
                            </Typography>
                        </Grid2>
                    ) : (
                        // Case when there is data and data in array from server
                        fromServer.data.map(
                            // NEED TO ANY TYPE
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
