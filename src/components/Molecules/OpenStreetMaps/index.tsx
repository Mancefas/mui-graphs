'use client';

// there might be a problem for Open maps map, so this is the solution
import dynamic from 'next/dynamic';
import { Box, CircularProgress } from '@mui/material/';

import classes from './OpenStreetMaps.module.css';

const OpenMap = dynamic(
    () => import('@/components/Molecules/OpenStreetMaps/OpenStreetMaps'),
    {
        ssr: false,
        loading: () => (
            <Box className={classes.loadingContainer}>
                <CircularProgress size={55} />
            </Box>
        ),
    }
);

export default OpenMap;
