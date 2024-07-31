import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function GET() {
  return json({
    discordId: env.DISCORD_USER_ID
  });
}