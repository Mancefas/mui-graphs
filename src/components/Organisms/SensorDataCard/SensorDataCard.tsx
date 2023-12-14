'use client';

import { Paper } from '@mui/material';

import classes from './SensorDataCard.module.css';
import SensorStateSection from '@/components/Atoms/SensorStateSection/SensorStateSection';
import { SensorChartSection } from '@/components/Molecules/SensorChartSection/SensorChartSection';
import RoomStateSection from '@/components/Atoms/RoomStateSection/RoomStateSection';

const SensorDataCard = () => {
    return (
        <Paper elevation={10} className={classes.sensorDataCard}>
            <SensorStateSection />
            <RoomStateSection />
            <SensorChartSection />
        </Paper>
    );
};

export default SensorDataCard;
