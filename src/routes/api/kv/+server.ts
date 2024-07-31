import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function GET() {
    try {
        const response = await fetch(`${env.LANYARD_ENDPOINT}/${env.DISCORD_USER_ID}`);
        const responseData = await response.json();

        // Extract the 'city' sub-block
        const kv = responseData.data.kv;

        return json({ kv });
    } catch (error) {
        return json({ error: 'Failed to fetch data' }, { status: 500 });
    }
}