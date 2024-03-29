'use client';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

type DayPickerProps = {
    value: string | null;
    setValue: (value: string) => void;
    label: string;
};

const DayPicker = ({ value, setValue, label }: DayPickerProps) => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    disableFuture
                    label={label}
                    format="YYYY-MM-DD"
                    value={value ? dayjs(value) : null}
                    onChange={(newValue) =>
                        setValue(dayjs(newValue).format('YYYY-MM-DD'))
                    }
                />
            </LocalizationProvider>
        </>
    );
};

export default DayPicker;
