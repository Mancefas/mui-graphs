import { LineChart } from '@mui/x-charts/LineChart';

type singleItem = {
    idMeasurement: number;
    timestamp: string;
    value: number;
    fkParameter: number;
    name: string;
};

type DayHourlyChartTypes = {
    array: singleItem[];
};

export default function DayHourlyChart({ array }: DayHourlyChartTypes) {
    const time = array.map((item) => new Date(item.timestamp));

    // Trying to get all data and filter by parameter here
    const measurementsParameters = new Set(
        array.map((item) => item.fkParameter)
    );
    const uniquefkParameter = Array.from(measurementsParameters);

    const uniqueArrays = [];

    for (const uniqueParameter of uniquefkParameter) {
        const filteredArray = array.filter(
            (item) => item.fkParameter === uniqueParameter
        );
        uniqueArrays.push(filteredArray);
    }

    const seriesMapped = uniqueArrays.map((item) => {
        return {
            id: item[0].name.toString(),
            label: item[0].name,
            data: item.map((item) => item.value),
            area: true,
            stack: 'total',
            showMark: false,
        };
    });

    return (
        <LineChart
            leftAxis={null}
            xAxis={[
                {
                    id: 'time',
                    data: time,
                    scaleType: 'utc',
                    label: 'Paros valandiniai duomenys',
                    // valueFormatter: (date) => date.getFullYear().toString(),
                    valueFormatter: (date) => date.getUTCHours().toString(),
                },
            ]}
            series={seriesMapped}
        />
    );
}
