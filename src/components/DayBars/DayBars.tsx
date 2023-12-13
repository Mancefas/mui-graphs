import {
    ResponsiveChartContainer,
    BarPlot,
    ChartsXAxis,
    ChartsTooltip,
} from '@mui/x-charts/BarChart';

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
        <ResponsiveChartContainer
            margin={{ bottom: 75 }}
            series={[
                { data: temp, label: 'Temperature', type: 'bar' },
                { data: humidity, label: 'Humidity', type: 'bar' },
                { data: CO2, label: 'CO2', type: 'bar' },
            ]}
            xAxis={[{ scaleType: 'band', data: xAxisDays, id: 'x-axis-id' }]}
        >
            <BarPlot />
            <ChartsXAxis
                label="Savaitės dienos duomenys"
                position="bottom"
                axisId="x-axis-id"
            />
            <ChartsTooltip trigger="axis" />
        </ResponsiveChartContainer>
    );
}
