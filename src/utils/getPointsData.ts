'use server';

export async function getPointsData() {
 
    const apiUrl = process.env.API_ENDPOINT;

    if (!apiUrl) {
      throw new Error('API_URL is not defined');
    }

    try {
      const res = await fetch(apiUrl, { cache: 'no-store' });
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      return res.json();
    } catch (err: any) {
      // handling error by providing error object in response instead of throwing error
      return { error: err.message }; 
    }

}