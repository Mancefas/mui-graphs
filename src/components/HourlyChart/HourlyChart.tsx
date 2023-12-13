import {
    ResponsiveChartContainer,
    ChartsXAxis,
    ChartsTooltip,
    AreaPlot,
} from '@mui/x-charts/LineChart';
import data from '@/store/data.json';

const dataForDay = data.filter((day) => day.timestamp.includes('2023-12-03'));

const time = dataForDay.map((item) => new Date(item.timestamp));
const Temps = dataForDay.map((item) => item.temperature);
const CO2 = dataForDay.map((item) => item.CO2);
const Humidity = dataForDay.map((item) => item.humidity);

export default function HourlyChart() {
    return (
        <ResponsiveChartContainer
            margin={{ bottom: 75 }}
            series={[
                {
                    data: Temps,
                    stack: 'total',
                    area: true,
                    type: 'line',
                },
                {
                    data: Humidity,
                    stack: 'total',
                    area: true,
                    type: 'line',
                },
                {
                    data: CO2,
                    stack: 'total',
                    area: true,
                    type: 'line',
                },
            ]}
            xAxis={[
                {
                    id: 'time',
                    data: time,
                    scaleType: 'time',
                    valueFormatter: (date) => date.getHours().toString(),
                },
            ]}
        >
            <AreaPlot />
            <ChartsXAxis
                label="Paros valandiniai duomenys"
                position="bottom"
                axisId="time"
            />
            <ChartsTooltip trigger="axis" />
        </ResponsiveChartContainer>
    );
}
