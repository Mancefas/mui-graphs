export async function getAvgDayData(sensor: string, dateFrom: string | null, dateTo: string | null) {
    const apiUrl = process.env.NEXT_PUBLIC_API_AVG_DAILY_DATA;
    
    if (!apiUrl) {
        throw new Error('API_URL is not defined');
    }

    const res = await fetch(
        `${apiUrl}?sensorId=${sensor}&dateFrom=${dateFrom}&dateTo=${dateTo}`,
        {
            cache: 'no-store',
        }
    );

    return res.json();
}