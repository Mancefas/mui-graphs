import { BarChart } from '@mui/x-charts';
import { singleItem } from '@/types/chartArray';

export type ChartAvgDayTypes = {
    array: singleItem[];
};

export default function ChartAvgDay({ array }: ChartAvgDayTypes) {
    // console.log(array);
    const time = array.map((item) => new Date(item.time));
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
        <BarChart
            // leftAxis={null}
            xAxis={[
                {
                    id: 'time',
                    data: time,
                    scaleType: 'band',
                    label: 'Valandos paroje',
                    valueFormatter: (date) => date.getUTCDate().toString(),
                },
            ]}
            series={[seriesD]}
        />
    );
}
