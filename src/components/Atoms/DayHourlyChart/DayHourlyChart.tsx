import { LineChart } from '@mui/x-charts/LineChart';
import { singleItem } from '@/types/chartArray';

import { chartColor } from '@/store/common';

export type DayHourlyChartTypes = {
    array: singleItem[];
};

export default function DayHourlyChart({ array }: DayHourlyChartTypes) {
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
