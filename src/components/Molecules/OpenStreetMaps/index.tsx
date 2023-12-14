import dynamic from 'next/dynamic';
import { Box, CircularProgress } from '@mui/material/';
import { OpenStreetMapsProps } from '@/components/Molecules/OpenStreetMaps/OpenStreetMaps';

import classes from './OpenStreetMaps.module.css';

// This approach is needed, because else cant find 'window' when building
// Create a dynamic import for the OpenStreetMaps component
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

// Export the dynamically imported component
export default function DynamicOpenMap(props: OpenStreetMapsProps) {
    return <OpenMap {...props} />;
}
