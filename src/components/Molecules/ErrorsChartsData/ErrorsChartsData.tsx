import { Typography, CircularProgress, Box } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { DataItem } from '@/types/chartArray';

type ErrorsChartsDataProps = {
    graphData: DataItem | null;
};

const ErrorsChartsData = ({ graphData }: ErrorsChartsDataProps) => {
    return (
        <>
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
                graphData.data.length === 0 && (
                    <Grid2 xs={12} alignSelf="center">
                        <Typography variant="h5" textAlign="center">
                            Pasirinktai dienai nėra duomenų.
                        </Typography>
                    </Grid2>
                )}
        </>
    );
};

export default ErrorsChartsData;
