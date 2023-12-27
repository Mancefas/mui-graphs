export async function getDayData(sensor: string, date: string | null) {
    const apiUrl = process.env.NEXT_PUBLIC_API_ENDPOINT_DAY_DATA;

    if (!apiUrl) {
        throw new Error('API_URL is not defined');
    }

    const res = await fetch(
        `${apiUrl}?sensorId=${sensor}&date=${date}`,
        {
            cache: 'no-store',
        }
    );

    return res.json();
}