import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';

export async function GET() {
 try {
    const cityResponse = await fetch(`${env.LANYARD_ENDPOINT}/${env.DISCORD_USER_ID}`);
    const cityData = await cityResponse.json();
    const city = cityData.data.kv.city;
    
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${env.WEATHER_API_KEY}`);

    const weatherData = await weatherResponse.json();

    return json(weatherData);
    } catch (error) {
        return json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}
