'use client';

import { useState } from 'react';
import { Modal, Box } from '@mui/material';
import SensorDataCard from '@/components/Organisms/SensorDataCard/SensorDataCard';
import OpenStreetMaps from '@/components/Molecules/OpenStreetMaps/OpenStreetMaps';
import DynamicOpenMap from '@/components/Molecules/OpenStreetMaps';

import styles from './page.module.css';

export default function Home() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <main className={styles.main}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.modalSensorCard}>
                    <SensorDataCard />
                </Box>
            </Modal>

            <DynamicOpenMap handleOpen={handleOpen} />
            {/* <OpenStreetMaps handleOpen={handleOpen} /> */}
        </main>
    );
}
