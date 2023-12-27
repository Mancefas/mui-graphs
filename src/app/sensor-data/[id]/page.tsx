'use client';

import DayAvgCharts from '@/components/Templates/DayAvgChartsSection/DayAvgChartsSection';
import DayHourlyCharts from '@/components/Templates/DayHourlyChartsSection/DayHourlyChartsSection';
import { useGraphData } from '@/store/graphData';

const SensorDataPage = ({ params }: { params: { id: string } }) => {
    const { showGraph } = useGraphData();
    return (
        <>
            {showGraph === 'daily' && <DayAvgCharts params={params.id} />}
            {showGraph === 'hourly' && <DayHourlyCharts params={params.id} />}
        </>
    );
};

export default SensorDataPage;
