import { LineChart } from '@mui/x-charts/LineChart';
import { singleItem } from '@/types/chartArray';

export type DayHourlyChartTypes = {
    array: singleItem[];
};

export default function DayHourlyChart({ array }: DayHourlyChartTypes) {
    const time = array.map((item) => new Date(item.timestamp));
    const mapedData = array.map((item) => item.value);
    const color =
        array[0].name === 'CO'
            ? '#9370DB'
            : array[0].name === 'NO₂'
            ? '#006400'
            : array[0].name === 'O₃'
            ? '#98FB98'
            : array[0].name === 'SO₂'
            ? '#FFDAB9'
            : array[0].name === 'KD₂.₅'
            ? '#FFB6C1'
            : array[0].name === 'KD₁₀'
            ? '#4682B4'
            : array[0].name === 'Temperatūra'
            ? '#F08080'
            : array[0].name === 'Drėgnumas'
            ? '#00BFFF'
            : 'green';

    const seriesD = {
        id: array[0].name.toString(),
        label: `${array[0].name} (${array[0].measure})`,
        data: mapedData,
        area: true,
        stack: 'total',
        showMark: false,
        color: color,
    };

    return (
        <LineChart
            // leftAxis={null}
            xAxis={[
                {
                    id: 'time',
                    data: time,
                    scaleType: 'time',
                    label: 'Valandos paroje',
                    valueFormatter: (date) => date.getUTCHours().toString(),
                },
            ]}
            series={[seriesD]}
        />
    );
}
