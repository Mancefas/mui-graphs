import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { temperatureColor, humidityColor, co2Color } from '@/store/common';
import data from '@/store/data.json';

// getting data at 12:00 ( timestamp has +1:00) and getting only first 7 days
const dataForDaysAt12 = data
    .filter((item) => item.timestamp.includes('11:00'))
    .slice(0, 7);

const xAxisDays = dataForDaysAt12.map((item) =>
    new Date(item.timestamp).getDate()
);
const temp = dataForDaysAt12.map((item) => item.temperature);
const humidity = dataForDaysAt12.map((item) => item.humidity);
const CO2 = dataForDaysAt12.map((item) => item.CO2);

export default function DayBars() {
    return (
        <BarChart
            leftAxis={null}
            xAxis={[
                {
                    scaleType: 'band',
                    data: xAxisDays,
                    label: 'Dienos duomenys',
                },
            ]}
            series={[
                { data: temp, label: 'Temperature', color: temperatureColor },
                { data: humidity, label: 'Humidity', color: humidityColor },
                { data: CO2, label: 'CO2', color: co2Color },
            ]}
        />
    );
}
