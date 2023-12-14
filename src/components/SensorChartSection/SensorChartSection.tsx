'use client';

import { useState } from 'react';
import { Paper, Box, Typography, IconButton, Stack } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import CloseIcon from '@mui/icons-material/Close';

import DayBars from '@/components/DayBars/DayBars';
import HourlyChart from '@/components/HourlyChart/HourlyChart';
import RangePickerSection from '@/components/RangePickerSection/RangePickerSection';
import Chartx from '@/components/ChartTest/ChartTest';

import classes from './SensorChartSection.module.css';

type SensorChartSectionProps = {};

export const SensorChartSection = ({}: SensorChartSectionProps) => {
    const [showingChart, setShowingChart] = useState<string>('hourly');
    const [showingSelectRangeSection, setShowingSelectRangeSection] =
        useState<boolean>(false);

    const chartSelectorHandler = (chartType: string) => {
        setShowingChart(chartType);
        setShowingSelectRangeSection(false);
    };

    return (
        <Paper elevation={10} className={classes.mainCard}>
            <Stack
                justifyContent="space-between"
                alignItems="center"
                direction={{ xs: 'column', sm: 'row' }}
            >
                <Typography variant="h5">
                    Duomenų pasiskirstymas laike
                </Typography>
                <Box>
                    <IconButton
                        aria-label="show hourly chart"
                        onClick={() => chartSelectorHandler('hourly')}
                        sx={{ p: 0 }}
                    >
                        <CalendarTodayIcon />
                    </IconButton>
                    <IconButton
                        aria-label="show daily chart"
                        onClick={() => chartSelectorHandler('daily')}
                        sx={{ p: 0 }}
                    >
                        <CalendarMonthIcon />
                    </IconButton>
                    <IconButton
                        aria-label="show day range component"
                        onClick={() =>
                            setShowingSelectRangeSection(
                                !showingSelectRangeSection
                            )
                        }
                        sx={{ p: 0 }}
                    >
                        {showingSelectRangeSection ? (
                            <CloseIcon />
                        ) : (
                            <EditCalendarIcon />
                        )}
                    </IconButton>
                </Box>
            </Stack>

            <Box className={classes.rangePickerContainer}>
                {showingSelectRangeSection && <RangePickerSection />}
            </Box>

            <Box className={classes.chartsContainer}>
                {showingChart === 'hourly' ? <HourlyChart /> : <DayBars />}
            </Box>
        </Paper>
    );
};
