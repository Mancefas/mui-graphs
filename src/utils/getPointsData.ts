'use server';

export async function getPointsData() {
  try {
    const apiUrl = process.env.API_ENDPOINT;

    if (!apiUrl) {
      throw new Error('API_URL is not defined');
    }

    const res = await fetch(apiUrl);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for the error boundary
  }
}