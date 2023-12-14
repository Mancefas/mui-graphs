import { Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const RangePickerSection = () => {
    return (
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker />
                <DatePicker />
            </LocalizationProvider>
        </Stack>
    );
};

export default RangePickerSection;
