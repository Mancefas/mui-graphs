import { BarChart } from '@mui/x-charts';
import { singleItem } from '@/types/chartArray';

import { chartColor } from '@/store/common';

export type ChartAvgDayTypes = {
    array: singleItem[];
};

export default function ChartAvgDay({ array }: ChartAvgDayTypes) {
    const time = array.map((item) => new Date(item.time));
    const mapedData = array.map((item) => item.value);

    const color = chartColor(array[0].name);

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
                    label: 'Dienos',
                    valueFormatter: (date) => date.getUTCDate().toString(),
                },
            ]}
            series={[seriesD]}
        />
    );
}
