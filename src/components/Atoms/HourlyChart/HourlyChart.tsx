import { LineChart } from '@mui/x-charts/LineChart';
import { temperatureColor, humidityColor, co2Color } from '@/store/common';
import data from '@/store/data.json';

const dataForDay = data.filter((day) => day.timestamp.includes('2023-12-03'));

const time = dataForDay.map((item) => new Date(item.timestamp));
const Temps = dataForDay.map((item) => item.temperature);
const CO2 = dataForDay.map((item) => item.CO2);
const Humidity = dataForDay.map((item) => item.humidity);

export default function HourlyChart() {
    return (
        <LineChart
            leftAxis={null}
            xAxis={[
                {
                    id: 'time',
                    data: time,
                    scaleType: 'time',
                    label: 'Paros valandiniai duomenys',
                    // valueFormatter: (date) => date.getFullYear().toString(),
                    valueFormatter: (date) => date.getHours().toString(),
                },
            ]}
            series={[
                {
                    id: 'temperature',
                    label: 'Temperature',
                    data: Temps,
                    stack: 'total',
                    area: true,
                    showMark: false,
                    color: temperatureColor,
                },
                {
                    id: 'Humidity',
                    label: 'Humidity',
                    data: Humidity,
                    stack: 'total',
                    area: true,
                    showMark: false,
                    color: humidityColor,
                },
                {
                    id: 'CO2',
                    label: 'CO2',
                    data: CO2,
                    stack: 'total',
                    area: true,
                    showMark: false,
                    color: co2Color,
                },
            ]}
        />
    );
}
