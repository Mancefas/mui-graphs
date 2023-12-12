import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const RangePickerSection = () => {
    return (
        <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
                <DatePicker />
            </LocalizationProvider>
        </Box>
    );
};

export default RangePickerSection;
